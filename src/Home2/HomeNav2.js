import React from "react";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Profile from "./Profile";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function HomeNav2() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand dummynav_header" href="#">
            <h1>The</h1>
          </a>
          <a class="navbar-brand dummynav_items" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse dummynav" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link dummynav_items" aria-current="page" href="/adminhome">
                  Admin
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link dummynav_items" href="#">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link dummynav_items" href="/contact">
                  Contact
                </a>
              </li>
            </ul>

            {!localStorage.getItem("authtoken") ? (
              <div className="col-lg-2">
                <p
                  className="addrestraurant  dummy_menubtn"
                  id="menu"
                  onClick={() => {
                    localStorage.clear();
                    navigate("/login");
                  }}
                >
                  Regestration
                </p>
              </div>
            ) : (
              <button
                type="button"
                id="menu"
                onClick={handleLogout}
                className="btn-outline-light dummy_menubtn"
              >
                Logout
              </button>
            )}
            <div className="group_icons">
              <span className="icons">
                <FacebookIcon />
              </span>
              <span className="icons">
                <TwitterIcon />
              </span>
              <span className="icons">
                <InstagramIcon />
              </span>
              <span
                className="icons"
                onClick={() => {
                  navigate("/cartitems");
                }}
              >
                <AddShoppingCartIcon />
              </span>
              <span
                className="icons"
                onClick={() => {
                  navigate("/favoriteitems");
                }}
              >
                <FavoriteBorderIcon />
              </span>
              <span
                className="icons profile"
                onClick={() => {
                  navigate("/cartitems");
                }}
              >
                <Profile />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HomeNav2;
