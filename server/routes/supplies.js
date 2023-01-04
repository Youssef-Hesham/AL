const { Supplies } = require("../models/supplies");
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
  const supplies = await Supplies.find();

  for (let post of supplies) {
    post.src = await getObjectSignedUrl(post.src);
  }
  res.send(supplies);
});

router.post("/", upload.single("image"), async (req, res) => {
  const file = req.file;
  const imageName = `${req.file.originalname}${Date.now()}`;
  const fileBuffer = req.file.buffer;

  await uploadFile(fileBuffer, imageName, file.mimetype);

  let supplies = new Supplies({
    src: imageName,
    title: req.body.title,
    discription: req.body.discription,
    link: req.body.link,
  });
  supplies = await supplies.save();

  res.send(supplies);
});

router.delete("/:id", async (req, res) => {
  let supplies = await Supplies.findById(req.params.id);
  await deleteFile(supplies.src);
  supplies.remove();
  res.send(supplies);
});

module.exports = router;
