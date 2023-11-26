import React, { useContext, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import LogoutIcon from "@mui/icons-material/Logout";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
function Sidebar() {
  return (
    <>
      <Menu>
        {window.location.pathname == "/adminhome" ? (
          <Link className="menu-item item_ongoing" to="/adminhome">
            <HomeIcon />
            <span className="menu-item-component"> Home </span>
          </Link>
        ) : (
          <Link className="menu-item" to="/adminhome">
            <HomeIcon />
            <span className="menu-item-component"> Home </span>
          </Link>
        )}

        {window.location.pathname == "/customerorders" ? (
          <Link className="menu-item item_ongoing" to="/customerorders">
            <MenuBookIcon />
            <span className="menu-item-component">Customer Order</span>
          </Link>
        ) : (
          <Link className="menu-item" to="/customerorders">
            <MenuBookIcon />
            <span className="menu-item-component">Customer Order</span>
          </Link>
        )}

        {window.location.pathname == "/customertickets" ? (
          <Link className="menu-item item_ongoing" to="/customertickets">
            <MenuBookIcon />
            <span className="menu-item-component">Customer Tickets</span>
          </Link>
        ) : (
          <Link className="menu-item" to="/customertickets">
            <MenuBookIcon />
            <span className="menu-item-component">Customer Tickets</span>
          </Link>
        )}

        {window.location.pathname == "/adminlist" ? (
          <Link className="menu-item item_ongoing" to="/adminlist">
            <SupervisorAccountIcon />
            <span className="menu-item-component">Admin List</span>
          </Link>
        ) : (
          <Link className="menu-item" to="/adminlist">
            <SupervisorAccountIcon />
            <span className="menu-item-component">Admin List</span>
          </Link>
        )}

        <Link className="menu-item" to="/contact">
          <ConnectWithoutContactIcon />
          <span className="menu-item-component">Contacts</span>
        </Link>
        {!localStorage.getItem("authtoken") ? (
          <Link className="menu-item" to="/login">
            <LoginIcon />
            <span className="menu-item-component">Login</span>
          </Link>
        ) : (
          <Link
            className="menu-item"
            to="/login"
            onClick={() => {
              localStorage.clear();
            }}
          >
            <LogoutIcon />
            <span className="menu-item-component">LogOut</span>
          </Link>
        )}

        <Link className="menu-item" to="/">
          <PersonOutlineIcon />
          <span className="menu-item-component">User Section</span>
        </Link>
      </Menu>
    </>
  );
}

export default Sidebar;
