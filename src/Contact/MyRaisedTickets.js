import React, { useContext, useEffect } from "react";
import Navbar from "../genralcomponent/Navbar";
import hotelcontext from "../hotelcontext/hotelContext";

function MyRaisedTickets() {
  const context = useContext(hotelcontext);
  const {
    getRaisedTicketsByUser,
    Cancel_The_RaisedTicket,
    yourRaisedTicket,
    setYourRaisedTicket,
    RaisedTicket_BY_User,
    fetchRaisedTicketByUser,
  } = context;

  useEffect(() => {
    getRaisedTicketsByUser();
  }, []);
  return (
    <>
      <Navbar />

      <div className="totalmenu">
        <h1 className="heading">Your Raised Ticket</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-5"></div>
            <div className="col-lg-4">
              <button
                onClick={(e) => {
                  RaisedTicket_BY_User(localStorage.getItem("email"));
                }}
                className="refreshbutton btn btn-outline-warning"
              >
                Get Your Raised Ticket
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {fetchRaisedTicketByUser &&
              fetchRaisedTicketByUser.map((value) => {
                return (
                  <>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                      <div class="card cart">
                        <div class="card-body">
                          <div className="row">
                            <div className="col-lg-6">
                              <h6 className="card-titel">
                                Ticket Id: {value.id}
                              </h6>
                            </div>

                            <div className="col-lg-6 dishid">
                              <h6 class="card-title">Name: {value.fullname}</h6>
                            </div>

                            <div className="col-lg-6">
                              <h4 class="card-subtitle mb-2 text-body-secondary">
                                Issue: {value.concern}
                              </h4>
                            </div>

                            <div className="col-lg-6 cancel_button">
                              <h4 class="card-subtitle mb-2 text-body-secondary">
                                Status: {value.status}
                              </h4>
                            </div>

                            <div className="col-lg-6">
                              <h5 class="card-subtitle mb-2 text-body-secondary">
                                Contact Number: {value.contactnumber}
                              </h5>
                            </div>

                            <div className="col-lg-12">
                              <p class="card-text">Subject: {value.subject}</p>
                            </div>
                            <div className="col-lg-2"></div>
                            <div className="col-lg-6 cancel_button">
                              stratus:{" "}
                              <span className="status">{value.status}</span>
                            </div>

                            <hr />
                            {value.status == "resolve" ? (
                              <div>
                              <div className="col-lg-6">
                               <p className="action_after_rejection"> Reason Of Issue: {value.reasonofissue}</p>
                               <p className="email"> Solution: {value.solution} </p>
                              </div>

                              <div className="col-lg-6">
                               <p className="confirmby"> Confirm By: {value.actionby} </p>
                              </div>
                              </div>
                            ) : (
                              <div className="col-lg-6 d-none">
                                Reason Of Issue: {value.reasonofissue}
                                Solution: {value.solution}
                              </div>
                            )}
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

export default MyRaisedTickets;
