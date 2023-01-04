const { Life } = require("../models/life");
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
  const life = await Life.find();

  for (let post of life) {
    post.src = await getObjectSignedUrl(post.src);
  }
  res.send(life);
});

router.post("/", upload.single("image"), async (req, res) => {
  const file = req.file;
  const imageName = `${req.file.originalname}${Date.now()}`;
  const fileBuffer = req.file.buffer;

  await uploadFile(fileBuffer, imageName, file.mimetype);

  let life = new Life({
    src: imageName,
    title: req.body.title,
    discription: req.body.discription,
    link: req.body.link,
  });
  life = await life.save();

  res.send(life);
});

router.delete("/:id", async (req, res) => {
  let life = await Life.findById(req.params.id);
  await deleteFile(life.src);
  life.remove();
  res.send(life);
});

module.exports = router;
