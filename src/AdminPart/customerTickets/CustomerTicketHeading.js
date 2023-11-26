import React, { useContext } from 'react'
import hotelcontext from '../../hotelcontext/hotelContext';

function CustomerTicketHeading() {
    const context = useContext(hotelcontext)
    const {categoriesRaisedTicketsByStatus, categoriestheRaisedTicketByStatus} = context
  return (
    <>
     <div className="orders_heading">
        <div className="row">
          <div className="col-lg-6">
            <h1>Customer Tickets</h1>
          </div>
          <div className="col-lg-6 admin_button">
            <button
              className="btn btn-outline-warning admin_button_for_admin"
              onClick={(e) => {
                e.preventDefault();
                categoriesRaisedTicketsByStatus("pending");
              }}
            >
              Pending
            </button>
        
            <button
              className="btn btn-outline-success admin_button_for_admin"
              onClick={(e) => {
                e.preventDefault();
                categoriesRaisedTicketsByStatus("resolve");
              }}
            >
              Resolve
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerTicketHeading