import React, { useContext, useEffect } from "react";
import Sidebar from "../Home2/Sidebar";
import hotelcontext from "../hotelcontext/hotelContext";
function UserTicket() {
  const context = useContext(hotelcontext);
  const {
    fetchuserticket,
    userticket,
    fetchusertickets,
    setUserticket,
    raisedEicketUser,
    setRaisedticketUser,
  } = context;

  useEffect(() => {
    fetchuserticket();
   }, []);
  return (
    <>
      <Sidebar />
      <div className="ow user_ticket">
        <button
          type="button"
          class="btn btn-outline-warning raised_ticket_buttons"
          onClick={() => {
            fetchusertickets("pending");
          }}
        >
          Pending Tickets
        </button>
        <button
          type="button"
          class="btn btn-outline-success raised_ticket_buttons"
          onClick={() => {
            fetchusertickets("resolve");
          }}
        >
          Resolve Tickets
        </button>
      </div>
      {/* This card is copy from raisedticketadmin */}
      {raisedEicketUser &&
        raisedEicketUser.map((value) => {
          return (
            <>
              <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
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
                      {value.status == "resolve" ? (
                        <div>
                          <h6 className="card-text userreason">Reason: {value.reason}</h6>
                      <h6 className="card-text usersolution"> <b>Solution: {value.solution}</b> </h6>
                        </div>
                      ) : (
                        <div className="d-none">
                            <h6 className="card-text userreason">Reason: {value.reason}</h6>
                      <h6 className="card-text usersolution"> <b>Solution: {value.solution}</b> </h6>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}

export default UserTicket;
