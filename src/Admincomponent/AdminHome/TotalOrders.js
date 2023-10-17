import React, { useContext, useEffect, useState } from "react";
import hotelcontext from "../../hotelcontext/hotelContext";

function TotalOrders() {
  const context = useContext(hotelcontext);
  const [orderfoodstatus, setOrderfoodstatus] = useState({
    statusoforder: "",
    reasonofrejection: "",
  });
  const {
    fetchOrderAdmin,
    handleDelivaryAdmin,
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

  const onChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setOrderfoodstatus({ ...orderfoodstatus, [e.target.name]: e.target.value });
  };

  const { statusoforder, reasonofrejection } = orderfoodstatus;
  console.log(orderfoodstatus);

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
                Update the status
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3 needs-validation" novalidate>
                <label for="validationCustom01" class="form-label">
                  Order Status
                </label>
                <input
                  type="text"
                  class="form-control"
                  disabled
                  id="statusoforder"
                  name="statusoforder"
                  value="resolve"
                />
                <div class="valid-feedback">Looks good!</div>

                <div class="col-md-12">
                  <label for="validationCustom03" class="form-label">
                    Reason of Rejection
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="reasonofrejection"
                    name="reasonofrejection"
                    placeholder="Enter the reason"
                    onChange={onChange}
                    minLength={10}
                    required
                  />
                </div>

                <div class="col-12">
                  <button
                    class="btn btn-primary"
                    type="submit"
                    onClick={() => {
                      handleUpdateAdmin(
                        localStorage.getItem("orderfoodID"),
                        "Rejected",
                        orderfoodstatus.reasonofrejection
                      );
                    }}
                  >
                    Reject Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {adminorderStatus &&
        adminorderStatus.map((value) => {
          localStorage.setItem("orderfoodID", value._id);
          return (
            <div key={value._id} className="card order_card">
              <div className="card-body">
                <h5 className="card-title">
                  order-ID: {value._id}{" "}
                  <span className="user_email">Order by: {value.email}</span>
                </h5>
                  {value.status == "Deliver" ? (
                    <div className="deliverby">
                      Deliver By: {value.deliverby}
                    </div>
                  ) : (
                    <div className="d-none deliverby">
                      Deliver By: {value.deliverby}
                    </div>
                  )}
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
                {value.status == "Rejected" ? (
                  <div>
                    <h6 class="card-text btn-danger">
                      Reason: {value.reasonofrejection}
                    </h6>
                  </div>
                ) : (
                  <div className="d-none">
                    <h6 class="card-text">Reason: {value.reasonofrejection}</h6>
                  </div>
                )}

                <div className="admin_action">
                  {value.status == "Deliver" || value.status == "Rejected" ? (
                    <button
                      type="button"
                      class="btn btn-primary action_buttons btn btn-outline-danger d-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Launch demo modal
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="action_buttons btn btn-outline-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Reject
                    </button>
                  )}

                  {value.status == "pending" ? (
                    <button
                      type="button"
                      class="btn btn-outline-secondary"
                      onClick={() => handleUpdateAdmin(value._id, "Accept")}
                    >
                      Accept
                    </button>
                  ) : (
                    <button
                      type="button"
                      class="btn d-none btn-outline-secondary"
                      onClick={() => handleUpdateAdmin(value._id, "Accept")}
                    >
                      Accept
                    </button>
                  )}

                  {value.status == "Deliver" || value.status == "Rejected" ? (
                    <button
                      type="button"
                      className="action_buttons btn btn-outline-success d-none"
                      onClick={() =>
                        handleDelivaryAdmin(
                          value._id,
                          "Deliver",
                          localStorage.getItem("email")
                        )
                      }
                    >
                      Deliver
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="action_buttons btn btn-outline-success"
                      onClick={() =>
                        handleDelivaryAdmin(
                          value._id,
                          "Deliver",
                          localStorage.getItem("email")
                        )
                      }
                    >
                      Deliver
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default TotalOrders;
