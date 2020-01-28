const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const FormSchema = new Schema({
  firstname: {
    type: String,
    unique: true
  },

  lastname: {
    type: String,
    unique: true
  },

  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  farmproduce: {
    type: String,
    unique: true
  },
  amount: {
    type: String,
    unique: true
  },

  register_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Form = mongoose.model("form", FormSchema);
