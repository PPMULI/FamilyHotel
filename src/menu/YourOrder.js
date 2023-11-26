import React, { useContext, useEffect } from "react";
import Sidebar from "../Home2/Sidebar";
import hotelcontext from "../hotelcontext/hotelContext";
import OrderMenu from "./OrderMenu";
import Navbar from "../genralcomponent/Navbar";

function YourOrder() {
  const context = useContext(hotelcontext);
  const {
    getDishThat_You_Buy,
    YourOrder,
    cancel_Your_Order,
    setYourOrder,
    yourOrderByUserdetails,
    setyourOrderByUserdetails,
    UserOrder_by_user_details,
  } = context;

  useEffect(() => {
    getDishThat_You_Buy();
  }, []);

  return (
    <>
      <Navbar />
      <div className="totalmenu">
        <h1 className="heading">Your Orders</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-5"></div>
            <div className="col-lg-4">
              <button
                onClick={(e) => {
                  UserOrder_by_user_details(localStorage.getItem("email"));
                }}
                className="refreshbutton btn btn-outline-warning"
              >
                Get Your Order
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {yourOrderByUserdetails &&
              yourOrderByUserdetails.map((value) => {
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
                              {value.status == "pending" ? (
                                <button
                                  className="btn btn-outline-danger"
                                  onClick={(e) => {
                                    cancel_Your_Order(value.id, value.dishname);
                                  }}
                                >
                                  Cancel Order
                                </button>
                              ) : (
                                <button
                                  className="d-none btn btn-outline-danger"
                                  onClick={(e) => {
                                    cancel_Your_Order(value.id, value.dishname);
                                  }}
                                >
                                  Cancel Order
                                </button>
                              )}
                            </div>

                            <div className="col-lg-4">
                              <p class="card-text">
                                Quantity: {value.quantity}
                              </p>
                            </div>
                            <div className="col-lg-2"></div>
                            <div className="col-lg-6 cancel_button">
                              stratus:{" "}
                              <span className="status">{value.status}</span>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-lg-6">
                              {value.status == "reject" ? (
                                <div>
                                  Reason Of Rejection
                                  <span className="action_after_rejection">
                                    {value.reasonofrejection}
                                  </span>
                                </div>
                              ) : (
                                <div className="d-none">
                                  Reason Of Rejection
                                  <span>{value.reasonofrejection}</span>
                                </div>
                              )}
                            </div>

                            <div className="col-lg-6">
                              <p className="confirmby">
                                {" "}
                                Confirm by: {value.actionby}{" "}
                              </p>
                            </div>
                          </div>
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

export default YourOrder;
