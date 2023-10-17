const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdminAuthentication = new Schema({
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

  password: {
    type: String,
    require: true,
  },

  address: {
    type: String,
    require: true
  },

  empid: {
    type: String,
    require: true,
  },

  location: {
    type: String,
    require: true
  },

  jobrole: {
    type: String,
    require: true
  },

  reportsto: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("AdminAuthentication", AdminAuthentication);
