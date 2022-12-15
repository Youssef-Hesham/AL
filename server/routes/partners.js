const { Partner, validate } = require("../models/partners");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const partner = await Partner.find().sort("name");
  res.send(partner);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let partner = new Partner({
    src: req.body.src,
    title: req.body.title,
    url: req.body.url,
  });
  partner = await partner.save();

  res.send(partner);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const partner = await Partner.findByIdAndUpdate(
    req.params.id,
    {
      src: req.body.src,
      title: req.body.title,
      url: req.body.url,
    },
    { new: true }
  );

  if (!partner)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(partner);
});

router.delete("/:id", async (req, res) => {
  const partner = await Partner.findByIdAndRemove(req.params.id);

  if (!partner)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(partner);
});

router.get("/:id", async (req, res) => {
  const partner = await Partner.findById(req.params.id);

  if (!partner)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(partner);
});

module.exports = router;
