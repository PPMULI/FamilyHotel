import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav2">
        <nav class="navbar navbar-expand-lg bg-body">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
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
            <div className="nav1">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      <HomeIcon />
                      Home
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link">
                      <AddShoppingCartIcon />
                      Cart
                    </a>
                  </li>
                  {localStorage.getItem("authtoken") ? (
                    // <div className="col-lg-2">
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#"
                        onClick={() => {
                          localStorage.clear();
                        }}
                      >
                        {localStorage.getItem("email")} LogOut
                      </a>
                    </li>
                  ) : (
                    // <div className="col-lg-2">
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#"
                        onClick={() => {
                          navigate("/login");
                        }}
                      >
                        <LockOpenIcon />
                        Login
                      </a>
                    </li>
                    // </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
