import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import DummySignup from "./Authentication/DummySignup";
import MenuCard from "./menu/MenuCard";
import Contact from "./Contact/Contact";
import Cart from "./menu/Cart";
import DummyMenu from "./menu/DummyMenu";
import Dummy from "./Dummy";
import TransportHome from "./Transport/TransportHome";
import CartItems from "./menu/CartItems";
import DummyTransport from "./Transport/DummyTransport";
import Payment from "./menu/payment/PaymentComponent";
import Home2 from "./Home2/Home2";
import HotelState from "./hotelcontext/HotelState";
import DummyPayment from "./menu/payment/DummyPayment";
import Payment2 from "./menu/payment2/Paymrnt2";
import Success from "./menu/Success";
import Cancel from "./menu/Cancel";
import PaymentConfiramtion from "./menu/PaymentConfiramtion";
import YourOrder from "./menu/YourOrder";
import Errorpage from "./Errorpage";
import ChooseRole from "./Authentication/ChooseRole";
import AdminLogin from "./Admincomponent/AdminAuthentication.js/AdminLogin";
import AdminSignup from "./Admincomponent/AdminAuthentication.js/AdminSignup";
import Adminhome from "./Admincomponent/AdminHome/Adminhome";
import More from "./Admincomponent/more/More";
import ItemsDetails from "./menu/ItemsDetails";
import Favourite from "./menu/Favourite";
import TotalOrders from "./Admincomponent/AdminHome/TotalOrders";
import DummyUpdate from "./DummyUpdate";
import UpdatingOrderAdmin from "./Admincomponent/AdminHome/UpdatingOrderAdmin";
import RaisedTicketAdmin from "./Admincomponent/Ticketsdisplay/RaisedTicketAdmin";
import UserTicket from "./UserRaisedTicket/UserTicket";
function App() {
  return (
    <>
      <HotelState>
        <BrowserRouter>
          <Routes>
            <Route exact path="/favoriteitems" element={<Favourite />} />
            <Route exact path="/itemdetails" element={<ItemsDetails />} />
            <Route exact path="/more" element={<More />} />
            <Route exact path="/adminhome" element={<Adminhome />} />
            <Route exact path="/adminsignup" element={<AdminSignup />} />
            <Route exact path="/adminlogin" element={<AdminLogin />} />
            <Route exact path="/chooselogin" element={<ChooseRole />} />
            <Route exact path="/yourorder" element={<YourOrder />} />
            <Route exact path="cancel" element={<Cancel />} />
            <Route exact path="success" element={<Success />} />
            <Route
              exact
              path="paymentconfirmation"
              element={<PaymentConfiramtion />}
            />
            <Route exact path="/update/:id" element={<DummyUpdate />} />
            <Route exact path="/cartitems" element={<CartItems />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/menucard" element={<MenuCard />} />
            <Route path="/" element={<Home2 />} />
            <Route path="*" element={<Errorpage />} />
            <Route exact path="/dummy" element={<Dummy />} />
            <Route exact path="/transport" element={<TransportHome />} />
            <Route exact path="/signin" element={<Signup />} />
            <Route exact path="/totalorder" element={<TotalOrders />} />
            <Route exact path="/userticket" element={<UserTicket />} />
            <Route
              exact
              path="/updatedorderadmin"
              element={<UpdatingOrderAdmin />}
            />
            <Route
              exact
              path="/raisedticketadmin"
              element={<RaisedTicketAdmin />}
            />
          </Routes>
        </BrowserRouter>
      </HotelState>
    </>
  );
}

export default App;
