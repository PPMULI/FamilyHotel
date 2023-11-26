import React , {useContext, useEffect, useState}from 'react'
import { useNavigate } from 'react-router-dom';
import hotelcontext from '../hotelcontext/hotelContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseFiles/Config';
import Logout from '@mui/icons-material/Logout';
import { ToastContainer, toast } from "react-toastify";
import LoginIcon from "@mui/icons-material/Login";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function AdminNav() {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();
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
    <nav class="navbar navbar-expand-lg fix_navbar">
        <div class="container-fluid">
          <a class="navbar-brand navbar-heading" href="#">
            <div className="row">
              
              <a class="navbar-brand family_hotel" href="/">
                Family Hotel
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </a>

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
          {/* <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav navbar-items">
              <li class="nav-item navbar-links">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  role="button"
                  aria-expanded="false"
                  onClick={() => {
                    navigate("/totalmenu");
                  }}
                >
                  Products
                </a>
              </li>
              
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>

                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/myraisedticket">
                      My Raised Ticket
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/yourorder">
                      My Orders
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="/contact">
                      Contact{" "}
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="/myraisedticket">
                      My Raised Ticket
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="/adminhome"
                  role="button"
                  aria-expanded="false"
                >
                  Admin
                </a>
              </li>

              {localStorage.getItem("email") ||
              localStorage.getItem("accesstoken") ? (
                <div className="icons_on_nav login_icon" onClick={userSignOut}>
                  <Logout />
                </div>
              ) : (
                <div
                  className="icons_on_nav login_icon"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <LoginIcon />
                </div>
              )}

              <div
                className="icons_on_nav cart_icon"
                onClick={() => {
                  navigate("/yourcart");
                }}
              >
                <AddShoppingCartIcon />
              </div>
            </ul>
          </div> */}
        </div>
      </nav>
      <ToastContainer />
    </>
  )
}

export default AdminNav