import React from "react";
import TransportOptions from "./TransportOptions";

function Transport(props) {
  // {className} = props;
  return (
    <>
      <div className={props.className}>
        <h1 className="transporttitle">{props.title}</h1>
    <TransportOptions />
        <div className="container">
          <div class="card buscard">
            <div class="card-body">
              <form>
                <div className="row">
                  <div className="col-lg-3">
                    <div class="mb-3">
                      <input
                        type="email"
                        placeholder="Source"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div class="mb-3">
                      <input
                        type="password"
                        placeholder="Destination"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div class="mb-3">
                      <input
                        type="date"
                        placeholder="Enter Date"
                        class="form-control "
                        id="exampleInputPassword1"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <button type="submit" class="btn btn-danger transportbutton">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transport;
