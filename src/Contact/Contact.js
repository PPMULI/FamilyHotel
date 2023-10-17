import React from "react";
import { useRef } from "react";

import ContatcNAv from "./ContatcNAv";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <>
      <ContatcNAv />
      <div className="bgcontact">
        <h1 className="restraurantheading">TOP HOTEL IN THE CITY</h1>
        <h3 className="hotel">Contact us</h3>
      </div>

     
      <div className="container">
        <div className="row">
          <ContactCard />
        </div>
      </div>
    </>
  );
}

export default Contact;
