import React, { useContext, useEffect, useState } from "react";
import hotelContext from "../hotelcontext/hotelContext";
import EditIcon from "@mui/icons-material/Edit";
import Navbar from "../genralcomponent/Navbar";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const context = useContext(hotelContext);
  const {
    userprofile,
    fetct_user_profile,
    getUserProfileToUpdate,
    isUserProfileCreated,
    getProfileOfAllUser,
    profileofuserbyemail,
    UpdateUserProfile,
    profileToupdate,
    checkAuthority,
  } = context;

  useEffect(() => {
    checkAuthority();
  }, []);

  const [credentials, setCredentials] = useState({
    contactnumber: "",
    fullname: "",
    address1: "",
    address2: "",
    district: "",
    pincode: "",
    state: "",
    gender: "",
  });

  const {
    contactnumber,
    fullname,
    address1,
    address2,
    district,
    pincode,
    state,
    gender,
  } = credentials;
  useEffect(() => {
    getProfileOfAllUser();
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    fetct_user_profile(localStorage.getItem("email"));
  }, []);

  const checkProfile = () => {
    if (isUserProfileCreated.length == 0) {
      navigate("/createprofile");
    }
  };

  // useEffect(() => {
  //   checkProfile()
  // }, [])
  const onChange = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar />
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Update Your Profile
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Full NAme
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="fullname"
                    onChange={onChange}
                    name="fullname"
                    placeholder="Enter Update Name"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="row">
                  <div className="col-lg-4">
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Address1
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        onChange={onChange}
                        placeholder="Enter Updated address line 1"
                        id="address1"
                        name="address1"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Address 2
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        onChange={onChange}
                        placeholder="Enter Updated Address line 2"
                        id="address2"
                        name="address2"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        District
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        onChange={onChange}
                        placeholder="Enter Updated District"
                        id="district"
                        name="district"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Pincode
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        onChange={onChange}
                        placeholder="Enter Updated Pincode"
                        id="pincode"
                        name="pincode"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        onChange={onChange}
                        placeholder="Enter Updated State"
                        id="state"
                        name="state"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  class="btn btn-success w-100"
                  onClick={(e) => {
                    e.preventDefault();
                    UpdateUserProfile(
                      localStorage.getItem("profileID"),
                      credentials.fullname,
                      credentials.address1,
                      credentials.address2,
                      credentials.state,
                      credentials.district,
                      credentials.pincode
                    );
                  }}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1 className="your_profile_heading">Your Profile</h1>
          <button
            className="btn btn-warning"
            onClick={() => {
              fetct_user_profile(localStorage.getItem("email"));
              checkProfile();
            }}
          >
            Get Your Profile
          </button>
          <div className="col-lg-1"></div>
          <div className="col-lg-10 profile_data">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                {profileofuserbyemail &&
                  profileofuserbyemail.map((value) => {
                    return (
                      <>
                        <div class="card info">
                          <div class="card-body">
                            <div className="resume">
                              <div className="row">
                                <p>
                                  <EditIcon
                                    className="editicon"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => {
                                      localStorage.setItem(
                                        "profileID",
                                        value.id
                                      );
                                    }}
                                  />
                                </p>
                                <div className="col-lg-4">
                                  <h5 className="name">{value.fullname}</h5>
                                </div>
                                <div className="col-lg-4"></div>
                                <div className="col-lg-4">
                                  <p className="email">{value.email}</p>
                                  <p> {value.contactnumber} </p>{" "}
                                  <p>{value.district}</p>
                                </div>
                              </div>
                            </div>

                            <hr />

                            <div className="row">
                              <div className="col-lg-3">
                                <h6>Personal Info</h6>
                              </div>

                              <div className="col-lg-1"></div>
                              <div className="col-lg-8">
                                <div className="row">
                                  <ul>
                                    <li>
                                      <b>Full Name:</b> {value.fullname}
                                    </li>
                                    <li>
                                      <b>Gender:</b> {value.gender}
                                    </li>

                                    <li>
                                      <b>Address:</b> {value.address1},{" "}
                                      {value.address2}
                                    </li>
                                    <li>
                                      District: {value.district}, {value.state},{" "}
                                      {value.pincode}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <hr />
                            <div className="row">
                              <div className="col-lg-3">
                                <h6>Admin Status</h6>
                              </div>

                              <div className="col-lg-1"></div>
                              <div className="col-lg-8">
                                <div className="row">
                                  <div className="col-lg-4">
                                    applyasadmin: {value.applyasadmin}
                                  </div>

                                  <div className="col-lg-4">
                                    isAdmin: {value.isAdmin}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr />
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
