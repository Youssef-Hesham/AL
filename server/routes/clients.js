const { Client, validate } = require("../models/clients");
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
  const clients = await Client.find();

  for (let post of clients) {
    post.src = await getObjectSignedUrl(post.src);
  }
  res.send(clients);
});

router.post("/", upload.single("image"), async (req, res) => {
  const file = req.file;
  const imageName = `${req.file.originalname}${Date.now()}`;
  const fileBuffer = req.file.buffer;

  await uploadFile(fileBuffer, imageName, file.mimetype);

  let client = new Client({
    src: imageName,
    title: req.body.title,
  });
  client = await client.save();

  res.send(client);
});

router.delete("/:id", async (req, res) => {
  let client = await Client.findById(req.params.id);
  await deleteFile(client.src);
  client.remove();
  res.send(client);
});

module.exports = router;
