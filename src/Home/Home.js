import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import "../Home/Home.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Qualities from "./Qualities";
import pizza from "../Images/pizzas.jpg";
import burger from "../Images/Burger.jpg";
import delicious from "../Images/delicious.jpg";
import { useNavigate } from "react-router-dom";
import { MenuItems } from "../menu/MenuItems";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bgbackgroundfood">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-1">
            <p
              className="addrestraurant"
              onClick={() => {
                navigate("/cartitems");
              }}
            >
              <AddShoppingCartIcon /> Cart
            </p>
          </div>

          <div className="col-lg-1">
            <p
              className="addrestraurant"
              onClick={() => {
                navigate("/more");
              }}
            >
              More...
            </p>
          </div>
          <div className="col-lg-2">
            <p
              className="addrestraurant"
              onClick={() => {
                navigate("/contact");
              }}
            >
              {" "}
              <SupportAgentIcon /> Contact us
            </p>
          </div>
          <div className="col-lg-2"></div>
          {localStorage.getItem("authtoken") ? (
            <div className="col-lg-2">
              <p
                className="addrestraurant"
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                {localStorage.getItem("email")} Logout
              </p>
            </div>
          ) : (
            <div className="col-lg-2">
              <p
                className="addrestraurant"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </p>
            </div>
          )}
        </div>
        <h1 className="familyfood">Family Food's </h1>
        <h3 className="fooddescription">Find the best Food in India</h3>
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

export default Home;
