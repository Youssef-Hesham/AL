const Joi = require("joi");
const mongoose = require("mongoose");

const News = mongoose.model(
  "News",
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
    discription: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024,
    },
  })
);

function validateCustomer(news) {
  const schema = {
    src: Joi.string().min(5).max(255).required(),
    title: Joi.string().min(5).max(50).required(),
    discription: Joi.string().min(5).max(1024).required(),
  };

  return Joi.validate(news, schema);
}

exports.News = News;
exports.validate = validateCustomer;
