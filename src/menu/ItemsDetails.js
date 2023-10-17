import React, { useContext, useEffect } from "react";
import hotelcontext from "../hotelcontext/hotelContext";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { MenuItems } from "./MenuItems";
import { useReducer, useState } from "react";
import BoltIcon from "@mui/icons-material/Bolt";
import Sidebar from "../Home2/Sidebar";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function ItemsDetails() {
  // const [productDetails, setProductDetails] = useState([]);
  const navigate = useNavigate();
  const context = useContext(hotelcontext);
  const { onItemDetails, productDetails, setProductDetails, handleAddToCart, addToFavourite } =
    context;
  const [customer, setCustomer] = useState([]);

  let initialState = 1;

  useEffect(() => {
    onItemDetails(localStorage.getItem("productId"));
  }, []);

  console.log(productDetails);
  const reducer = (state, action) => {
    if (state >= 1) {
      if (action.type == "INCREAMENT") {
        localStorage.setItem("quantity1", state + 1);
        return state + 1;
      }

      if (action.type === "DECREAMENT") {
        localStorage.setItem("quantity1", state - 1);
        return state - 1;
      }
    } else if (state < 1) {
      state = state + 1;
      return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState, customer.price);
  return (
    <>
      <Sidebar />
      <div class="card">
        <div class="card-body cartnav">
          <h1 className="item_head">Your Item Details</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {productDetails &&
            productDetails.map((value) => {
              console.log(value);
              return (
                <>
                  <div className="col-lg-4">
                    <img
                      src={value.food.image}
                      className="productDetail_Image"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-2"></div>
                  <div className="col-lg-6 productdetails">
                    <h1>{value.food.knownAs.toUpperCase()}</h1>
                    <h3 className="currency">
                      <CurrencyRupeeIcon /> 500
                    </h3>
                    <h2> Availble Offers</h2>
                    <ul>
                      <li className="list_items">
                        Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card
                        on 3 months EMI Txns, Min Txn Value ₹10,000T&C
                      </li>
                      <hr />
                      <li className="list_items">
                        Bank Offer10% Instant Discount on ICICI Bank Credit Card
                        Txns, up to ₹1250, on orders of ₹5000 and aboveT&C
                      </li>
                      <hr />
                      <li className="list_items">
                        Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card
                        on 6 months EMI Txns, Min Txn Value ₹10,000T&C
                      </li>
                      <hr />
                      <li className="list_items">
                        Partner OfferSign-up for Flipkart Pay Later & get free
                        Times Prime Benefits worth ₹10,000*Know More
                      </li>
                      <hr />
                    </ul>

                    <div className="row">
                      <div className="col-lg-3">
                        <h3 className="swiggy">SWIGGY</h3>
                      </div>
                      <div className="col-lg-9 warenty">
                        <p> 2 Years Warranty with Product Registration </p>
                      </div>
                    </div>

                    <div className="highlighgts">
                      <div className="row">
                        <div className="col-lg-3">
                          <h5 className="highlighgts_heading">Highlights</h5>
                        </div>
                        <div className="col-lg-6">
                          <ul>
                            <li>Fresh Food</li>
                            <li>Fastest Delivary</li>
                            <li>24/7 Customer Support</li>
                            <li>Unique Test</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <hr />
                    <hr />
                    <div className="seller">
                      <div className="row">
                        <div className="col-lg-3">
                          <h5 className="highlighgts_heading">Seller</h5>
                        </div>
                        <div className="col-lg-6">
                          Swiggy
                          <ul>
                            <li>Fresh Food</li>
                          </ul>
                        </div>
                      </div>

                      <form action="">
                        <div className="uiui">
                          <div className="wrapper">
                            <span
                              className="minus"
                              onClick={() => dispatch({ type: "DECREAMENT" })}
                            >
                              -
                            </span>
                            <span className="num" onChange={onchange} id="num">
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
                    <div className="row functional_button">
                      {/* <div className="col-lg-2"></div> */}
                      <div className="col-lg-2"></div>
                      <div className="col-lg-4">
                        <button
                          type="button"
                          onClick={() => handleAddToCart(value)}
                          class="btn btn-warning cart_button"
                        >
                          <AddShoppingCartIcon /> Add To Cart
                        </button>
                      </div>

                      <div className="col-lg-2"></div>
                      <div className="col-lg-4">
                        <button
                          type="button"
                          class="btn btn-danger cart_button"
                          onClick={()=> {addToFavourite(value)}}
                        >
                          <FavoriteBorderIcon /> Add To Favourite
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ItemsDetails;
