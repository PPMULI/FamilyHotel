const express = require("express");
const authentication = require("../Module/Authentication");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

router.post(
  "/authentication",
  [
    body("email", "Enter valid email").isEmail(),
    body("password", "Enter the password").isLength({ min: 2 }),
    body("address", "Enter the address").isLength({ min: 2 }),
    body("name", "enter the name").isLength({ min: 2 }),
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
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    try {
      let authenticator = await authentication.findOne({
        email: req.body.email,
        name: req.body.name,
      });

      if (authenticator) {
        return res.status(400).json({
          success,
          error: "Sorry user with this email or name is already exist",
        });
      }

      authenticator = await authentication.create({
        email: req.body.email,
        name: req.body.name,
        address: req.body.address,
        password: secPass,
        contactnumber: req.body.contactnumber,
      });

      const data = {
        authenticator: {
          id: authenticator.id,
        },
      };

      const authtoken = jwt.sign(data, sec_pass);
      success = true;
      res.json({ success, authenticator });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
);

// dummy login
router.post(
  "/loginuser",
  [
    body("email", "Enter valid email").isEmail(),
    body("password", "Enter the password").isLength({ min: 2 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;

    let success = false;
    try {
      let authenticator = await authentication.findOne({email}) 

      if(!authenticator) {
        return res.status(400).json({errors: "hello sorry"})
      }

      const passwordCompare = await bcrypt.compare(password, authenticator.password)
      if(!passwordCompare)
      {
        return res.status(400).json({errors: "hello wrong"})        
      }

      const data = {
        authenticator: {
          id: authenticator.id
        }
      }

      success = true

      const jwt_secret = "Password"
      const authtoken = jwt.sign(data, jwt_secret)
        let ema = req.body.email;
      res.send({success, ema, authtoken})
    } catch (error) {
      console.log(error)
    }
  }
);

// Update the data
router.put("/update/:id", async (req, res) => {
  const { email, password } = req.body;
  let newUser = {};

  if (email) {
    newUser.email = email;
  }

  if (password) {
    newUser.password = password;
  }

  let user = authentication.findById(req.params.id);

  if (!user) {
    res.status(400).send("Not Found");
  }

  user = await authentication.findByIdAndUpdate(
    req.params.id,
    { $set: newUser },
    { new: true }
  );

  res.json({ user });
});
module.exports = router;
