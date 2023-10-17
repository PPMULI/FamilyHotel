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
function Sidebar() {
  return (
    <>
      <Menu>
        <Link className="menu-item" to="/">
          <HomeIcon />
          Home
        </Link>
        <Link className="menu-item" to="/yourorder">
          <MenuBookIcon />
          Your Order
        </Link>
        <Link className="menu-item" to="/menucard">
          <RestaurantMenuIcon />
          Menu
        </Link>
        <Link className="menu-item" to="/contact">
          <ConnectWithoutContactIcon />
          Contact
        </Link>

        <Link className="menu-item" to="/cartitems">
          <AddShoppingCartIcon />
          Cart
        </Link>

        <Link className="menu-item" to="/userticket">
          <ConfirmationNumberIcon />
          Your Ticket
        </Link>
        <Link className="menu-item" to="/favoriteitems">
          <FavoriteBorderIcon />
          Favourite
        </Link>
        {!localStorage.getItem("authtoken") ? (
          <Link className="menu-item" to="/login">
            <LoginIcon />
            login
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
            logOut
          </Link>
        )}
        <Link className="menu-item" to="/adminhome">
          <SupervisorAccountIcon />
          Admin
        </Link>
      </Menu>
    </>
  );
}

export default Sidebar;
