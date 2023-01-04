const { Enviromental } = require("../models/enviromental");
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
  const enviromental = await Enviromental.find();

  for (let post of enviromental) {
    post.src = await getObjectSignedUrl(post.src);
  }
  res.send(enviromental);
});

router.post("/", upload.single("image"), async (req, res) => {
  const file = req.file;
  const imageName = `${req.file.originalname}${Date.now()}`;
  const fileBuffer = req.file.buffer;

  await uploadFile(fileBuffer, imageName, file.mimetype);

  let enviromental = new Enviromental({
    src: imageName,
    title: req.body.title,
    discription: req.body.discription,
    link: req.body.link,
  });
  enviromental = await enviromental.save();

  res.send(enviromental);
});

router.delete("/:id", async (req, res) => {
  let enviromental = await Enviromental.findById(req.params.id);
  await deleteFile(enviromental.src);
  enviromental.remove();
  res.send(enviromental);
});

module.exports = router;
