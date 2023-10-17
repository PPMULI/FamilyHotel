import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useContext,
} from "react";
import TransportNav from "../Transport/TransportNav";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Qualities from "../Home/Qualities";
import CartNAv from "./CartNAv";
 import { useNavigate } from "react-router-dom";
import hotelcontext from "../hotelcontext/hotelContext";
import HomeNav2 from "../Home2/HomeNav2";
import Sidebar from "../Home2/Sidebar";

const initialState = 1;

function CartItems() {
  const context = useContext(hotelcontext);
  const {
    fetchDetails,
    orderManager,
    checkAuthority,
    customer,
    setCustomer,
    removeItem,
    total_Ammount,
  } = context;
  const [credentials, setCredentials] = useState({
    email: "",
  });

  const navigate = useNavigate();

  const reducer = (state, action) => {
    if (state >= 1) {
      if (action.type == "INCREAMENT") {
        return state + 1;
      }

      if (action.type === "DECREAMENT") {
        return state - 1;
      }
    } else if (state < 1) {
      state = state + 1;
      return state;
    }
  };
  // const [customer, setCustomer] = useState([]);
  const [editStatus, setEditStatus] = useState({ status: "pending" });
  const [state, dispatch] = useReducer(reducer, initialState, customer.price);
  const remove = document.getElementById("remove");
  const quantity = document.getElementById("quantity");
  const { email } = credentials;

  useEffect(() => {
    checkAuthority()
    fetchDetails();
  }, []);

  let tot = [];

  const onchange = (e) => {
    e.preventDefault();
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  

  return (
    <>
      <Sidebar />
      <div className="container cartitem">
        <h1 className="shoppingcart_heading">Shopping Cart</h1>
        <div className="row">
          <div className="col-lg-8">
            <div class="card order_table">
              <div class="card-body">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Product_id</th>
                      <th scope="col">Dish Name</th>
                      <th scope="col">Image</th>
                      <th scope="col">quantity</th>
                      <th scope="col">Price</th>
                      <th scope="total_price">Total_Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {customer &&
                      customer.map((value) => {
                        return (
                          <>
                            <tr>
                              <td className="text-center">{value.productId}</td>
                              <td className="text-center">
                                {value.productname}
                              </td>
                              <td>
                                <img
                                  src={value.imageurl}
                                  className="productimage"
                                />
                              </td>

                              <td className="text-center">{value.quantity}</td>
                              <td className="text-center">{value.price}</td>

                              <td className="text-center">
                                {value.price * value.quantity}
                              </td>
                              <td>
                                <button
                                  type="button"
                                  class="btn btn-danger"
                                  onClick={() => removeItem(value._id)}
                                >
                                  Remove
                                </button>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-7"></div> */}
          <div className="col-lg-4">
            <div class="card orderdetails">
              <div class="card-body ordersummary">ORDER SUMMARY</div>
              <div className="horizontal">
                <hr />
              </div>
              <div>
                <table class="table">
                  {customer &&
                    customer.map((value) => {
                      return (
                        <>
                          <tbody>
                            <tr>
                              <td>{value.productname}</td>
                              <td>{value.quantity}</td>
                              <td> {value.price * value.quantity}</td>
                            </tr>
                          </tbody>
                        </>
                      );
                    })}
                </table>
                {total_Ammount()}
                <div className="total">
                  Total: {localStorage.getItem("total_ammount")}
                  <button
                    type="button"
                    class="btn btn-success total_btn"
                    onClick={orderManager}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItems;
