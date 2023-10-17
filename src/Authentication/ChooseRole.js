import React from "react";
import { useNavigate } from "react-router-dom";

function ChooseRole() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container btngroup">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            onClick={() => {
              navigate("/login");
            }}
            autocomplete="off"
            checked
          />
          <label class="btn btn-outline-primary" for="btnradio1">
            User Login
          </label>

          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio2"
            onClick={() => {
              navigate("/adminlogin");
            }}
            autocomplete="off"
          />
          <label class="btn btn-outline-primary" for="btnradio2">
            Admin Login
          </label>
        </div>
      </div>
    </>
  );
}

export default ChooseRole;
