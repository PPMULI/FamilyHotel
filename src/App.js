import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import MenuCard from "./menu/MenuCard";
import Contact from "./Contact/Contact";
import Cart from "./menu/Cart";
import DummyMenu from "./menu/DummyMenu";
// import Dummy from "./Dummy";
 import CartItems from "./menu/CartItems";
 import Home2 from "./Home2/Home2";
import HotelState from "./hotelcontext/HotelState";
import YourOrder from "./menu/YourOrder";
import Errorpage from "./Errorpage";
import ItemsDetails from "./menu/ItemsDetails";
import Favourite from "./menu/Favourite";
import DummyUpdate from "./DummyUpdate";
import UserTicket from "./UserRaisedTicket/UserTicket";
import TotalMenu from "./menu/overallMenu/TotalMenu";
import DishDetails from "./menu/DishDetails";
import MyRaisedTickets from "./Contact/MyRaisedTickets";
import UserList from "./profile/UserList";
 import CusomerOrder from "./AdminPart/CustomerOrder/CusomerOrder";
import CustomerTickets from "./AdminPart/customerTickets/CustomerTickets";
import CustomerOrderByStatus from "./AdminPart/CustomerOrder/CustomerOrderByStatus";
import CustomerTicketsByStatus from "./AdminPart/customerTickets/CustomerTicketsByStatus";
import AdminList from "./AdminList/AdminList";
import UserProfile from "./profile/UserProfile";
import CreateProfile from "./profile/CreateProfile";
import AdminHome from "./AdminList/AdminHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <HotelState>
          <Routes>
            <Route exact path="/createprofile" element={<CreateProfile />} />
            <Route exact path="/yourprofile" element={<UserProfile />} />
            <Route exact path="/adminlist" element={<AdminList />} />
            <Route
              exact
              path="/customerticketbystatus"
              element={<CustomerTicketsByStatus />}
            />
            <Route
              exact
              path="/customerorderbystatus"
              element={<CustomerOrderByStatus />}
            />
            <Route
              exact
              path="/customertickets"
              element={<CustomerTickets />}
            />
            <Route exact path="/adminhome" element={<AdminHome />} />
            <Route exact path="/customerorders" element={<CusomerOrder />} />
            <Route exact path="/userlist" element={<UserList />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signin" element={<Signup />} />
            <Route path="/" element={<Home2 />} />
            <Route path="*" element={<Errorpage />} />
            <Route exact path="/menucard" element={<MenuCard />} />
            <Route exact path="/totalmenu" element={<TotalMenu />} />
            <Route exact path="/dishdetails" element={<DishDetails />} />
            <Route exact path="/yourcart" element={<CartItems />} />
            <Route exact path="/yourorder" element={<YourOrder />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/myraisedticket" element={<MyRaisedTickets />} />
          </Routes>
        </HotelState>
      </BrowserRouter>
    </>
  );
}

export default App;
