import React, { useEffect, useState } from "react";
import { useContext } from "react";
import hotelcontext from "../hotelcontext/hotelContext";

function ContactForm() {
  let context = useContext(hotelcontext);
  const { handleContactForm, checkAuthority } = context;

  useEffect(() => {
    checkAuthority()    
  })
  const [credentials, setCredentials] = useState({
    email: localStorage.getItem("email"),
    name: "",
    number: "",
    subject: "",
    message: "",
    status: "pending"
  });
  const handleClick = (e) => {
    e.preventDefault();
    const email1 = document.getElementById("email");
    const name1 = document.getElementById("name");
    const subject1 = document.getElementById("subject");
    const message1 = document.getElementById("message");
    const contactform = document.getElementById("number");

    // success function
    function showSuccess(input, message) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
      const small = formControl.querySelector("small");
      // small.innerText = message;
      small.classList.add("succText");
    }

    // error function
    function showError(input, message) {
      const formControl = input.parentElement;

      formControl.className = "form-control error";
      const small = formControl.querySelector("small");
      small.innerText = message;

      small.classList.add("errText");
    }

    // get input field name
    function getFieldName(input) {
      return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    let success = 0;
    let error = 0;
    function checkLength(input) {
      if (input.value.length == 0) {
        error = 1;
        showError(input, `${getFieldName(input)} shoud not be null`);
      } else {
        success = 1;
        showSuccess(input, "correct");
      }
    }

    // // function call
    checkLength(email1);
    checkLength(message1);
    checkLength(subject1);
    checkLength(contactform);
    checkLength(name1);
  };

  const { email, name, message, subject, number, status } = credentials;
  console.log(credentials);
  const onChange = (e) => {
    e.preventDefault();
    console.log(e.target.value)
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
                  id="name"
                  onChange={onChange}
                  name="name"
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
                  id="number"
                  name="number"
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
              id="message"
              onChange={onChange}
              name="message"
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
              onClick={() => {
                handleContactForm(
                  credentials.email,
                  credentials.name,
                  credentials.number,
                  credentials.subject,
                  credentials.message,
                  credentials.status
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
