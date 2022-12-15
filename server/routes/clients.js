const { Client, validate } = require("../models/clients");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const client = await Client.find().sort("name");
  res.send(client);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let client = new Client({
    src: req.body.src,
    title: req.body.title,
  });
  client = await client.save();

  res.send(client);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const client = await Client.findByIdAndUpdate(
    req.params.id,
    {
      src: req.body.src,
      title: req.body.title,
    },
    { new: true }
  );

  if (!client)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(client);
});

router.delete("/:id", async (req, res) => {
  const client = await Client.findByIdAndRemove(req.params.id);

  if (!client)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(client);
});

router.get("/:id", async (req, res) => {
  const client = await Client.findById(req.params.id);

  if (!client)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(client);
});

module.exports = router;
