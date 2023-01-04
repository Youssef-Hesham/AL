const { Materials } = require("../models/material");
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
  const materials = await Materials.find();

  for (let post of materials) {
    post.src = await getObjectSignedUrl(post.src);
  }
  res.send(materials);
});

router.post("/", upload.single("image"), async (req, res) => {
  const file = req.file;
  const imageName = `${req.file.originalname}${Date.now()}`;
  const fileBuffer = req.file.buffer;

  await uploadFile(fileBuffer, imageName, file.mimetype);

  let materials = new Materials({
    src: imageName,
    title: req.body.title,
    discription: req.body.discription,
    link: req.body.link,
  });
  materials = await materials.save();

  res.send(materials);
});

router.delete("/:id", async (req, res) => {
  let materials = await Materials.findById(req.params.id);
  await deleteFile(materials.src);
  materials.remove();
  res.send(materials);
});

module.exports = router;
