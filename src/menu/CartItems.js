import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useContext,
} from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Qualities from "../Home/Qualities";
import { useNavigate } from "react-router-dom";
import hotelcontext from "../hotelcontext/hotelContext";
import HomeNav2 from "../Home2/HomeNav2";
import Sidebar from "../Home2/Sidebar";
import Navbar from "../genralcomponent/Navbar";

const initialState = 1;

function CartItems() {
  const context = useContext(hotelcontext);
  const {
    dishesInCart_by_user_details,
    setCartdishesbyuserDetails,
    cartdishesbyuserDetails,
    getDishInCart,
    dishesInCart,
    setDishesInCart,
    deleteProductIn_Cart
  } = context;

  useEffect(() => {
    getDishInCart();
  }, []);

  return (
    <>
      <Navbar />
      <div className="totalmenu">
        <h1 className="heading">Your Cart</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-5"></div>
            <div className="col-lg-4">
              <button
                onClick={(e) => {
                  dishesInCart_by_user_details(localStorage.getItem("email"));
                }}
                className="refreshbutton btn btn-outline-warning"
              >
                Get Your Dish
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {cartdishesbyuserDetails &&
              cartdishesbyuserDetails.map((value) => {
                 return (
                  <>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                      <div class="card cart">
                        <div class="card-body">
                          <div className="row">
                            <div className="col-lg-6">
                              <h6 className="card-titel">
                                Dish Id: {value.dishid}
                              </h6>
                            </div>

                            <div className="col-lg-6 dishid">
                              <h6 class="card-title">Order ID: {value.id}</h6>
                            </div>

                            <div className="col-lg-6">
                              <h4 class="card-subtitle mb-2 text-body-secondary">
                                Your Order: {value.dishname}
                              </h4>
                            </div>

                            <div className="col-lg-6 cancel_button">
                              <h4 class="card-subtitle mb-2 text-body-secondary">
                                Price: {value.price}
                              </h4>
                            </div>

                            <div className="col-lg-6">
                              <h5 class="card-subtitle mb-2 text-body-secondary">
                                Category: {value.dishcategory}
                              </h5>
                            </div>

                            <div className="col-lg-6 cancel_button">
                              <button className="btn btn-outline-danger" onClick={(e) => {
                                deleteProductIn_Cart(value.id, value.dishname)
                              }}>
                                Cancel Order
                              </button>
                            </div>
                          </div>
                          <p class="card-text">Quantity: {value.quantity}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3"></div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItems;
