const Joi = require("joi");
const mongoose = require("mongoose");

const Partner = mongoose.model(
  "Partner",
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
    URL: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024,
    },
  })
);

function validateCustomer(partner) {
  const schema = {
    src: Joi.string().min(5).max(255).required(),
    title: Joi.string().min(5).max(50).required(),
    URL: Joi.string().min(5).max(1024).required(),
  };

  return Joi.validate(partner, schema);
}

exports.Partner = Partner;
exports.validate = validateCustomer;
