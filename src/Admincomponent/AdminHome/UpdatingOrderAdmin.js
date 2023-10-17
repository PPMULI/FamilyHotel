import React, { useContext, useEffect, useState } from "react";
import hotelcontext from "../../hotelcontext/hotelContext";

function UpdatingOrderAdmin() {
    const context = useContext(hotelcontext);
    const {
      fetchOrderAdmin,
      setTotalOrderAdmin,
      YourOrderStatus,
      totalOrderAdmin,
      handleUpdateAdmin,
      orderstatus,
      fetchUpdatedstatusAdmin,
      adminorderStatus,
      setadminOrderStatus,
      setOrderStatus,
    } = context;
  
    const [order, setOrder] = useState([]);
  
    useEffect(() => {
      fetchOrderAdmin();
    }, []);
  return (
    <>
      {totalOrderAdmin &&
        totalOrderAdmin.map((value) => {
          return (
            <div key={value._id} className="card order_card">
              <div className="card-body">
                <h5 className="card-title">
                  order-ID: {value._id}{" "}
                  <span className="user_email">Order by: {value.email}</span>
                </h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  <span className="current_status">
                    Current status: {value.status}{" "}
                  </span>
                  {value.orderedfood.map((foodItem) => (
                    <li key={foodItem.id}>
                      {foodItem.quantity}.{foodItem.dish}
                    </li>
                  ))}
                </h6>
                <div className="admin_action">
                {((value.status == "Deliver") || (value.status == "Rejected")? (
                  <button
                    type="button"
                    className="action_buttons btn btn-outline-danger d-none" disabled 
                    onClick={() => handleUpdateAdmin(value._id, "Rejected")}
                  >
                    Rejected
                  </button>
                ) : (
                  <button
                  type="button"
                  className="action_buttons btn btn-outline-danger" 
                  onClick={() => handleUpdateAdmin(value._id, "Rejected")}
                >
                  Rejected
                </button>
                ))}
                  <button
                    type="button"
                    className="action_buttons btn btn-outline-secondary" 
                    onClick={() => handleUpdateAdmin(value._id, "Accepted")}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="action_buttons btn btn-outline-warning"
                    onClick={() => handleUpdateAdmin(value._id, "Deliver")}
                  >
                    Deliver
                  </button>
                  <button
                    type="button"
                    onClick={() => handleUpdateAdmin(value._id, "Ready")}
                    className="action_buttons btn btn-outline-success"
                  >
                    Ready
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  )
}

export default UpdatingOrderAdmin