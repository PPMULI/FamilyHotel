const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const AdminAuth = require("../../Module/AdminAuhtentication/AdminAuth");

// router.post(
//   "/adminauthentication",
//   [
//     body("email", "Enter valid email").isEmail(),
//     body("password", "Enter the password").isLength({ min: 2 }),
//     body("address", "Enter the address").isLength({ min: 2 }),
//     body("name", "enter the name").isLength({ min: 2 }),
//     body("contactnumber", "enter the contactnumber").isLength({ min: 2 }),
//     body("empid", "Enter Emp Id").isLength({ min: 2 }),
//     body("location", "Enter the location").isLength({ min: 2 }),
//     body("jobrole", "Enter the location").isLength({ min: 2 }),
//     body("reportsto", "enter the reports").isLength({ min: 2 }),
//   ],
//   async (req, res) => {
//     const sec_pass = "Password";
//     let success = false;

//     const error = validationResult(req);

//     if (!error.isEmpty()) {
//       return res.status(400).json({ success, error: error.array() });
//     }
//     console.log(error);
//     const salt = await bcrypt.genSalt(10);
//     const secPass = await bcrypt.hash(req.body.password, salt);
//     try {
//       let authenticator = await AdminAuth.findOne({
//         email: req.body.email,
//         name: req.body.name,
//       });

//       if (authenticator) {
//         return res.status(400).json({
//           success,
//           error: "Sorry user with this email or name is already exist",
//         });
//       }

//       authenticator = await AdminAuth.create({
//         email: req.body.email,
//         name: req.body.name,
//         address: req.body.address,
//         password: secPass,
//         contactnumber: req.body.contactnumber,
//         location: req.body.location,
//         jobrole: req.body.jobrole,
//         reportsto: req.body.reportsto,
//         empid: req.body.empid,
//       });

//       const data = {
//         authenticator: {
//           id: authenticator.id,
//         },
//       };

//       const authtoken = jwt.sign(data, sec_pass);
//       success = true;
//       res.json({ success, authenticator });
//     } catch (error) {
//       console.log(error.message);
//       res.status(500).send("some error occur");
//     }
//   }
// );

// router.post(
//   "/adminlogin",
//   [
//     body("email", "Enter valid email").isLength({ min: 2 }),
//     body("password", "Enter the password").isLength({ min: 2 }),
//   ],
//   async (req, res) => {
//     const sec_pass = "Password";
//     let success = false;

//     const error = validationResult(req);

//     if (!error.isEmpty()) {
//       return res.status(400).json({ success, error: error.array() });
//     }

//     const { email, password } = req.body;

//     try {
//       let authenticator = await AdminAuth.findOne({
//         email: req.body.email,
//       });

//       if (!authenticator) {
//         return res.status(400).json({ errors: "Not Exist" });
//       }
//       console.log(authenticator);

//       const passwordCompare = await bcrypt.compare(
//         password,
//         authenticator.password
//       );
//       if (!passwordCompare) {
//         return res.status(400).json({ errors: "hello wrong" });
//       }

//       if (authenticator) {
//         const data = {
//           authenticator: {
//             id: authenticator.id,
//           },
//         };

//         const authtoken = jwt.sign(data, sec_pass);
//         let email = req.body.email;
//         success = true;
//         res.json({ success, email, authtoken });
//       } else {
//         res.json(success);
//       }
//     } catch (error) {
//       console.log(error.message);
//       res.status(500).send("some error occur");
//     }
//   }
// );
router.post(
  "/adminauthentication",
  [
    body("email", "Enter valid email").isEmail(),
    body("password", "Enter the password").isLength({ min: 2 }),
    body("address", "Enter the address").isLength({ min: 2 }),
    body("name", "enter the name").isLength({ min: 2 }),
    body("contactnumber", "enter the contactnumber").isLength({ min: 2 }),
    body("empid", "Enter Emp Id").isLength({ min: 2 }),
    body("location", "Enter the location").isLength({ min: 2 }),
    body("jobrole", "Enter the location").isLength({ min: 2 }),
    body("reportsto", "enter the reports").isLength({ min: 2 }),
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
      let authenticator = await AdminAuth.findOne({
        email: req.body.email,
        name: req.body.name,
      });

      if (authenticator) {
        return res.status(400).json({
          success,
          error: "Sorry user with this email or name is already exist",
        });
      }

      authenticator = await AdminAuth.create({
        email: req.body.email,
        name: req.body.name,
        address: req.body.address,
        password: req.body.password,
        contactnumber: req.body.contactnumber,
        location: req.body.location,
        jobrole: req.body.jobrole,
        reportsto: req.body.reportsto,
        empid: req.body.empid,
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

router.post(
  "/adminlogin",
  [
    body("email", "Enter valid email").isLength({ min: 2 }),
    body("password", "Enter the password").isLength({ min: 2 }),
  ],
  async (req, res) => {
    const sec_pass = "Password";
    let success = false;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }

    try {
      let authenticator = await AdminAuth.findOne({
        email: req.body.email,
        password: req.body.password,
      });

      console.log(authenticator);
      if (authenticator) {
        const data = {
          authenticator: {
            id: authenticator.id,
          },
        };

        const authtoken = jwt.sign(data, sec_pass);
        let email = req.body.email;
        success = true;
        res.json({ success, email, authtoken });
      } else {
        res.json(success);
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
);

module.exports = router;
