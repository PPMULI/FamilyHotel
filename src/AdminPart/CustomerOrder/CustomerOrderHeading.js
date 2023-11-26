import React, { useContext } from "react";
import hotelcontext from "../../hotelcontext/hotelContext";

function CustomerOrderHeading() {
  const context = useContext(hotelcontext);
  const {
    Categorires_orders_by_status,
    setClassifyYourOrderByStatus,
    classifyYourOrderByStatus,
  } = context;
  return (
    <>
      <div className="orders_heading">
        <div className="row">
          <div className="col-lg-6">
            <h1>Customer Orders</h1>
          </div>
          <div className="col-lg-6 admin_button">
            <button
              className="btn btn-outline-warning admin_button_for_admin"
              onClick={(e) => {
                e.preventDefault();
                Categorires_orders_by_status("pending");
              }}
            >
              Pending
            </button>
            <button
              className="btn btn-outline-primary admin_button_for_admin"
              onClick={(e) => {
                e.preventDefault();
                Categorires_orders_by_status("accept");
              }}
            >
              Accept
            </button>
            <button
              className="btn btn-outline-success admin_button_for_admin"
              onClick={(e) => {
                e.preventDefault();
                Categorires_orders_by_status("deliver");
              }}
            >
              Deliver
            </button>
            <button
              className="btn btn-outline-danger admin_button_for_admin"
              onClick={(e) => {
                e.preventDefault();
                Categorires_orders_by_status("reject");
              }}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerOrderHeading;
