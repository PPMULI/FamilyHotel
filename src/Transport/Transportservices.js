import React from "react";
import location from "../Images/location.png";
import bus from "../Images/Bus.jpg";
import customer from "../Images/happycustomer.png";
import support from "../Images/support.jpg";

function Transportservices() {
  return (
    <>
      <div className="container">
        <div class="card">
          <div className="row"><div className="col-lg-4">

            <img src={location} class="card-img-top image" alt="..." />
            <div class="card-body">
                1000+ location
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transportservices;
