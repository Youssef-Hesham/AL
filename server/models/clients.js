const Joi = require("joi");
const mongoose = require("mongoose");

const Client = mongoose.model(
  "client",
  new mongoose.Schema({
    src: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
  })
);

function validateClient(client) {
  const schema = {
    src: Joi.string().min(5).max(255).required(),
    title: Joi.string().min(5).max(50).required(),
  };

  return Joi.validate(client, schema);
}

exports.Client = Client;
exports.validate = validateClient;
