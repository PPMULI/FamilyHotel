import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseFiles/Config";

import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import hotelcontext from "../hotelcontext/hotelContext";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function HomeNav2() {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);
  const context = useContext(hotelcontext);
  const { userSignOut } = context;

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);
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
                <a
                  class="nav-link dummynav_items"
                  aria-current="page"
                  href="/adminhome"
                >
                  Admin
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link dummynav_items" href="/contact">
                  Contact
                </a>
              </li>
            </ul>

            {!localStorage.getItem("email") ? (
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
                onClick={() => {
                  userSignOut();
                }}
                className="btn-outline-light dummy_menubtn"
              >
                Logout
              </button>
            )}
            <div className="group_icons">
              <span className="icons">
                <Link
                  to="https://www.facebook.com/pritam.muli/"
                  target="_blank"
                  className="linkonhome"
                >
                  <FacebookIcon />
                </Link>
              </span>
              <span className="icons">
                <Link
                  to="https://twitter.com/home"
                  className="linkonhome"
                  target="_blank"
                >
                  <TwitterIcon />
                </Link>
              </span>
              <span className="icons">
                <Link
                  to="https://www.linkedin.com/in/pritam-muli-92985a204/"
                  target="_blank"
                  className="linkonhome"
                >
                  <LinkedInIcon />
                </Link>
              </span>
              <span
                className="icons"
                onClick={() => {
                  navigate("/yourcart");
                }}
              >
                <AddShoppingCartIcon />
              </span>
              <span
                className="icons profile"
                onClick={() => {
                  navigate("/yourprofile");
                }}
              >
                <AccountCircleIcon />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HomeNav2;
