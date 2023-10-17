// import { CheckCircleIcon } from "@chakra-ui/icons";
import React, { useState, useContext, useEffect } from "react";
import hotelcontext from "../hotelcontext/hotelContext";
import successGif from "../Images/success.gif";
import { useNavigate } from "react-router-dom";

function PaymentConfiramtion() {
  const context = useContext(hotelcontext);
  const { fetchDetails, customer, setCustomer } = context;
  const [items, setItems] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    fetchDetails();
  }, []);

  // ['Apple', 'Orange', 'Mango', 'Cherry']
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div class="card paymentconfiramtion">
              <div class="card-body paymentconfiramtionheading">
                {/* <CheckCircleIcon />  */}
                Your order is booked
              </div>
              <div className="confirmation">
                {" "}
                <img
                  src={successGif}
                  className="confirmation successgif"
                  alt=""
                />{" "}
              </div>
              <div className="card-body paymentconfiramtiondetails">
                <h5> Your Order Details: </h5>
                email: {localStorage.getItem("email")}
                <div className="row">
                  <table class="table table-hovered table-bordered table-responsive table-striped">
                    <thead>
                      <tr>
                        <th scope="col" className="text-center">
                          Product_id
                        </th>
                        <th scope="col" className="text-center">
                          Product_Name
                        </th>
                        <th scope="col" className="text-center">
                          quantity
                        </th>
                        <th scope="col" className="text-center">
                          status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {customer &&
                        customer.map((value) => {
                          return (
                            <>
                              <tr>
                                <td scope="row" className="text-center">
                                  {value.productId}
                                </td>
                                <td className="text-center">
                                  {value.productname}
                                </td>
                                <td className="text-center">
                                  {value.quantity}
                                </td>
                                <td className="text-center">Pending</td>
                              </tr>
                            </>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>

              <button>Home</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentConfiramtion;
