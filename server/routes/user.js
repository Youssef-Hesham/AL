const Joi = require("joi");
const express = require("express");
const router = express.Router();

const username = process.env.APP_USERNAME;
const password = process.env.PASSWORD;

function validateUser(user) {
  const schema = {
    username: Joi.string().min(1).max(50).required(),
    password: Joi.string().min(1).max(255).required(),
  };

  return Joi.validate(user, schema);
}

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  if (username === req.body.username && password === req.body.password) {
    res.status(200).send([]);
  } else {
    res.status(404).send("wrong username or password");
  }
});

module.exports = router;
