import React, { useState, useContext, useEffect } from "react";
import CustomerOrderHeading from "./CustomerOrderHeading";
import hotelcontext from "../../hotelcontext/hotelContext";
import Sidebar from "../../Home2/Sidebar";

function CustomerOrderByStatus() {
  const context = useContext(hotelcontext);
  const {
    Categorires_orders_by_status,
    classifyYourOrderByStatus,
    handleShiftButtonClick,
    handleUpdateOrderButtonClick_forAdmin,
  } = context;
  const [credentials, setCredentials] = useState({
    status: "reject",
    reasontoreject: "",
  });

  const { status, reasontoreject } = credentials;
 
  const onChange = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Give Reason
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Status
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="status"
                    onChange={onChange}
                    name="status"
                    disabled
                    value="reject"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Reason of Reject
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
                    onChange={onChange}
                    placeholder="Enter the reason"
                    id="reasontoreject"
                    name="reasontoreject"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-danger w-100"
                  onClick={(e) => {
                    e.preventDefault();
                    handleUpdateOrderButtonClick_forAdmin(
                      localStorage.getItem("orderID"),
                      "reject",
                      credentials.reasontoreject,
                      localStorage.getItem("email")
                    );
                  }}
                >
                  Reject
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-1">
          <Sidebar />
        </div>

        <div className="col-lg-11">
          <CustomerOrderHeading />
          <div className="container">
            <div className="row">
              {classifyYourOrderByStatus &&
                classifyYourOrderByStatus.map((value) => {
                  return (
                    <>
                      <div className="col-lg-1"></div>
                      <div className="col-lg-10">
                        <div class="card customer_orders">
                          <div class="card-body">
                            <div className="row">
                              <div className="col-lg-4">
                                <p className="email"> Email: {value.email}</p>
                              </div>

                              <div className="col-lg-4"></div>

                              <div className="col-lg-4">
                                <p className="orderid">
                                  {" "}
                                  Order ID: {value.id}{" "}
                                </p>
                              </div>
                              <hr />

                              <h6> Order Details:</h6>
                              <ul>
                                <li>Dish Category: {value.dishcategory}</li>
                                <li>Dish Name: {value.dishname}</li>
                                <li>Dish ID: {value.dishid}</li>
                                <li>Quantity: {value.quantity}</li>
                                <li>Price: {value.price} </li>
                                <li>Status: {value.status}</li>
                              </ul>

                              <hr />

                              {value.status == "pending" || value.status == "reject" ? (
                                <div className="row d-none">
                                  <div className="col-lg-6"></div>
                                  <div className="col-lg-6">
                                  <p className="confirmby"> Confirm by: {value.actionby} </p>
                                  </div>
                                </div>
                              ) : (
                                <div className="row">
                                  <div className="col-lg-6"></div>
                                  <div className="col-lg-6">
                                   <p className="confirmby"> Confirm by: {value.actionby} </p>
                                  </div>
                                </div>
                              )}
                            </div>

                            {value.status == "pending" ? (
                              <div className="admin_action">
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleShiftButtonClick(
                                      value.id,
                                      "accept",
                                      localStorage.getItem("email")
                                    );
                                  }}
                                  className="btn btn-outline-primary admin_action_button"
                                >
                                  Accept
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleShiftButtonClick(
                                      value.id,
                                      "deliver",
                                      localStorage.getItem("email")
                                    );
                                  }}
                                  className="btn btn-outline-success admin_action_button"
                                >
                                  Deliver
                                </button>

                                <button
                                  className="btn btn-outline-danger admin_action_button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    localStorage.setItem("orderID", value.id);
                                  }}
                                >
                                  Reject
                                </button>
                              </div>
                            ) : (
                              <div className="admin_action d-none">
                                <button
                                  className="btn btn-outline-primary admin_action_button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleShiftButtonClick(
                                      value.id,
                                      "accept",
                                      localStorage.getItem("email")
                                    );
                                  }}
                                >
                                  Accept
                                </button>
                                <button
                                  className="btn btn-outline-success admin_action_button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleShiftButtonClick(
                                      value.id,
                                      "deliver",
                                      localStorage.getItem("email")
                                    );
                                  }}
                                >
                                  Deliver
                                </button>

                                <button
                                  className="btn btn-outline-danger admin_action_button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    localStorage.setItem("orderID", value.id);
                                  }}
                                >
                                  Reject
                                </button>
                              </div>
                            )}

                            {value.status == "accept" ? (
                              <div className="admin_action">
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleShiftButtonClick(
                                      value.id,
                                      "deliver",
                                      localStorage.getItem("email")
                                    );
                                  }}
                                  className="btn btn-outline-success admin_action_button"
                                >
                                  Deliver
                                </button>

                                <button
                                  className="btn btn-outline-danger admin_action_button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    localStorage.setItem("orderID", value.id);
                                  }}
                                >
                                  Reject
                                </button>
                              </div>
                            ) : (
                              <div className="admin_action d-none">
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleShiftButtonClick(
                                      value.id,
                                      "deliver",
                                      localStorage.getItem("email")
                                    );
                                  }}
                                  className="btn btn-outline-success admin_action_button"
                                >
                                  Deliver
                                </button>

                                <button
                                  className="btn btn-outline-danger admin_action_button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    localStorage.setItem("orderID", value.id);
                                  }}
                                >
                                  Reject
                                </button>
                              </div>
                            )}

                            {value.status == "reject" ? (
                              <div className="row">
                                <div className="col-lg-6">
                                  <p className="action_after_rejection">
                                    {" "}
                                    Reason Of Rejection:{" "}
                                    {value.reasonofrejection}
                                  </p>
                                </div>

                                <div className="col-lg-6">
                                  <p className="confirmby">
                                    Confirm by: {value.actionby}
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <div className="row d-none">
                                <div className="col-lg-6">
                                  <p className="action_after_rejection">
                                    {" "}
                                    Reason Of Rejection:{" "}
                                    {value.reasonofrejection}
                                  </p>
                                </div>

                                <div className="col-lg-6">
                                  <p className="action_after_rejection">
                                    Confirm by: {value.actionby}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-1"></div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerOrderByStatus;
