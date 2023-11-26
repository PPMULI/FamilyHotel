import React, { useEffect, useContext } from "react";
import hotelcontext from "../hotelcontext/hotelContext";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../genralcomponent/Navbar";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { auth } from "../firebaseFiles/Config";
import regestration from "../Images/regestration.jpg";
import Footer from "../genralcomponent/Footer";

function Login() {
  const context = useContext(hotelcontext);
  const { handleLogin, resrictONAuthentication } = context;

  const [values, setValues] = useState("");
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    resrictONAuthentication()
  }, [])

  useEffect(() => {
    setValues(localStorage.getItem("email"));
  });

  const { email, password } = credentials;
  const onChange = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
    <Navbar />
      <div className="adminBackgroumnd">
        <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-5">
              <form className="adminlogin">
                <h1 className="adminlogin_heading">login Here</h1>
                <hr />{" "}
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control admininput"
                    id="email"
                    name="email"
                    onChange={onChange}
                    placeholder="Enter email"
                    aria-describedby="emailHelp"
                  />
                  <hr />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control admininput"
                    id="password"
                    name="password"
                    onChange={onChange}
                    placeholder="Enter password"
                  />
                  <hr />
                </div>
                Don't have account?{" "}
                <Link className="link" to="/signin">
                  Signup
                </Link>
                <div className="row">
                  <div className="col-lg-4"></div>
                  <div className="col-lg-5">
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLogin(credentials.email, credentials.password);
                      }}
                      className="btn btn-outline-primary adminlogin_btn"
                    >
                      <LockOpenIcon /> login
                    </button>
                  </div>

                  <div className="col-lg-1"></div>
                </div>
                <hr />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
