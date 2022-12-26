const { News, validate } = require("../models/news");
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
  const news = await News.find();

  for (let post of news) {
    post.src = await getObjectSignedUrl(post.src);
  }
  res.send(news);
});

router.post("/", upload.single("image"), async (req, res) => {
  const file = req.file;
  const imageName = `${req.file.originalname}${Date.now()}`;
  const fileBuffer = req.file.buffer;

  await uploadFile(fileBuffer, imageName, file.mimetype);

  let news = new News({
    src: imageName,
    title: req.body.title,
    discribtion: req.body.discription,
  });
  news = await news.save();

  res.send(news);
});

router.delete("/:id", async (req, res) => {
  let news = await News.findById(req.params.id);
  await deleteFile(news.src);
  news.remove();
  res.send(news);
});

module.exports = router;
