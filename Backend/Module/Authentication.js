const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserAuthentication = new Schema({
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
  }
});

module.exports = mongoose.model("userAuthentication", UserAuthentication);
