import { green } from "@material-ui/core/colors";
import { CardElement } from "@stripe/react-stripe-js";
import React from "react";

function CardSection() {
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "green",
        fontSize: "24px",
        fontSmoothing: "antialiased",
        "::placeholder": {
          color: "blue",
       
        },
        // border: "2px solid black",
      },

      invalid: {
        color: "red",
        ":focus": {
          color: "red",
        },
      },
    },
  };
  return (
    <>
      <label htmlFor="">
        <div className="cardtitle">Fill the details</div>
        <div  className="options">
          <CardElement options={CARD_ELEMENT_OPTIONS} />
          {/* <CardElement /> */}
        </div> 
      </label>
    </>
  );
}

export default CardSection;
