import React, { useState, useContext } from "react";
import Sidebar from "../../Home2/Sidebar";
import hotelcontext from "../../hotelcontext/hotelContext";
import CustomerTicketHeading from "./CustomerTicketHeading";

function CustomerTicketsByStatus() {
  const context = useContext(hotelcontext);
  const { handleRaised_Ticket_ButtonClick, categoriestheRaisedTicketByStatus } =
    context;

  const [credentials, setCredentials] = useState({
    status: "resolve",
    reasonofissue: "",
    solutionofissue: "",
  });

  const { status, reasonofissue, solutionofissue } = credentials;
  const onChange = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      {/* <Sidebar /> */}
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
                    value="resolve"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Reason of issue
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
                    onChange={onChange}
                    placeholder="Enter the reason"
                    id="reasonofissue"
                    name="reasonofissue"
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    solution of issue
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
                    onChange={onChange}
                    placeholder="Enter the reason"
                    id="solutionofissue"
                    name="solutionofissue"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-danger w-100"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRaised_Ticket_ButtonClick(
                      localStorage.getItem("ticketID"),
                      "resolve",
                      localStorage.getItem("email"),
                      credentials.reasonofissue,
                      credentials.solutionofissue
                    );
                  }}
                >
                  Resolve
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
          <CustomerTicketHeading />
          <div className="container">
            <div className="row">
              {categoriestheRaisedTicketByStatus &&
                categoriestheRaisedTicketByStatus.map((value) => {
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

                              <h6> Ticket Details</h6>
                              <ul>
                                <li>Full Name: {value.fullname}</li>
                                <li>Concern: {value.concern}</li>
                                <li>Contact Number: {value.contactnumber}</li>
                                <li>Subject: {value.subject} </li>
                                <li>Status: {value.status}</li>
                              </ul>

                              <hr />

                              {value.status == "resolve" ? (
                                <div>
                                  <button
                                    className="btn btn-outline-success admin_action_button d-none"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      localStorage.setItem(
                                        "ticketID",
                                        value.id
                                      );
                                    }}
                                  >
                                    Resolve
                                  </button>

                                  <div className="row">
                                    <div className="col-lg-6">
                                      <p className="action_after_rejection">
                                        {" "}
                                        Reason Of issue: {value.reasonofissue}
                                      </p>

                                      <p className="email">
                                        {" "}
                                        Reason Of Rejection: {value.solution}
                                      </p>
                                    </div>

                                    <div className="col-lg-6">
                                      <p className="confirmby">
                                        Confirm by: {value.actionby}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div>
                                  <button
                                    className="btn btn-outline-success admin_action_button d-none"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      localStorage.setItem(
                                        "ticketID",
                                        value.id
                                      );
                                    }}
                                  >
                                    Resolve
                                  </button>

                                  <div className="row d-none">
                                    <div className="col-lg-6">
                                      <p className="action_after_rejection">
                                        {" "}
                                        Reason Of issue:{" "}
                                        {value.reasonofrejection}
                                      </p>
                                    </div>

                                    <div className="col-lg-6">
                                      <p className="confirmby">
                                        Confirm by: {value.actionby}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
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

export default CustomerTicketsByStatus;
