import React, { useContext, useEffect } from "react";
import Navbar from "../genralcomponent/Navbar";
import hotelcontext from "../hotelcontext/hotelContext";

function UserList() {
  const context = useContext(hotelcontext);
  const { getProfileOfAllUser, userprofile } = context;

  useEffect(() => {
    getProfileOfAllUser();
  }, []);
   return (
    <>
      <Navbar />
      <h1 className="userlist">User List</h1>

      <div className="container">
        <div className="row">
          {userprofile &&
            userprofile.map((value) => {
               return (
                <>
                <div className="col-lg-3"></div>
                <div className="col-lg-6">

                  <div class="card user_list_card">
                    <div class="card-body">
                      This is some text within a card body.
                    </div>
                  </div>
                </div>

                <div className="col-lg-3"></div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default UserList;
