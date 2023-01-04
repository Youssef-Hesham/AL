const Joi = require("joi");
const mongoose = require("mongoose");

const Restoration = mongoose.model(
  "Restoration",
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

function validate(Restoration) {
  const schema = {
    src: Joi.string().min(1).max(255).required(),
    title: Joi.string().min(1).max(255).required(),
    discription: Joi.string().min(1).max(1024).required(),
  };

  return Joi.validate(Restoration, schema);
}

exports.Restoration = Restoration;
exports.validate = validate;
