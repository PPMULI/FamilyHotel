import React, { useEffect, useContext } from "react";
import hotelcontext from "../hotelcontext/hotelContext";
import { ToastContainer, toast } from "react-toastify";

// import GoogleIcon from "@mui/icons-material/Google";
// import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import regestration from "../Images/regestration.jpg";
import Sidebar from "../Home2/Sidebar";
import ChooseRole from "./ChooseRole";
const BASE_URL = process.env.BASE_URL

function Login() {
  const context = useContext(hotelcontext);
  const { restrictUser } = context;
  useEffect(() => {
    restrictUser();
  }, []);
  const [values, setValues] = useState("");
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    setValues(localStorage.getItem("email"));
  });

  const { email, password } = credentials;
  const handleLogin = async (e) => {
    e.preventDefault();
    alert("om");
    const responce = await fetch(
      `${BASE_URL}/api/authenticator/loginuser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );

    const json = await responce.json();
    console.log(json);
    if (json.success) {
      toast.success(`You are logged-in ${(window.location.href = "/")}`, {
        position: "top-center",
        theme: "colored",
      });
      localStorage.setItem("authtoken", json.authtoken);
      localStorage.setItem("email", json.ema);
    } else {
      toast.error(`Invalid Credentials`, {
        position: "top-center",
        theme: "colored",
      });
    }
  };
  const onChange = (e) => {
    e.preventDefault();
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
              <form className="adminlogin" onSubmit={handleLogin}>
                <h1 className="adminlogin_heading">User Login</h1>
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
                    onChange={onChange}
                    id="password"
                    name="password"
                  />
                  <hr />
                </div>
                Don't have account?{" "}
                <Link className="link" to="/signin">
                  Signup
                </Link>
                <button
                  type="submit"
                  // onClick={() => {
                  //   handleLogin();
                  // }}
                  className="btn btn-primary adminlogin_btn"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
