import React from "react";
import Burger from "../Images/Burger.jpg";

function DummyTransport() {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="row">
              <div className="col-lg-4">
                <div class="card">
                  {/* <img src={Burger} class="d-block w-100" alt="..." /> */}
                  <img
                    src={Burger}
                    class="card-img-top cardimg"
                    alt="..."
                  />{" "}
                </div>
              </div>

              <div className="col-lg-4">
                <div class="card">
                  {/* <img src={Burger} class="d-block w-100" alt="..." /> */}
                  <img
                    src={Burger}
                    class="card-img-top cardimg"
                    alt="..."
                  />{" "}
                </div>
              </div>

              <div className="col-lg-4">
                <div class="card">
                  {/* <img src={Burger} class="d-block w-100" alt="..." /> */}
                  <img
                    src={Burger}
                    class="card-img-top cardimg"
                    alt="..."
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <div className="row">
              <div className="col-lg-4">
                <div class="card">
                  {/* <img src={Burger} class="d-block w-100" alt="..." /> */}
                  <img
                    src={Burger}
                    class="card-img-top cardimg"
                    alt="..."
                  />{" "}
                </div>
              </div>

              <div className="col-lg-4">
                <div class="card">
                  {/* <img src={Burger} class="d-block w-100" alt="..." /> */}
                  <img
                    src={Burger}
                    class="card-img-top cardimg"
                    alt="..."
                  />{" "}
                </div>
              </div>

              <div className="col-lg-4">
                <div class="card">
                  {/* <img src={Burger} class="d-block w-100" alt="..." /> */}
                  <img
                    src={Burger}
                    class="card-img-top cardimg"
                    alt="..."
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card">
              <img src={Burger} class="card-img-top cardimg" alt="..." />{" "}
            </div>
            {/* <img src={Burger} class="d-block w-100" alt="..." /> */}
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default DummyTransport;
