const Joi = require("joi");
const mongoose = require("mongoose");

const News = mongoose.model(
  "News",
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
      maxlength: 50,
    },
    discription: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1024,
    },
  })
);

function validateCustomer(news) {
  const schema = {
    src: Joi.string().min(1).max(255).required(),
    title: Joi.string().min(1).max(50).required(),
    discription: Joi.string().min(1).max(1024).required(),
  };

  return Joi.validate(news, schema);
}

exports.News = News;
exports.validate = validateCustomer;
