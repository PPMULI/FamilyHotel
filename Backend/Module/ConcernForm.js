const mongoose = require("mongoose");
const { Schema } = mongoose;

const concernForm = new Schema({
  email: {
    type: String,
    require: true,
  },

  name: {
    type: String,
    require: true,
  },

  contactnumber: {
    type: String,
    require: true,
  },

  subject: {
    type: String,
    require: true
  },

  solution: {
    type: String,
    require: true
  },

  reason: {
    type: String,
    require: true
  },

  status: {
    type: String,
    require: true
  },

  resolveby: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("contactFrom", concernForm);
