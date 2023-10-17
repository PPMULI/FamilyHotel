import React from "react";
import AdminNav from "./AdminHome/AdminNav";
import Varityfood from "./AdminHome/Varityfood";

function AdminHome() {
  return (
    <>
      <div className="bgbackgroundfood">
        <AdminNav />
        <div className="adminnav_heading">
          <h1 className="delicioud">Delicious Recipies.</h1>
          <h1 className="delicioud">Updated daily.</h1>
        </div>
      </div>
      <div className="container">
        <div className="row varityfood">
          <Varityfood />
        </div>
      </div>
    </>
  );
}

export default AdminHome;
