import React, { useContext, useEffect, useState } from "react";
import hotelcontext from "./hotelcontext/hotelContext";
import { Link } from "react-router-dom";

function TotalOrders() {
  const context = useContext(hotelcontext);
  const { fetchOrderAdmin,dummy_responce, setTotalOrderAdmin, totalOrderAdmin } = context;

  const [order, setOrder] = useState([]);
  console.log(totalOrderAdmin.orderfood);

  useEffect(() => {
    dummy_responce()
  }, []);

  // Function to handle the update action
  const handleUpdate = (orderId, status) => {
    console.log(orderId, status);
    // Replace 'yourUpdateEndpoint' with your actual API endpoint for updating orders
    const responce = fetch(`http://localhost:5000/api/orders/updateorder/${orderId}`, {
      method: "PUT", // Use the appropriate HTTP method (PUT, POST, etc.)
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: status }), // Replace 'updatedStatus' with the new status value
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log("Order updated:", data);
        // You may want to update your component's state or trigger a refresh here
      })
      .catch((error) => {
        console.error("Error updating order:", error);
      });

      // 64fd5d0d6193837f1f0c2a10
  };

  return (
    <>
    <h1>I am dummy</h1>
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
                  <button
                    type="button"
                    className="action_buttons btn btn-outline-danger"
                    onClick={() => handleUpdate(value._id, "Rejected")}
                  >
                    Rejected
                  </button>
                  <button
                    type="button"
                    className="action_buttons btn btn-outline-secondary"
                    onClick={() => handleUpdate(value._id, "Accepted")}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="action_buttons btn btn-outline-warning"
                    onClick={() => handleUpdate(value._id, "Deliver")}
                  >
                    Deliver
                  </button>
                  <button
                    type="button"
                    onClick={() => handleUpdate(value._id, "Ready")}
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
  );
}

export default TotalOrders;
