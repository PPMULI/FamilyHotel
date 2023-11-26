import React from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { AddShoppingCart } from "@material-ui/icons";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MenuBookIcon from '@mui/icons-material/MenuBook';
function ContatcNAv() {
  const navigate = useNavigate();
  return (
    <>
      <nav class="navbar navbar-expand-lg  contact-nav">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse navigation-item" id="navbarNav">
            <ul class="navbar-nav navigation-item-link ">
              <li class="nav-item ">
                <a
                  class="nav-link  contact_nav_items"
                  onClick={() => {
                    navigate("/");
                  }}
                  aria-current="page"
                  href="/"
                >
                  <HomeIcon /> Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link contact_nav_items" href="/yourcart">
                  <AddShoppingCart /> Cart
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link contact_nav_items" href="/totalmenu">
                  <RestaurantMenuIcon /> Menu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link contact_nav_items" href="/yourorder">
                 <MenuBookIcon /> Your Orders
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ContatcNAv;
