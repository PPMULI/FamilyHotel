 import React, { useEffect, useContext } from "react";
// import GoogleIcon from "@mui/icons-material/Google";
import hotelcontext from "../hotelcontext/hotelContext";
// import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Home2/Sidebar";
import ChooseRole from "./ChooseRole";

function Signup() {
  const navigate = useNavigate();
  const context = useContext(hotelcontext);
  const { restrictUser, handleSubmit } = context;
  useEffect(() => {
    restrictUser();
  }, []);

  const [credentials, setCredentials] = useState({
    email: "",
    name: "",
    number: "",
    address: "",
    password: "",
  });

  const { email, password, name, address, number } = credentials;
  console.log(credentials.name);
  const handleClick = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
  
    e.preventDefault();
    console.log(e.target.value);
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="adminBackgroumnd">
        <ChooseRole />
        <Sidebar />
        <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-5">
              <form className="adminlogin" onSubmit={handleSubmit}>
                <h1 className="adminlogin_heading">Signup</h1>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className=" form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control admininput"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                    aria-describedby="emailHelp"
                  />
                  <small id="err"></small>
                  <hr className="horizon" />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className=" form-label">
                    UserName
                  </label>
                  <input
                    type="text"
                    className="form-control admininput"
                    id="name"
                    placeholder="Username"
                    name="name"
                    onChange={onChange}
                    aria-describedby="emailHelp"
                  />
                  <small id="err"></small>
                  <hr className="horizon" />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className=" form-label">
                    contact number
                  </label>
                  <input
                    type="email"
                    className="form-control admininput"
                    id="number"
                    name="number"
                    placeholder="Contact number"
                    onChange={onChange}
                    aria-describedby="emailHelp"
                  />
                  <small id="err"></small>
                  <hr className="horizon" />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className=" form-label">
                    address
                  </label>
                  <input
                    type="text"
                    className="form-control admininput"
                    id="address"
                    name="address"
                    placeholder="Address"
                    onChange={onChange}
                    aria-describedby="emailHelp"
                  />
                  <small id="err"></small>
                  <hr className="horizon" />
                </div>
                <p className="forgot">
                  <Link to="/"> Forgot Email? </Link>
                </p>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className=" form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control admininput"
                    id="password"
                    placeholder="Password"
                    name="password"
                    onChange={onChange}
                    aria-describedby="emailHelp"
                  />
                  <small id="err"></small>
                  <hr className="horizon" />
                </div>

                <p className="forgot">
                  <Link to="/"> Forgot password? </Link>
                </p>
                  Don't have account? <Link to="/login">Sign in</Link>
                <div className="loginbutton">
                  <button
                    type="button"
                    class="btn btn-primary adminlogin_btn"
                    onClick={() => {
                      handleSubmit(
                        credentials.email,
                        credentials.name,
                        credentials.address,
                        credentials.number,
                        credentials.password
                      );
                    }}
                  >
                    Sign Up
                  </button>
                </div>
                <hr />
                <hr />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
