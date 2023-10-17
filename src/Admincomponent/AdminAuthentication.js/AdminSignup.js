import React, {useState, useEffect} from "react";
import ChooseRole from "../../Authentication/ChooseRole";
import { useNavigate} from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Home2/Sidebar";
import hotelcontext from "../../hotelcontext/hotelContext";

function AdminSignup() {
  const navigate = useNavigate();
  const context = useContext(hotelcontext);
  const { restrictUser, adminSignup } = context;
  useEffect(() => {
    restrictUser();
  }, []);

  const [credentials, setCredentials] = useState({
    email: "",
    name: "",
    number: "",
    address: "",
    password: "",
    empid: "",
    jobrole: "",
    reportsto: "",
    location: ""
  });

  const { email, password, name, address, number, empid, reportsto, location, jobrole } = credentials;
  console.log(credentials);
  
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
              <form className="adminlogin"  >
                <h1 className="adminlogin_heading">Admin Signup</h1>
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
                    Emp ID
                  </label>
                  <input
                    type="text"
                    className="form-control admininput"
                    id="empid"
                    placeholder="Emp ID"
                    name="empid"
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

                <div className="mb-3">
                  <label for="exampleInputEmail1" className=" form-label">
                    Job Role
                  </label>
                  <input
                    type="text"
                    className="form-control admininput"
                    id="jobrole"
                    placeholder="Job Role"
                    name="jobrole"
                    onChange={onChange}
                    aria-describedby="emailHelp"
                  />
                  <small id="err"></small>
                  <hr className="horizon" />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className=" form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control admininput"
                    id="location"
                    placeholder="Location"
                    name="location"
                    onChange={onChange}
                    aria-describedby="emailHelp"
                  />
                  <small id="err"></small>
                  <hr className="horizon" />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className=" form-label">
                    ReportsTo
                  </label>
                  <input
                    type="text"
                    className="form-control admininput"
                    id="reportsto"
                    placeholder="Reports To"
                    name="reportsto"
                    onChange={onChange}
                    aria-describedby="emailHelp"
                  />
                  <small id="err"></small>
                  <hr className="horizon" />
                </div>
                Don't have account? <Link to="/adminlogin">Sign in</Link>
                <div className="loginbutton">
                  <button
                    type="button"
                    class="btn btn-primary adminlogin_btn"
                    onClick={() => {
                      adminSignup(
                        credentials.email,
                        credentials.name,
                        credentials.address,
                        credentials.number,
                        credentials.password,
                        credentials.empid,
                        credentials.location,
                        credentials.reportsto,
                        credentials.jobrole
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

export default AdminSignup;
