import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../src/genralcomponent/Navbar";
import hotelcontext from "../hotelcontext/hotelContext";

function Profile() {
  const [credentials, setCredentials] = useState({
    email: localStorage.getItem("email"),
    fullname: "",
    gender: "male",
    contactnumber: "",
    isAdmin: false,
    address1: "",
    address2: "",
    district: "",
    state: "",
    pincode: "",
    applyasadmin: "no",
  });

  const context = useContext(hotelcontext);
  const { manage_profile, checkAuthority } = context;
  
  useEffect(() => {
    checkAuthority()
  }, [])
  const {
    email,
    fullname,
    gender,
    contactnumber,
    isAdmin,
    address1,
    address2,
    district,
    state,
    pincode,
    applyasadmin,
  } = credentials;

   const onChange = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar />
      <div className="totalmenu">
        <h1 className="complete_Your_profile">Complete Your Profile</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <form className="profile_form">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    value={localStorage.getItem("email")}
                    disabled
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    onChange={onChange}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Enter full name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={onChange}
                    id="fullname"
                    name="fullname"
                  />
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <label for="exampleInputPassword1" class="form-label">
                      Gender
                    </label>
                    <select
                      onChange={onChange}
                      name="gender"
                      id="gender"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="male" selected>
                        Male
                      </option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="col-lg-6">
                    <label for="exampleInputPassword1" class="form-label">
                      is Applying As admin?
                    </label>
                    <select
                      onChange={onChange}
                      name="applyasadmin"
                      id="applyasadmin"
                      required
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="no" selected>
                        No
                      </option>
                      <option value="yes">YES</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="contactnumber"
                      onChange={onChange}
                      id="contactnumber"
                    />
                  </div>
                </div>

                <div className="horiontal"></div>

                <h4>Address Details</h4>

                <div className="row">
                  <div className="col-lg-6">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Address Line-1
                      </label>
                      <textarea
                        class="form-control"
                        onChange={onChange}
                        name="address1"
                        id="address1"
                        placeholder="first line"
                        rows="2"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Address Line-2
                      </label>
                      <textarea
                        class="form-control"
                        id="address2"
                        onChange={onChange}
                        placeholder="Second line"
                        name="address2"
                        rows="2"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        District
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="district"
                        name="district"
                        onChange={onChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="state"
                        name="state"
                        onChange={onChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Pincode
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="pincode"
                        name="pincode"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-secondary profile_button"
                  applyasadmin
                  onClick={(e) => {
                    e.preventDefault();
                    manage_profile(
                      credentials.email,
                      credentials.fullname,
                      credentials.gender,
                      credentials.contactnumber,
                      credentials.isAdmin,
                      credentials.address1,
                      credentials.address2,
                      credentials.district,
                      credentials.state,
                      credentials.pincode,
                      credentials.applyasadmin
                    );
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Profile;
