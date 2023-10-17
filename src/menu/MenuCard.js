import React, { useEffect } from "react";
import { useState } from "react";
import { MenuItems } from "./MenuItems";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import Sidebar from "../Home2/Sidebar";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';

import hotelcontext from "../hotelcontext/hotelContext";

function MenuCard() {
  const [det, setDet] = useState();

  const context = useContext(hotelcontext);
  const {
    checkAuthority,
    YourItems,
    selecteditem,
    setSelecteditem,
    itemsDetails,
  } = context;

  useEffect(() => {
    checkAuthority();
  }, []);

  const [items, setItem] = useState([]);
  const [product, setProduct] = useState({
    email: "",
    productname: "",
    quantity: "",
    price: "500",
    payment: "COD",
    productId: "",
    foodID: "",
    imageurl: "",
  });

  const handleCart = async (e) => {
     const {
      email,
      productname,
      quantity,
      price,
      payment,
      productId,
      foodID,
      imageurl,
    } = product;
    let orderquantity = 1;
    if (localStorage.getItem("quantity1")) {
        orderquantity = localStorage.getItem("quantity1");
     }
    const responce = await fetch("http://localhost:5000/api/cart/cartitems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        productname: localStorage.getItem("foodname"),
        // quantity: localStorage.getItem("quantity1"),
        quantity: orderquantity,
        price: product.price,
        payment: product.payment,
        imageurl: localStorage.getItem("productImage"),
        productId: localStorage.getItem("productID"),
        foodID: localStorage.getItem("foodid"),
      }),
    });

    const json = await responce.json();
    if (!json.success) {
      alert(
        toast.error("Item is present in the cart", {
          position: "top-center",
          theme: "colored",
        })
      );
    }

    if (json.success) {
      localStorage.removeItem("foodID");
      localStorage.removeItem("productID");
      localStorage.removeItem("foodname");
      localStorage.removeItem("foodid");
      localStorage.removeItem("productID");
      localStorage.removeItem("quantity1");
      localStorage.removeItem("productImage");
      alert(
        toast.success("Item is successfully added", {
          position: "top-center",
          theme: "colored",
        })
      );
    }
  };

  const [dish, setDish] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [detaiItem, setDetailItem] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setDetailItem([product]);
    data.push({ product });

    localStorage.setItem("productImage", product.food.image);
    localStorage.setItem("productID", product.food.id);
    localStorage.setItem("foodID", product.food.foodId);
    localStorage.setItem("foodname", product.food.knownAs);
    localStorage.setItem("foodid", product.food.foodId);
    localStorage.setItem("orderfood", JSON.stringify(data));
    handleCart();
  };

  const showDetails = (product) => {
    setDetailItem([product]);
  };

  const navigate = useNavigate();

  localStorage.setItem("items", JSON.stringify(dish));

  const [data, myData] = useState([]);
  return (
    <>
      {/* <TransportNav /> */}
      <Sidebar />
      <div class="card">
        <div class="card-body cartnav">
          <button
            type="button"
            class="btn btn-light filterbutton"
            onClick={() => YourItems("Generic foods")}
          >
            Generic-food
          </button>
          <button
            type="button"
            class="btn btn-light filterbutton"
            onClick={() => YourItems("soup")}
          >
            Cake
          </button>
          <button
            type="button"
            onClick={() => YourItems("soup")}
            class="btn btn-light filterbutton"
          >
            Soup
          </button>
          <button
            type="button"
            onClick={() => YourItems("indian")}
            class="btn btn-light filterbutton"
          >
            Indian veg
          </button>
          <button
            type="button"
            onClick={() => YourItems("chinese")}
            class="btn btn-light filterbutton"
          >
            Chinese
          </button>
        </div>
      </div>

      <div>
        <h1 className="menu">{localStorage.getItem("category")}</h1>
        <div className="container">
          <div className="menuitems">
            <div className="row">
              {selecteditem.map((product) => (
                <Cart
                  key={product.food.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onItemDetails={itemsDetails}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuCard;
