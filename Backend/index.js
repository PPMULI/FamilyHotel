const connectToMongoose = require("./db");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NjDDKSGqU1b536rhl4tazAC5MMPaftpDVf8e4b8VPncmmPaZemwySfull1kd6gf79JSzFJ9rJvRt1JXDFxi6BUW00z7YTUZVR"
);

// checkout api
connectToMongoose();
const app = express();
const port = 5000;

// app.use(cors());
app.use(express.json());
app.use(cors());
 
app.use("/api/orders", require("./Routes/yourorder"))
app.use("/api/contact", require("./Routes/contactform"))
app.use("/api/authenticator", require("./Routes/authentication"))
app.use("/api/cart", require("./Routes/cartitems"));
app.use("/api/admin", require("./Routes/Admin/adminauth"))
app.use("/api/favourite", require("./Routes/favourite"))
app.listen(port, () => {
  console.log("You connected to mongoose");
});
