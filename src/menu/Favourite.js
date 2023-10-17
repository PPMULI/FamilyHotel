import React, { useEffect } from "react";
import Sidebar from "../Home2/Sidebar";
import { useContext } from "react";
import hotelcontext from "../hotelcontext/hotelContext";

function Favourite() {
  const context = useContext(hotelcontext);
  const {
    favouriteItem,
    setFavouriteItem,
    removeFavouriteItem,
    checkAuthority,
    fetchFavouriteItems,
  } = context;

  console.log(favouriteItem);

  useEffect(() => {
    checkAuthority()
    fetchFavouriteItems();
  }, []);
  return (
    <>
      <Sidebar />
      <div className="container cartitem">
        <h1 className="shoppingcart_heading">Favourite Items</h1>
        <div className="row">
          {/* <div className="col-lg-12"> */}
          <div class="card order_table favoritetable">
            <div class="card-body">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">Product_id</th>
                    <th scope="col">Dish Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                     <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {favouriteItem &&
                    favouriteItem.map((value) => {
                      return (
                        <>
                          <tr>
                            <td className="text-center">{value.productId}</td>
                            <td className="text-center">{value.productname}</td>
                            <td>
                              <img
                                src={value.imageurl}
                                className="productimage"
                                id="favouriteImage"
                              />
                            </td>

                            <td className="text-center">{value.price}</td>

                            <td>
                              <button
                                type="button"
                                class="btn btn-danger"
                                onClick={() => removeFavouriteItem(value._id)}
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

        {/* </div> */}
      </div>
    </>
  );
}

export default Favourite;
