const Joi = require("joi");
const mongoose = require("mongoose");

const Life = mongoose.model(
  "Life",
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
    discription: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1024,
    },
    link: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1024,
    },
  })
);

function validate(life) {
  const schema = {
    src: Joi.string().min(1).max(255).required(),
    title: Joi.string().min(1).max(255).required(),
    discription: Joi.string().min(1).max(1024).required(),
  };

  return Joi.validate(life, schema);
}

exports.Life = Life;
exports.validate = validate;
