import React from "react";
import contacty from "../Images/contact.png";
import contactsales from "../Images/ContactSales.png";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactForm from "./ContactForm";
function ContactCard() {
  return (
    <>
      <div className="col-lg-2"></div>
      <div className="col-lg-9">
        <div className="row contactcard">
          <div className="col-lg-4">
            <div className="card contactsubcard">
              <div className="card-body">
                <h5 className="card-title">WE'RE HERE</h5>
                <p className="card-text">Our door is always open for you.</p>
                <div className="contact_icon">
                  <PhoneIcon /> +91 9765129019
                </div>
                <hr />
                <div className="contact_icon">
                  <EmailIcon /> pritammuli@gmail.com
                </div>
                <hr />
                <div className="contact_icon">
                  <LocationOnIcon />
                  Chhatrapati Sambhaji Nagar, MAharashtra, 431001
                </div>
                <hr />
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card contactsubcard">
              <div className="contactsupport">
                <img
                  src={contacty}
                  className="card-img-top contacts"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title contact_card_title">
                  CONTACT SUPPORT
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card contactsubcard">
              <div className="contactsupport">
                <img
                  src={contactsales}
                  className="card-img-top contacts"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title contact_card_title">CONTACT SALES</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
        <h1 className="contactform_heading">Drop a line</h1>

          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactCard;
