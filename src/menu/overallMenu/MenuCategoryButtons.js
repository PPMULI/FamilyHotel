import React, { useContext } from "react";
import hotelcontext from "../../hotelcontext/hotelContext";

function MenuCategoryButtons() {
  const context = useContext(hotelcontext);
  const { YourItems } = context;
  return (
    <>
      {" "}
      <div className="MenuCategoryButtons">
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
      </div>
    </>
  );
}

export default MenuCategoryButtons;
