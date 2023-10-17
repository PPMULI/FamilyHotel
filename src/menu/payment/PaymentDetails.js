import React from "react";
import ContactForm from "../../Contact/ContactForm";

function PaymentDetails() {
  return (
    <>
      <h4>Your Information: </h4>
      <div className="container">
        <div className="row">
            <ContactForm />
        </div>
      </div>
      
    </>
  );
}

export default PaymentDetails;
