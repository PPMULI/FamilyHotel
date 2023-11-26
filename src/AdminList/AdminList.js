import React, { useContext, useEffect, useState } from "react";
import hotelcontext from "../hotelcontext/hotelContext";
import Sidebar from "../Home2/Sidebar";
import CustomerTicketHeading from "../AdminPart/customerTickets/CustomerTicketHeading";

function AdminList() {
  const context = useContext(hotelcontext);
  const { RejectAsAdmin, getProfileOfAllUser, MarkAsAdmin, userprofile } =
    context;

  const [credentials, setCredentials] = useState({
    status: "reject",
    reasonofrejection: "",
  });
  const { status, reasonofrejection } = credentials;

  useEffect(() => {
    getProfileOfAllUser();
  }, []);

 
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
                    Reason of issue
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
                    onChange={onChange}
                    placeholder="Enter the reason"
                    id="reasonofrejection"
                    name="reasonofrejection"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-danger w-100"
                  onClick={(e) => {
                    e.preventDefault();
                    RejectAsAdmin(
                      localStorage.getItem("userID"),
                      "reject",
                      localStorage.getItem("email"),
                      credentials.reasonofrejection
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
          <CustomerTicketHeading />
          <div className="container">
            <div className="row">
              {userprofile &&
                userprofile.map((value) => {
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
                                <p className="orderid"> User ID: {value.id} </p>
                              </div>
                              <hr />

                              <h6> User Details</h6>
                              <ul>
                                <li>Full Name: {value.fullname}</li>
                                <li>
                                  Address: {value.address1}, {value.address2},{" "}
                                  {value.district}, {value.state},{" "}
                                  {value.pincode}{" "}
                                </li>
                                <li>Contact Number: {value.contactnumber}</li>
                                <li>Gender: {value.gender}</li>
                              </ul>

                              <hr />

                              <div className="row">
                                <div className="col-lg-6">
                                  <p>Apply As Admin?: {value.applyasadmin}</p>
                                </div>

                                <div className="col-lg-6">
                                  <div className="row">
                                    <div className="col-lg-4"></div>
                                    <div className="col-lg-8">
                                      {value.isAdmin == "true" ? (
                                        <div>
                                          <p>Admin Status: {value.isAdmin}</p>
                                        </div>
                                      ) : (
                                        <div className="d-flex">
                                          <button
                                            className="btn btn-success"
                                            onClick={() => {
                                              MarkAsAdmin(
                                                value.id,
                                                "true",
                                                localStorage.getItem("email")
                                              );
                                            }}
                                          >
                                            Mark As Admin
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                    {value.status == "reject" ? (
                                      <div className="row">
                                        <div className="col-lg-6"></div>
                                        <button
                                          className="btn btn-danger d-none"
                                          onClick={() => {
                                            localStorage.setItem(
                                              "userID",
                                              value.id
                                            );
                                          }}
                                          data-bs-toggle="modal"
                                          data-bs-target="#exampleModal"
                                        >
                                          Reject
                                        </button>

                                        <div className="col-lg-6">
                                          <p>{value.reasonofrejection}</p>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="row d-none">
                                        <div className="col-lg-6"></div>
                                        <button
                                          className="btn btn-danger"
                                          onClick={() => {
                                            localStorage.setItem(
                                              "userID",
                                              value.id
                                            );
                                          }}
                                          data-bs-toggle="modal"
                                          data-bs-target="#exampleModal"
                                        >
                                          Reject
                                        </button>
                                        <div className="col-lg-6">
                                          <p>{value.reasonofrejection}</p>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
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
      {/* </div> */}
    </>
  );
}

export default AdminList;
