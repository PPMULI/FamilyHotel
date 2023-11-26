import React, { useState, useContext, useReducer } from "react";
import { MenuItems } from "./MenuItems";
import hotelcontext from "../hotelcontext/hotelContext";
import { useNavigate } from "react-router-dom";

const Cart = ({ product, onAddToCart }) => {
  const [customer, setCustomer] = useState([]);
  const [state1, setState1] = useState([]);

  const context = useContext(hotelcontext);
  const { onItemDetails, productDetails, setProductDetails } = context;
  let initialState = 1;

  const [selecteditem, setSelecteditem] = useState([]);
  const navigate = useNavigate()
  const reducer = (state, action) => {
    if (state >= 1) {
      if (action.type == "INCREAMENT") {
        localStorage.setItem("quantity1", state + 1);
        return state + 1;
      }

      if (action.type === "DECREAMENT") {
        localStorage.setItem("quantity1", state - 1);
        return state - 1;
      }
    } else if (state < 1) {
      state = state + 1;
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState, customer.price);
  const { id, name, price, food } = product;

  const num = document.getElementById("num");

  const onchange = (e) => {
    setState1(state);
  };

   return (
    <>
      
      <div className="col-lg-3">
        <div class="card items">
          <img
            src={product.food.image}
            class="card-img-top foodimage"
            alt="..."
          />
          <div class="card-body">
            <h5 className="card-title">{product.food.knownAs}</h5>
            <div className="item_details">
              <h5 class="card-title">price: 500</h5>
              <td>
                <form action="">
                  <div className="uiui">
                    <div className="wrapper">
                      <span
                        className="minus"
                        onClick={() => dispatch({ type: "DECREAMENT" })}
                      >
                        -
                      </span>
                      <span className="num" onChange={onchange} id="num">
                        {state}
                      </span>
                      <span
                        className="plus"
                        onClick={() => dispatch({ type: "INCREAMENT" })}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </form>
              </td>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <button
                  type="button"
                  class="btn btn-warning addToCart_button"
                  onClick={() => onAddToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
              <div className="col-lg-6">
                <button
                  type="button"
                  class="btn btn-warning showDetails_button"
                  onClick={() => {
                    localStorage.setItem("productId", product.food.id)
                    navigate("/itemdetails")
                  }}
                >
                  Details
                </button>

              </div>
            </div>
          </div>
        </div>

        <p>
          {selecteditem &&
            selecteditem.map((value) => {
 
              return (
                <>
                  <div class="card items">
                    <img
                      src={product.food.image}
                      class="card-img-top foodimage"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 className="card-title">{product.food.knownAs}</h5>
                      <div className="item_details">
                        <h5 class="card-title">price: 500</h5>
                        <td>
                          <form action="">
                            <div className="uiui">
                              <div className="wrapper">
                                <span
                                  className="minus"
                                  onClick={() =>
                                    dispatch({ type: "DECREAMENT" })
                                  }
                                >
                                  -
                                </span>
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
                        </td>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </p>
      </div>
    </>
  );
};

export default Cart;
