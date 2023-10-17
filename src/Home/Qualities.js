import React from "react";

function Qualities(props) {
  return (
    <>
      {/* <div className="col-lg-6"> */}
      <div className="foodcard">

        <div class="card" id="foodcard">
          <img src={props.image} id="foodimage" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title" id="foodtitle">{props.title} </h5>
            <p class="card-text"></p>
            <a href="#" class="btn btn-dark" id="orderfood">
              Order 
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Qualities;
