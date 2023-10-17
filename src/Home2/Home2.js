import React from "react";
import { useNavigate } from "react-router-dom";
import HomeNav2 from "./HomeNav2";
import Qualities from "../Home/Qualities";
import pizza from "../Images/pizzas.jpg"
import delicious from "../Images/delicious.jpg"
import burger from "../Images/Burger.jpg"

function Home2() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bgrestraurant">
        <HomeNav2 />
        <div className="paragraph">welcome To Family Restraurant</div>

        <div className="container">
          <h1 className="restraurant_tag_line">Eat Healty and Natural Food</h1>

          <p className="description">
            Family is a restraurant, tea-point and coffee roastory located in
            Sambhaji Nagar.
          </p>
          <p className="description2">
            We have awasome recipes and most talented chef in City
          </p>
        </div>
        <div className="menubutton">
          <button
            type="button"
            id="menu"
            onClick={() => {
              navigate("/menucard");
            }}
            className="btn-outline-light dummy_menubutton"
          >
            Menu
          </button>

          <button
            type="button"
            className="btn btn-outline-light dummy_menubutton"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      <h3 className="qualityheading">Our most popular deals</h3>
      <div className="container cardrow">
        <div className="row ">
          <div className="col-lg-4">
            <Qualities image={pizza} title="Delicious Pizza" />
          </div>

          <div className="col-lg-4">
            <Qualities image={delicious} title="Delicious food" />
          </div>

          <div className="col-lg-4">
            <Qualities image={burger} title="burger" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home2;
