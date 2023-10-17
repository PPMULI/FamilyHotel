import React, { useContext, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
function AdminServices() {
  return (
    <>
      <div className="adminservices">
        <Link className="adminmenu_items" to="/">
          <HomeIcon />
          User Section
        </Link>
        <Link className="adminmenu_items" to="/raisedticketadmin">
          <MarkEmailReadIcon />
          Raised Tickets
        </Link>
        <Link className="adminmenu_items" to="/contact">
          <ConnectWithoutContactIcon />
          Contact
        </Link>
      </div>
    </>
  );
}

export default AdminServices;
