const mongoose = require("mongoose");
const { Schema } = mongoose;

const YourOrders = new Schema({
  email: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },

  orderedfood: {
    type: Object,
    require: true,
  },

  reasonofrejection: {
    type: String,
    require: true
  },

  deliverby: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("order", YourOrders);
