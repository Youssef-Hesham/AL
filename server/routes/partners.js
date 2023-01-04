const { Partner } = require("../models/partners");
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
  const partner = await Partner.find();

  for (let post of partner) {
    post.src = await getObjectSignedUrl(post.src);
  }
  res.send(partner);
});

router.post("/", upload.single("image"), async (req, res) => {
  const file = req.file;
  const imageName = `${req.file.originalname}${Date.now()}`;
  const fileBuffer = req.file.buffer;

  await uploadFile(fileBuffer, imageName, file.mimetype);

  let partner = new Partner({
    src: imageName,
    title: req.body.title,
    link: req.body.link,
  });
  partner = await partner.save();

  res.send(partner);
});

router.delete("/:id", async (req, res) => {
  let partner = await Partner.findById(req.params.id);
  await deleteFile(partner.src);
  partner.remove();
  res.send(partner);
});

module.exports = router;
