const Joi = require("joi");
const mongoose = require("mongoose");

const Carousle = mongoose.model(
  "Carousle",
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
    discribtion: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024,
    },
  })
);

function validateCustomer(carousle) {
  const schema = {
    src: Joi.string().min(5).max(255).required(),
    title: Joi.string().min(5).max(50).required(),
    discribtion: Joi.string().min(5).max(1024).required(),
  };

  return Joi.validate(carousle, schema);
}

exports.Carousle = Carousle;
exports.validate = validateCustomer;
