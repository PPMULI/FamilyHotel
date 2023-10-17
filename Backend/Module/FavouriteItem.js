const mongoose = require("mongoose");
const { Schema } = mongoose;

const FavouriteSchemas = new Schema({
  email: {
    type: String,
    require: true,
  },

  productname: {
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
});

module.exports = mongoose.model("favourite", FavouriteSchemas);
