import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import LoginIcon from "@mui/icons-material/Login";

function SideAdmin() {
  return (
    <>
      {" "}
      <Menu>
        <Link className="menu-item" to="/adminhome">
          <HomeIcon />
          Home
        </Link>
        <Link className="menu-item" to="/menucard">
          <RestaurantMenuIcon />
          Menu
        </Link>
        <Link className="menu-item" to="/contact">
          <ConnectWithoutContactIcon />
          Contact
        </Link>

        <Link className="menu-item" to="/login">
          <LoginIcon />
          Authentication
        </Link>
      </Menu>
    </>
  );
}

export default SideAdmin;
