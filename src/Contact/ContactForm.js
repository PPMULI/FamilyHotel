import React, { useEffect, useState } from "react";
import { useContext } from "react";
import hotelcontext from "../hotelcontext/hotelContext";

function ContactForm() {
  let context = useContext(hotelcontext);
  const { handleContactForm, checkAuthority } = context;

  const [credentials, setCredentials] = useState({
    actionby: "",
    concern: "",
    contactnumber: "",
    email: localStorage.getItem("email"),
    fullname: "",
    reasonofissue: "",
    solution: "",
    status: "pending",
    subject: "",
  });

  const {
    actionby,
    concern,
    contactnumber,
    email,
    fullname,
    reasonofissue,
    solution,
    status,
    subject,
  } = credentials;
  console.log(credentials);

 
  const onChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="col-lg-3"></div>
      <div className="col-lg-6">
        <form id="form">
          <div className="row">
            <div className="col-lg-6">
              <div class="mb-3">
                <div className="label">
                  <label for="exampleFormControlInput1" class="form-label">
                    Full Name
                  </label>
                </div>
                <input
                  type="text"
                  class="form-control form"
                  id="fullname"
                  onChange={onChange}
                  name="fullname"
                  placeholder="Enter the Full name"
                  aria-describedby="emailHelp"
                />
                <hr />
                <small></small>
              </div>
            </div>

            <div className="col-lg-6">
              <div class="mb-3">
                <div className="label">
                  <label for="exampleFormControlInput1" class="form-label">
                    Contact Number
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Enter the Contact Number"
                  onChange={onChange}
                  class="form-control form"
                  id="contactnumber"
                  name="contactnumber"
                />
                <hr />
                <small></small>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div class="mb-3">
                <div className="label">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email
                  </label>
                </div>

                <input
                  type="email"
                  onChange={onChange}
                  value={localStorage.getItem("email")}
                  disabled
                  placeholder="Enter the email"
                  class="form-control form"
                  id="email"
                  name="email"
                />
                <hr />
                <small></small>
              </div>
            </div>
            <div className="col-lg-6">
              <div class="mb-3">
                <div className="label">
                  <label for="exampleFormControlInput1" class="form-label">
                    Subject
                  </label>
                </div>
                <input
                  type="text"
                  onChange={onChange}
                  minLength={10}
                  maxLength={20}
                  class="form-control form"
                  id="subject"
                  name="subject"
                  placeholder="Enter the Subject"
                  aria-describedby="emailHelp"
                />
                <hr />
                <small></small>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div className="label">
              <label for="exampleFormControlInput1" class="form-label">
                leave a messgae
              </label>
            </div>
            <textarea
              class="form-control form"
              placeholder="Enter your Concern"
              id="concern"
              onChange={onChange}
              name="concern"
              maxLength={30}
              minLength={10}
              rows="3"
            ></textarea>
            <hr />
            <small></small>
          </div>
          <div className="form_button">
            <button
              type="submit"
              class="btn btn-primary formbutton"
              onClick={(e) => {
                e.preventDefault()
                handleContactForm(

                  credentials.email,
                  credentials.actionby,
                  credentials.concern,
                  credentials.contactnumber,
                  credentials.fullname,
                  credentials.reasonofissue,
                  credentials.solution,
                  credentials.status,
                  credentials.subject
                  )
              }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
