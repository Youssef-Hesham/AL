const { Pcb } = require("../models/Pcbs");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  uploadFile,
  deleteFile,
  getObjectSignedUrl,
} = require("../controller/s3");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
  const pcb = await Pcb.find();

  for (let post of pcb) {
    post.src = await getObjectSignedUrl(post.src);
  }
  res.send(pcb);
});

router.post("/", upload.single("image"), async (req, res) => {
  const file = req.file;
  const imageName = `${req.file.originalname}${Date.now()}`;
  const fileBuffer = req.file.buffer;

  await uploadFile(fileBuffer, imageName, file.mimetype);

  let pcb = new Pcb({
    src: imageName,
    title: req.body.title,
    discription: req.body.discription,
    link: req.body.link,
  });
  pcb = await pcb.save();

  res.send(pcb);
});

router.delete("/:id", async (req, res) => {
  let pcb = await Pcb.findById(req.params.id);
  await deleteFile(pcb.src);
  pcb.remove();
  res.send(pcb);
});

module.exports = router;
