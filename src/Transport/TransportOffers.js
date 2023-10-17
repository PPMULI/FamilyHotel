import React from "react";
import offers1 from "../Images/offer1.jpg";
import offers2 from "../Images/offer2.png";
import offers3 from "../Images/offer3.png";

function TransportOffers() {
  return (
    <>
      <div className="offers">
        <div className="container">
          <div class="card">
            <h3 className="offer_heading">Muli's Transport</h3>
            <div className="row offerrow">
              <div className="col-lg-4">
                <div class="card">
                  <img
                    src={offers1}
                    class="card-img-top offerimage"
                    alt="..."
                  />{" "}
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <img
                    src={offers2}
                    class="card-img-top offerimage"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <img
                    src={offers3}
                    class="card-img-top offerimage"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransportOffers;
