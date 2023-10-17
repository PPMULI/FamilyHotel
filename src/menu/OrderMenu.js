import React, { useContext } from "react";
import { Link } from "react-router-dom";
import hotelcontext from "../hotelcontext/hotelContext";

function OrderMenu() {
  const context = useContext(hotelcontext);
  const { YourOrderStatus } = context;
  return (
    <>
      <div
        class="btn-group order_menu"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          onClick={() => {
            YourOrderStatus("pending");
          }}
          class="btn-check"
          name="btnradio"
          id="btnradio1"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnradio1">
          Pending
        </label>
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
          onClick={() => {
            YourOrderStatus("Accept");
          }}
        />
        <label class="btn btn-outline-primary" for="btnradio2">
          Accepted
        </label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio3"
          onClick={() => {
            YourOrderStatus("Deliver");
          }}
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnradio3">
          deliver
        </label>
      </div>

      <button
        type="button"
        onClick={() => {
          YourOrderStatus("Rejected");
        }}
        class="btn btn-danger rejected_order_button"
      >
        Rejected Orders
      </button>
    </>
  );
}

export default OrderMenu;
