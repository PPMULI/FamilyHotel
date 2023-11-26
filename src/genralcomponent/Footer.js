import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="footer">
        <div className="row">
          <div className="col-lg-4">
            <ul>
              <li
                className="footer_list"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </li>
              <li
                className="footer_list"
                onClick={() => {
                  navigate("/totalmenu");
                }}
              >
                Products
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <ul>
              <li
                className="footer_list"
                onClick={() => {
                  navigate("/");
                }}
              >
                My Raised Ticket
              </li>
              <li
                className="footer_list"
                onClick={() => {
                  navigate("/totalmenu");
                }}
              >
                Contact
              </li>
              <li
                className="footer_list"
                onClick={() => {
                  navigate("/");
                }}
              >
                My Order
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <ul>
              <li
                className="footer_list"
                onClick={() => {
                  navigate("/adminhome");
                }}
              >
                Admin
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
