const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const YourOrder = require("../Module/YourOrder");

router.post(
  "/orders",
  [
    body("email", "Enter valid email").isEmail(),
    body("status", "Enter the status").isLength({ min: 1 }),
    body("orderedfood", "Enter the order") ,
    body("reasonofrejection"),
    body("deliverby")
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
      let order = await YourOrder.create({
        email: req.body.email,
        orderedfood: req.body.orderedfood,
        status: req.body.status,
        reasonofrejection: req.body.reasonofrejection,
        deliverby: req.body.deliverby
      });

      success = true;
      res.json({ success, order });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
);

// cancel the order
router.delete("/cancelorder/:id", async (req, res) => {
  let YourorderToCancel = await YourOrder.findById(req.params.id);
  if (!YourorderToCancel) {
    return res.status(404).send("Not Found");
  }

  YourorderToCancel = await YourOrder.findByIdAndDelete(req.params.id);
  success = true;
  res.json({ success });
  console.log(YourorderToCancel);
});

// update the order
router.put("/updateorder/:id", async (req, res) => {
  const { status, reasonofrejection, deliverby } = req.body;

  let newOrder = {};

  if (status) {
    newOrder.status = status;
  }

  if (reasonofrejection) {
    newOrder.reasonofrejection = reasonofrejection;
  }

  if(deliverby) {
    newOrder.deliverby = deliverby
  }
  let orders = await YourOrder.findById(req.params.id);
  console.log(orders);

  if (!orders) {
    return res.status(404).send("Not found");
  }

  newOrder = await YourOrder.findByIdAndUpdate(
    req.params.id,
    { $set: newOrder },
    { new: true }
  );

  res.json({ newOrder });
});

router.post(
  "/fetchorders",
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
      let order = await YourOrder.find({
        email: req.body.email,
      });

      success = true;
      res.json({ success, order });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
);

// Fetch order for admin
router.post("/fetchOrderAdmin", async (req, res) => {
  const sec_pass = "Password";
  let success = false;

  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ success, error: error.array() });
  }
  console.log(error);

  try {
    let order = await YourOrder.find({});
    success = true;
    res.json({ success, order });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("some error occur");
  }
});

module.exports = router;
