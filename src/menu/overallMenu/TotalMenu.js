import React, { useContext, useState } from "react";
import { MenuItems } from "../MenuItems";
import hotelcontext from "../../hotelcontext/hotelContext";
import shopIcon, { Email } from "@mui/icons-material";
import MenuCategoryButtons from "./MenuCategoryButtons";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShopIcon from "@mui/icons-material/Shop";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../genralcomponent/Navbar";
import Footer from "../../genralcomponent/Footer";

function TotalMenu() {
  const context = useContext(hotelcontext);
  const { reducer, handleSubmit, Buy_the_product } = context;

  const [credentials, setCredentials] = useState({
    reasonofrejection: "",
    actionby: "",
  });

  const { reasonofrejection, actionby } = credentials;
  let initialState = 1;
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="totalmenu">
        <MenuCategoryButtons />
        <div className="menu_items">
          <div className="container">
            <div className="menuitems">
              <div className="row">
                {MenuItems &&
                  MenuItems.map((value) => {
                    return (
                      <>
                        <div className="col-lg-4">
                          <div class="card menucard">
                            <img
                              src={value.food.image}
                              class="card-img-top productimage"
                              alt="..."
                              onClick={(e) => {
                                e.preventDefault();
                                localStorage.setItem("dishid", value.food.id);
                                navigate("/dishdetails");
                              }}
                            />
                            <div class="card-body">
                              <h4 class="food_category">
                                {value.food.knownAs}
                              </h4>
                              <form action="">
                                <div className="uiui">
                                  <div className="wrapper">
                                    {state == 1 ? (
                                      <span
                                        className="minus d-none"
                                        onClick={() =>
                                          dispatch({ type: "DECREAMENT" })
                                        }
                                      >
                                        -
                                      </span>
                                    ) : (
                                      <span
                                        className="minus"
                                        onClick={() =>
                                          dispatch({ type: "DECREAMENT" })
                                        }
                                      >
                                        -
                                      </span>
                                    )}

                                    <span
                                      className="num"
                                      onChange={onchange}
                                      id="num"
                                    >
                                      {state}
                                    </span>
                                    <span
                                      className="plus"
                                      onClick={() =>
                                        dispatch({ type: "INCREAMENT" })
                                      }
                                    >
                                      +
                                    </span>
                                  </div>
                                </div>
                              </form>

                              <div className="row">
                                <div className="col-lg-12">
                                  <button
                                    type="button"
                                    class="btn btn-outline-success shopping_icons"
                                    onClick={() => {
                                      Buy_the_product(
                                        localStorage.getItem("email"),
                                        value.food.knownAs,
                                        value.food.category,
                                        value.food.id,
                                        state,
                                        "pending",
                                        value.food.discountedprice,
                                        credentials.reasonofrejection,
                                        credentials.actionby
                                      );
                                    }}
                                  >
                                    <ShopIcon /> Buy now
                                  </button>
                                </div>
                                <div className="col-lg-12">
                                  <button
                                    type="button"
                                    class="btn btn-outline-warning shopping_icons"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleSubmit(
                                        localStorage.getItem("email"),
                                        value.food.knownAs,
                                        value.food.category,
                                        value.food.id,
                                        state,
                                        "500"
                                      );
                                    }}
                                  >
                                    <AddShoppingCartIcon /> Add To Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TotalMenu;
