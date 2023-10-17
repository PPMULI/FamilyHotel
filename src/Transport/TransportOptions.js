import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


function TransportOptions() {
    const location = useLocation()
    useEffect(() => {
        console.log(location)
    }, [location])
  return (
    <>
      <div className="transportoptions">
        <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-3">
                  <button type="button" class="btn btn-light transportoptionbutton">
                    <Link to="/"> Flight </Link>
                  </button>
                </div>

                <div className="col-lg-3">
                  <button type="button" class="btn transportoptionbutton btn-light">
                    <Link to="/cart">Train</Link>
                  </button>
                </div>

                <div className="col-lg-3">
                  <button type="button" class="btn btn-light transportoptionbutton">
                    <Link to="/contact" >Contact</Link>
                  </button>
                </div>

                <div className="col-lg-3">
                  <button type="button" class="btn btn-light transportoptionbutton">
                    Hotel
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransportOptions;
