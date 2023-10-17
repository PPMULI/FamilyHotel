import React, { useContext, useEffect, useRef, useState } from "react";
import Ticketheader from "./Ticketheader";
import hotelcontext from "../../hotelcontext/hotelContext";
import SideAdmin from "../AdminHome/SideAdmin";

function RaisedTicketAdmin() {
  const context = useContext(hotelcontext);
  const {
    ticketStatusAdmin,
    raisedTicketStatusAdmin,
    setraisedTicketStatusAdmin,
    setStatusOfTicketUpdatedByAdmin,
    statusOfTicketUpdatedByAdmin,
    updated_Ticket_By_Admin,
  } = context;

  const [updatedstatusOfTheTicket, setupdatedstatusOfTheTicket] = useState({
    ticketstatus: "resolve",
    reasonofissue: "",
    solutionofissue: "",
    resolveby: localStorage.getItem("email"),
  });

  const { ticketstatus, reasonofissue, solutionofissue, resolveby } =
    updatedstatusOfTheTicket;

  const onChange = (e) => {
    e.preventDefault();

    setupdatedstatusOfTheTicket({
      ...updatedstatusOfTheTicket,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    ticketStatusAdmin();
  }, []);
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
                Slove the issue
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3">
                <label for="validationDefault01" class="form-label">
                  Status
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="ticketstatus"
                  name="ticketstatus"
                  onChange={onChange}
                  value="resolve"
                  disabled
                  required
                />
                <label for="validationDefault03" class="form-label">
                  Resolve By
                </label>
                <input
                  type="text"
                  class="form-control"
                  onChange={onChange}
                  id="resolveby"
                  name="resolveby"
                  value={localStorage.getItem("email")}
                  required
                  disabled
                />
                <label for="validationDefault02" class="form-label">
                  Reason Of Issue
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="reasonofissue"
                  onChange={onChange}
                  maxLength={50}
                  minLength={10}
                  name="reasonofissue"
                  required
                />
                <label for="validationDefaultUsername" class="form-label">
                  Solution
                </label>
                <div class="input-group">
                  <textarea
                    type="text"
                    class="form-control"
                    onChange={onChange}
                    maxLength={50}
                    minLength={10}
                    id="solutionofissue"
                    name="solutionofissue"
                    aria-describedby="inputGroupPrepend2"
                    required
                  />
                </div>

                <div class="col-12">
                  <button
                    class="btn btn-primary"
                    type="submit"
                    onClick={() =>
                      updated_Ticket_By_Admin(
                        localStorage.getItem("TicketID"),
                        "resolve",
                        localStorage.getItem("email"),
                        updatedstatusOfTheTicket.reasonofissue,
                        updatedstatusOfTheTicket.solutionofissue
                      )
                    }
                  >
                    Confirm Issue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <SideAdmin />
      <Ticketheader />
      <hr />

      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          {statusOfTicketUpdatedByAdmin &&
            statusOfTicketUpdatedByAdmin.map((value) => {
              console.log(value);
              return (
                <>
                  <div class="card raisedticket">
                    <div class="card-body">
                      <div className="row">
                        <div className="col-lg-6">
                          <b>Ticket id:</b> {value._id}
                        </div>

                        <div className="col-lg-6">
                          <h5 class="card-title user_emailadmin">
                            {value.email}
                          </h5>
                          <h6 class="card-subtitle mb-2 user_emailadmin text-body-secondary">
                            Current Status: {value.status}
                          </h6>
                        </div>
                      </div>
                      <h3 class="card-text">Subject: {value.subject}</h3>

                      <h6 className="card-text">{value.message}</h6>

                      {value.status == "resolve" ? (
                        <div>
                          <h3 class="card-text">Reason: {value.reason}</h3>

                          <h6 className="card-text">
                            Solution: {value.solution}
                          </h6>
                          <h6 className="resolveby">
                            Resolve By: {value.resolveby}
                          </h6>

                          <button
                            type="button"
                            class="btn btn-outline-success d-none"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => {
                              localStorage.setItem("TicketID", value._id);
                            }}
                          >
                            Resolve Ticket
                          </button>
                        </div>
                      ) : (
                        <div>
                          <div className="d-none">
                            <h3 class="card-text">Reason: {value.readon}</h3>

                            <h6 className="card-text">
                              Solution: {value.solution}
                            </h6>
                          </div>
                          <button
                            type="button"
                            class="btn btn-outline-success"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => {
                              localStorage.setItem("TicketID", value._id);
                            }}
                          >
                            Resolve Ticket
                          </button>
                        </div>
                      )}
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

export default RaisedTicketAdmin;
