import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function DummyUpdate() {
  const fetchOrderAdmin = async () => {
    const responce = await fetch("http://localhost:5000/api/orders/fetchOrderAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await responce.json();
    // setTotalOrderAdmin(json.order)
    console.log(json)
  }
  const {id} = useParams();
  useEffect(() => {
   fetchOrderAdmin()
  }, [])
  return (
    <>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default DummyUpdate;
