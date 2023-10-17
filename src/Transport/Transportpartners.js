import React from "react";
import MSRTC from "../Images/MSRTC.png";
import KERALA from "../Images/KERALA.jpg";
import TSRTC from "../Images/TSRTC.jpg";
import HRTC from "../Images/hRTC.png";
import ASRTc from "../Images/APSRTC.jpg";
import GSRTC from "../Images/GSRTC-Logo.png";

function Transportpartners() {
  return (
    <>
      <div className="container">
        <div class="card partners">
            <div class="card">
        <h4 className="heading">Book SRTC bus tickets at Muli's Transport</h4> 
          <div className="row part_logo">
              <div className="col-lg-2">
                <img src={MSRTC} class="card-img-top RTC" alt="..." />
              </div>
              <div className="col-lg-2">
                <img src={GSRTC} class="card-img-top RTC" alt="..." />
              </div>
              <div className="col-lg-2">
                <img src={TSRTC} class="card-img-top RTC" alt="..." />
              </div>
              <div className="col-lg-2">
                <img src={KERALA} class="card-img-top RTC" alt="..." />
              </div>
              <div className="col-lg-2">
                <img src={HRTC} class="card-img-top RTC" alt="..." />
              </div> <div className="col-lg-2">
                <img src={ASRTc} class="card-img-top RTC" alt="..." />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transportpartners;
