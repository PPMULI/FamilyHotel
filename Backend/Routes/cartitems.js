const express = require("express");
const cartitem = require("../Module/CartItems");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const CartItems = require("../Module/CartItems");

router.post(
  "/cartitems",
  [
    body("email", "Enter valid email").isEmail(),
    body("productname", "Enter the product name").isLength({ min: 2 }),
    body("price", "Enter the price").isLength({ min: 1 }),
    body("imageurl", "Enter the url").isLength({ min: 1 }),
    body("quantity", "Enter the quantity").isLength({ min: 1 }),
    body("payment", "Enter the payment").isLength({ min: 1 }),
    body("productId", "Enter the product id").isLength({ min: 1 }),
    body("foodID", "Enter the food id").isLength({ min: 2 }),
    // body("status", "Enter the status").isLength({ min: 1 }),
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
      let cart = await CartItems.findOne({
        email: req.body.email,
        productname: req.body.productname,
      });

      if (cart) {
        return res.status(400).json({
          success,
          error: "Sorry user with this email or name is already exist",
        });
      }

      console.log(cart);

      cart = await CartItems.create({
        email: req.body.email,
        productname: req.body.productname,
        price: req.body.price,
        payment: req.body.payment,
        quantity: req.body.quantity,
        productId: req.body.productId,
        imageurl: req.body.imageurl,
        foodID: req.body.foodID,
      });

      const data = {
        cart: {
          id: cart.id,
        },
      };

      const authtoken = jwt.sign(data, sec_pass);
      success = true;
      res.json({ success, cart });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
);

// update the item
router.put("/updateitem/:id", async (req, res) => {
  const { quantity } = req.body;

  // Create a new item
  const newItem = {};
  if (quantity) {
    newItem.quantity = quantity;
  }

  let cart = await CartItems.findById(req.params.id);
  if (!cart) {
    return res.status(404).send("Not Found");
  }

  cart = await CartItems.findByIdAndUpdate(
    req.params.id,
    { $set: newItem },
    { new: true }
  );
  res.json({ cart });
});

// Fetch details
router.post(
  "/fetchitems",
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
      let cart = await CartItems.find({
        email: req.body.email,
      });

      success = true;
      res.json({ success, cart });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
);

// Delete note
router.delete("/deleteitem/:id", async (req, res) => {
  let cart = await CartItems.findById(req.params.id);
  if (!cart) {
    return res.status(404).send("Not Found");
  }

  cart = await CartItems.findByIdAndDelete(req.params.id);
  success = true;
  res.json({ success });
  console.log(cart);
});



module.exports = router;
