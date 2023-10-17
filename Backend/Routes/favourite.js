const express = require("express");
const cartitem = require("../Module/CartItems");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const FavouriteItems = require("../Module/FavouriteItem");
// Add item to favourite
router.post(
  "/addtofavourite",
  [
    body("email", "Enter valid email").isEmail(),
    body("productname", "Enter the product name").isLength({ min: 2 }),
    body("price", "Enter the price").isLength({ min: 1 }),
    body("imageurl", "Enter the url").isLength({ min: 1 }),
    body("payment", "Enter the payment").isLength({ min: 1 }),
    body("productId", "Enter the product id").isLength({ min: 1 }),
    body("foodID", "Enter the food id").isLength({ min: 2 }),
  ],
  async (req, res) => {
    const sec_pass = "Password";
    let success = false;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }
    console.log(error);

    try {
      let favouritecart = await FavouriteItems.findOne({
        email: req.body.email,
        productname: req.body.productname,
      });

      console.log(favouritecart);
      if (favouritecart) {
        return res.status(400).json({
          success,
          error: "Item is already present in Favourite list",
        });
      }

      favouritecart = await FavouriteItems.create({
        email: req.body.email,
        productname: req.body.productname,
        price: req.body.price,
        payment: req.body.payment,
        productId: req.body.productId,
        imageurl: req.body.imageurl,
        foodID: req.body.foodID,
      });

      const data = {
        favouritecart: {
          id: favouritecart.id,
        },
      };

      const authtoken = jwt.sign(data, sec_pass);
      success = true;
      res.json({ success, favouritecart });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
);

// Fetch details
router.post(
  "/fetchfavouriteitems",
  [body("email", "Enter valid email").isEmail()],
  async (req, res) => {
    const sec_pass = "Password";
    let success = false;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }
    console.log(error);

    try {
      let favourite = await FavouriteItems.find({
        email: req.body.email,
      });

      success = true;
      res.json({ success, favourite });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
);

// Delete note
router.delete("/deletefavouriteitem/:id", async (req, res) => {
  let favourite = await FavouriteItems.findById(req.params.id);
  if (!favourite) {
    return res.status(404).send("Not Found");
  }

  favourite = await FavouriteItems.findByIdAndDelete(req.params.id);
  success = true;
  res.json({ success });
 
});
module.exports = router;
