import React from "react";
import error from "./Images/Error404.gif";
import { useNavigate } from "react-router-dom";

function Errorpage() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <img src={error} className="errorgif" alt="" />
      </div>
      <button type="button" onClick={() => {navigate("/")}} className="errorbutton btn btn-outline-primary">
        Home
      </button>
    </>
  );
}

export default Errorpage;
