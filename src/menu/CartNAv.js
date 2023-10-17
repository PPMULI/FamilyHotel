import React, { useState } from "react";
import { MenuItems } from "./MenuItems";

function CartNAv() {
  const [selecteditem, setSelecteditem] = useState([]);
  const cake = () => {
    const items = MenuItems.filter((num) => {
      // console.log(num.food.category)
      return num.food.category == "soup";
    });

    setSelecteditem(items);
    console.log(items);

    // document.getElementById("cake" ).innerHTML = JSON.stringify(select)
    return items;
  };

  return (
    <>
      <div class="card">
        <div class="card-body cartnav">
          <button
            type="button"
            class="btn btn-light filterbutton"
            onClick={cake}
          >
            Cake
          </button>
          <button type="button" class="btn btn-light filterbutton">
            Soup
          </button>
          <button type="button" class="btn btn-light filterbutton">
            Indian veg
          </button>
          <button type="button" class="btn btn-light filterbutton">
            Chinese
          </button>
        </div>
      </div>

      <p id="cake">
        {selecteditem &&
          selecteditem.map((value) => {
            console.log(value);

            return (
              <>
                <div class="card">
                  <img src={value.food.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{value.food.knownAs}</h5>
                  </div>
                </div>
              </>
            );
          })}
      </p>
    </>
  );
}

export default CartNAv;
