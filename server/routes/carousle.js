const { Carousle, validate } = require("../models/carousle");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const carousele = await Carousle.find().sort("name");
  res.send(carousele);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let carousele = new Carousle({
    src: req.body.src,
    title: req.body.title,
  });
  carousele = await carousele.save();

  res.send(carousele);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const carousele = await Carousle.findByIdAndUpdate(
    req.params.id,
    {
      src: req.body.src,
      title: req.body.title,
    },
    { new: true }
  );

  if (!carousele)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(carousele);
});

router.delete("/:id", async (req, res) => {
  const carousele = await Carousle.findByIdAndRemove(req.params.id);

  if (!carousele)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(carousele);
});

router.get("/:id", async (req, res) => {
  const carousele = await Carousle.findById(req.params.id);

  if (!Carousle)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(carousele);
});

module.exports = router;
