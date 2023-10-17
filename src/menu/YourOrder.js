import React, { useContext, useEffect } from "react";
import Sidebar from "../Home2/Sidebar";
import hotelcontext from "../hotelcontext/hotelContext";
import OrderMenu from "./OrderMenu";

function YourOrder() {
  const context = useContext(hotelcontext);
  const {
    yourOrder,
    myOrder,
    setMyOrder,
    orderstatus,
    setOrderStatus,
    cancel_orderItem,
  } = context;
   useEffect(() => {
    yourOrder();
  }, []);
  return (
    <>
      <Sidebar />
      <h1 className="your_order">Your Order</h1>
      <OrderMenu />
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 myOrder">
            {orderstatus &&
              orderstatus.map((value) => {
                return (
                  <>
                    <div class="card order_card my_orders">
                      <div class="card-body">
                        <h5 class="card-title">order-ID: {value._id} </h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">
                          <span className="current_order_status">
                            Current status:{" "}
                            <span className="status">{value.status}</span>{" "}
                          </span>
                          {value.status == "Rejected" ? (
                            <div>
                              Reason :{" "}
                              <span className="status">
                                {value.reasonofrejection}
                              </span>{" "}
                            </div>
                          ) : (
                            <div className="d-none">
                              Reason :{" "}
                              <span className="status">
                                {value.reasonofrejection}
                              </span>{" "}
                            </div>
                          )}
                          {value.orderedfood.map((foodItem) => (
                            <li key={foodItem.id} className="user_items">
                              {foodItem.quantity}.{foodItem.dish}
                            </li>
                          ))}
                        </h6>
                        {value.status == "pending" ? (
                          <button type="button" class="btn btn-warning" onClick={() => {cancel_orderItem(value._id)}}>
                            Cancel Order
                          </button>
                        ) : (
                          <button type="button" class="btn btn-warning d-none" onClick={() => {cancel_orderItem(value._id)}}>
                            Cancel Order
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default YourOrder;
