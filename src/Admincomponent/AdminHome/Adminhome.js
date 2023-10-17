import React, { useContext, useEffect } from "react";
import AdminNav from "./AdminNav";
import AdminServices from "./AdminServices";
import TotalOrders from "./TotalOrders";
import hotelcontext from "../../hotelcontext/hotelContext";
import { useNavigate } from "react-router-dom";

function Adminhome() {
  const context = useContext(hotelcontext);
  const navigate = useNavigate();
  const {
    fetchOrderAdmin,
    setTotalOrderAdmin,
    totalOrderAdmin,
    handleUpdateAdmin,
    YourOrderStatus,
    orderstatus,
    fetchUpdatedstatusAdmin,
    adminorderStatus,
    setadminOrderStatus,
    setOrderStatus,
    checkAdmin,
  } = context;

  useEffect(() => {
    checkAdmin();
  }, []);

  return (
    <>
      <AdminNav />
      <div className="admin_content">
        <div class="card order_body">
          <div class="card-body">
            <div className="row">
              <div className="col-lg-3">
                <div class="card order_cards">
                  <div
                    class="card-body"
                    onClick={() => {
                      fetchUpdatedstatusAdmin("pending");
                    }}
                  >
                    <h6 class="card-subtitle mb-2 order_heading text-body-secondary order_heading">
                      Pending
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div class="card order_cards">
                  <div
                    class="card-body"
                    onClick={() => {
                      fetchUpdatedstatusAdmin("Accept");
                    }}
                  >
                    <h6 class="card-subtitle mb-2 order_heading text-body-secondary order_heading">
                      Accept
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div class="card order_cards">
                  <div
                    class="card-body"
                    onClick={() => {
                      fetchUpdatedstatusAdmin("Deliver");
                    }}
                  >
                    <h6 class="card-subtitle mb-2 order_heading text-body-secondary order_heading">
                      Deliver
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div class="card order_cards">
                  <div
                    class="card-body"
                    onClick={() => {
                      fetchUpdatedstatusAdmin("Rejected");
                    }}
                  >
                    <h6 class="card-subtitle mb-2 order_heading text-body-secondary order_heading">
                      Rejected
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <AdminServices />
          </div>

          <div className="col-lg-9">
            <TotalOrders />
          </div>
        </div>
      </div>
    </>
  );
}

export default Adminhome;
