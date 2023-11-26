import React, { useEffect, useContext } from "react";
 import hotelcontext from "../hotelcontext/hotelContext";
 import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
 import { auth } from "../firebaseFiles/Config";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Navbar from "../genralcomponent/Navbar";
import Footer from "../genralcomponent/Footer";

function Signup() {
  const [values, setValues] = useState("");
  const context = useContext(hotelcontext);
  const {resrictONAuthentication, handleSignup } = context;

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const { email, password } = credentials;

  useEffect(() => {
    resrictONAuthentication()
  }, [])

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
                <h1 className="adminlogin_heading">Signup Here</h1>
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
                Already have account?{" "}
                <Link className="link" to="/login">
                  Login
                </Link>
                <div className="row">
                  <div className="col-lg-4"></div>
                  <div className="col-lg-5">
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSignup(
                          auth,
                          credentials.email,
                          credentials.password
                        );
                      }}
                      className="btn btn-outline-primary adminlogin_btn"
                    >
                      <LockOpenIcon /> Signup
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

export default Signup;
