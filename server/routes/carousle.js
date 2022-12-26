const { Carousle, validate } = require("../models/carousle");
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
  const carousle = await Carousle.find();

  for (let post of carousle) {
    post.src = await getObjectSignedUrl(post.src);
  }
  res.send(carousle);
});

router.post("/", upload.single("image"), async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const file = req.file;
  const imageName = `${req.file.originalname}${Date.now()}`;
  const fileBuffer = req.file.buffer;

  await uploadFile(fileBuffer, imageName, file.mimetype);

  let carousle = new Carousle({
    src: imageName,
    title: req.body.title,
    discribtion: req.body.discription,
  });
  carousle = await carousle.save();

  res.send(carousle);
});

router.delete("/:id", async (req, res) => {
  let carousle = await Carousle.findById(req.params.id);

  if (!carousle)
    return res.status(404).send("The genre with the given ID was not found.");

  await deleteFile(carousle.src);
  carousle.remove();
  res.send(carousle);
});

module.exports = router;
