import React, { useContext } from "react";
import hotelcontext from "../../hotelcontext/hotelContext";

function Ticketheader() {
  const context = useContext(hotelcontext);
  const {  TicketStatusByAdmin  } = context;
  return (
    <>
      {" "}
      <div className="ticketheader">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 ">
            <button type="button" class="ticket_actions btn btn-primary" onClick={() => {TicketStatusByAdmin("pending")}} >
              Pending
            </button>
            <button type="button" class="ticket_actions btn btn-primary" onClick={() => {TicketStatusByAdmin("resolve")}}>
              Resolve
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ticketheader;
