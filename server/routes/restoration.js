const { Restoration } = require("../models/restoration");
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
  const restoration = await Restoration.find();

  for (let post of restoration) {
    post.src = await getObjectSignedUrl(post.src);
  }
  res.send(restoration);
});

router.post("/", upload.single("image"), async (req, res) => {
  const file = req.file;
  const imageName = `${req.file.originalname}${Date.now()}`;
  const fileBuffer = req.file.buffer;

  await uploadFile(fileBuffer, imageName, file.mimetype);

  let restoration = new Restoration({
    src: imageName,
    title: req.body.title,
    discription: req.body.discription,
    link: req.body.link,
  });
  restoration = await restoration.save();

  res.send(restoration);
});

router.delete("/:id", async (req, res) => {
  let restoration = await Restoration.findById(req.params.id);
  await deleteFile(restoration.src);
  restoration.remove();
  res.send(restoration);
});

module.exports = router;
