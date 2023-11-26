import React from "react";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hotelcontext from "../hotelcontext/hotelContext";
import { useReducer } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import hurryup from "../Images/hurryup.jpg";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseFiles/Config";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Navbar from "../genralcomponent/Navbar";
import Footer from "../genralcomponent/Footer";

function DishDetails() {
  const context = useContext(hotelcontext);
  const {
    dishdetails,
    reducer,
    Buy_the_product,
    handleSubmit,
    product_details,
  } = context;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [credentials, setCredentials] = useState({
    reasonofrejection: "",
    actionby: "",
  });

  const { reasonofrejection, actionby } = credentials;

  useEffect(() => {
    // handleclick();
    product_details(localStorage.getItem("dishid"));
  }, []);

  const navigate = useNavigate();

  const addData = (newBooks) => {
    return addDoc(bookCollectionRef, newBooks);
  };

  let initialState = 1;
  const [state, dispatch] = useReducer(reducer, initialState);

  const bookCollectionRef = collection(db, "cart");
  return (
    <>
    <Navbar />
      <div className="totalmenu container product_details">
        {dishdetails &&
          dishdetails.map((value) => {
            return (
              <>
                <div className="row">
                  <div className="col-lg-3">
                    <div class="card productImage">
                      <img src="" alt="" />
                      <div class="card-body">
                        <p class="card-text">
                          <img
                            src={value.food.image}
                            className="detail_image_of_product"
                            alt=""
                          />

                          <div className="row">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-5">
                              <button
                                type="button"
                                class="btn btn-outline-success productinfobuttons"
                                onClick={() => {
                                  Buy_the_product(
                                    localStorage.getItem("email"),
                                    value.food.knownAs,
                                    value.food.category,
                                    value.food.id,
                                    state,
                                    "pending",
                                    value.food.discountedprice,
                                    credentials.reasonofrejection,
                                    credentials.actionby
                                  );
                                }}
                              >
                                <ShoppingBasketIcon /> Buy Now
                              </button>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-5 ">
                              <button
                                type="button"
                                class="productinfobuttons btn btn-outline-warning"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSubmit(
                                      localStorage.getItem("email"),
                                      value.food.knownAs,
                                      value.food.category,
                                      value.food.id,
                                      state,
                                      "500"
                                    );
                                  }}
                              >
                                <AddShoppingCartIcon /> Add To Cart
                              </button>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2"></div>

                  <div className="col-lg-6">
                    <div className="row">
                      <h1 className="product_title">{value.food.knownAs}</h1>
                      <button
                        type="button"
                        class="btn btn-success ratingbutton"
                      >
                        <StarIcon />
                        4.7
                      </button>
                      <p>Limited Stock Available</p>
                    </div>
                    <h2 className="product_price">
                      {" "}
                      <CurrencyRupeeIcon />
                      {value.food.discountedprice}
                      <span className="orignal_price mx-4">
                        {value.food.price}
                      </span>
                    </h2>
                    <h4 className="available_offers">Available offers Bank</h4>
                    <ul>
                      <li>
                        <LocalOfferIcon className="offer_icon" />{" "}
                        <b>Bank Offer</b> 10% off on Kotak Bank Credit Card, up
                        to ₹750 on orders of ₹5,000 and aboveT&C
                      </li>
                      <li>
                        <LocalOfferIcon className="offer_icon" />{" "}
                        <b>Bank Offer </b> 10% off on RBL Bank Credit Card, up
                        to ₹750 on orders of ₹5,000 and aboveT&C
                      </li>
                      <li>
                        <LocalOfferIcon className="offer_icon" />{" "}
                        <b>Bank Offer </b> 10% off on SBI Credit Card, up to
                        ₹750 on orders of ₹5,000 and aboveT&C
                      </li>
                      <li>
                        <LocalOfferIcon className="offer_icon" />{" "}
                        <b>Special PriceGet</b> extra ₹8000 off (price inclusive
                        of cashback/coupon)T&C
                      </li>
                    </ul>
                    <h4 className="product_description">Nutrients Present</h4>
                    <ul>
                      <li>Calories: {value.food.nutrients.ENERC_KCAL}</li>
                      <li>CHOCDF: {value.food.nutrients.ENERC_KCAL}</li>
                      <li>FAT: {value.food.nutrients.FAT}</li>
                      <li>FIBTG: {value.food.nutrients.FIBTG}</li>
                      <li>PROCNT: {value.food.nutrients.PROCNT}</li>
                    </ul>
                    <h4 className="product_description">Category</h4>
                    <li>
                      {" "}
                      <strong> {value.food.category} </strong>
                    </li>
                    <hr />
                    <h4 className="product_description">Seller Info</h4>
                    <li>
                      <b>Name:</b>Pritam Muli
                    </li>
                    <li>
                      <b>GST No.</b>07AAAAA1234A1Z1
                    </li>
                    <hr />
                    <h4 className="product_description">Address Saved</h4>
                    <div class="card">
                      <div class="card-body">
                        Garakheda Parisar, Mehar nagar, Sambhaji Nagar
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-1">
                        <form action="">
                          <div className="uiui">
                            <div className="wrapper">
                              {state == 1 ? (
                                <span
                                  className="minus d-none"
                                  onClick={() =>
                                    dispatch({ type: "DECREAMENT" })
                                  }
                                >
                                  -
                                </span>
                              ) : (
                                <span
                                  className="minus"
                                  onClick={() =>
                                    dispatch({ type: "DECREAMENT" })
                                  }
                                >
                                  -
                                </span>
                              )}
                              <span
                                className="num"
                                onChange={onchange}
                                id="num"
                              >
                                {state}
                              </span>
                              <span
                                className="plus"
                                onClick={() => dispatch({ type: "INCREAMENT" })}
                              >
                                +
                              </span>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-lg-5 ">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSubmit(
                              localStorage.getItem("email"),
                              value.food.knownAs,
                              value.food.category,
                              value.food.id,
                              state,
                              "500"
                            );
                          }}
                          class="btn btn-outline-warning product_action_buttons"
                        >
                          <AddShoppingCartIcon /> Add To Cart
                        </button>
                      </div>
                      <div className="col-lg-5">
                        <button
                          type="button"
                          class="details_buttons btn btn-outline-success favorite_button"
                          onClick={() => {
                            Buy_the_product(
                              localStorage.getItem("email"),
                              value.food.knownAs,
                              value.food.category,
                              value.food.id,
                              state,
                              "pending",
                              value.food.discountedprice,
                              credentials.reasonofrejection,
                              credentials.actionby
                            );
                          }}
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <Footer />
    </>
  );
}

export default DishDetails;
