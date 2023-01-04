const Joi = require("joi");
const mongoose = require("mongoose");

const Carousle = mongoose.model(
  "Carousle",
  new mongoose.Schema({
    src: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    title: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
  })
);

function validateCustomer(carousle) {
  const schema = {
    src: Joi.string().min(1).max(255).required(),
    title: Joi.string().min(1).max(255).required(),
  };

  return Joi.validate(carousle, schema);
}

exports.Carousle = Carousle;
exports.validate = validateCustomer;
