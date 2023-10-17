const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const ConcernForm = require("../Module/ConcernForm");

router.post(
  "/contactform",
  [
    body("email", "Enter valid email").isEmail(),
    body("message", "Enter the message").isLength({ min: 2 }),
    body("name", "enter the name").isLength({ min: 2 }),
    body("subject", "Enter the subject").isLength({ min: 2 }),
    body("status", "Enter the status").isLength({ min: 2 }),
    body("solution"),
    body("reason"),
    body("resolveby"),
    body("contactnumber", "enter the contactnumber").isLength({ min: 2 }),
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
      let contactform = await ConcernForm.create({
        email: req.body.email,
        name: req.body.name,
        contactnumber: req.body.contactnumber,
        subject: req.body.subject,
        message: req.body.message,
        status: req.body.status,
        solution: req.body.solution,
        reason: req.body.reason,
        resolveby: req.body.resolveby
      });

      const data = {
        contactform: {
          id: contactform.id,
        },
      };

      const authtoken = jwt.sign(data, sec_pass);
      success = true;
      res.json({ success, contactform });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
);

// fetch order for user
router.post(
  "/fetchusertickets",
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
      let concern = await ConcernForm.find({
        email: req.body.email,
      });

      success = true;
      console.log(concern.length)
      res.json({ success, concern });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
);
// update the order
router.put("/updateticketadmin/:id", async (req, res) => {
  const { status, reason, solution, resolveby } = req.body;

  let newOrder = {};

  if (status) {
    newOrder.status = status;
  }

  if (reason) {
    newOrder.reason = reason;
  }

  if (solution) {
    newOrder.solution = solution;
  }

  if(resolveby) {
    newOrder.resolveby = resolveby;
  }
  let orders = await ConcernForm.findById(req.params.id);
  console.log(orders);

  if (!orders) {
    return res.status(404).send("Not found");
  }

  newOrder = await ConcernForm.findByIdAndUpdate(
    req.params.id,
    { $set: newOrder },
    { new: true }
  );

  res.json({ newOrder });
});

// Fetch order for admin
router.post("/fetchconcernadmin", async (req, res) => {
  const sec_pass = "Password";
  let success = false;

  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ success, error: error.array() });
  }
  console.log(error);

  try {
    let order = await ConcernForm.find({});
    success = true;
    res.json({ success, order });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("some error occur");
  }
});

module.exports = router;
