const { Education } = require("../models/education");
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
  const education = await Education.find();

  for (let post of education) {
    post.src = await getObjectSignedUrl(post.src);
  }
  res.send(education);
});

router.post("/", upload.single("image"), async (req, res) => {
  const file = req.file;
  const imageName = `${req.file.originalname}${Date.now()}`;
  const fileBuffer = req.file.buffer;

  await uploadFile(fileBuffer, imageName, file.mimetype);

  let education = new Education({
    src: imageName,
    title: req.body.title,
    discription: req.body.discription,
    link: req.body.link,
  });
  education = await education.save();

  res.send(education);
});

router.delete("/:id", async (req, res) => {
  let education = await Education.findById(req.params.id);
  await deleteFile(education.src);
  education.remove();
  res.send(education);
});

module.exports = router;
