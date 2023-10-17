const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchemas = new Schema({
  email: {
    type: String,
    require: true,
  },

  productname: {
    type: String,
    require: true,
  },

  quantity: {
    type: String,
    require: true,
  },

  productId: {
    type: String,
    require: true,
  },

  foodID: {
    type: String,
    require: true,
  },

  price: {
    type: String,
    require: true,
  },

  imageurl: {
    type: String,
    require: true,
  },

  payment: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("cart", CartSchemas);
