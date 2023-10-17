import React, { useState, useContext, useEffect } from "react";
import ChooseRole from "../../Authentication/ChooseRole";
import Sidebar from "../../Home2/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import hotelcontext from "../../hotelcontext/hotelContext";

function AdminLogin() {
  const navigate = useNavigate();
  const context = useContext(hotelcontext);
  const { restrictUser, adminLogin } = context;
  useEffect(() => {
    restrictUser();
  }, []);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = credentials;
 

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
              <form className="adminlogin">
                <h1 className="adminlogin_heading">Admin Login</h1>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Emp ID
                  </label>
                  <input
                    type="email"
                    placeholder="Emp ID"
                    className="form-control admininput"
                    id="email"
                    onChange={onChange}
                    name="email"
                    aria-describedby="emailHelp"
                  />
                  <hr />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control admininput"
                    id="password"
                    onChange={onChange}
                    name="password"
                  />
                  <hr />
                </div>
                Don't have account? <Link to="/adminsignup">Sign UP</Link>
                <button
                  type="button"
                  class="btn btn-primary adminlogin_btn"
                  onClick={() => {
                    adminLogin(credentials.email, credentials.password);
                  }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
