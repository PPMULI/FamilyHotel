import React, { useRef, useState } from "react";
import HotelContext from "./hotelContext";
import { ToastContainer, toast } from "react-toastify";
import { MenuItems } from "../menu/MenuItems";
import { getAuth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseFiles/Config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseFiles/Config";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";

function HotelState(props) {
  const navigate = useNavigate();
  const [YourOrder, setYourOrder] = useState([]);
  const [dishdetails, setshowDishDetails] = useState([]);
  const [isUserProfileCreated, setIsUserProfileCreated] = useState([]);
  const [yourRaisedTicket, setYourRaisedTicket] = useState([]);
  const [classifyYourOrderByStatus, setClassifyYourOrderByStatus] = useState(
    []
  );
  const [userprofile, setUserProfile] = useState([]);
  const [profileofuserbyemail, setProfileofuserbyemail] = useState([]);
  const [selecteditem, setSelecteditem] = useState([]);
  const [dishesInCart, setDishesInCart] = useState([]);
  const [fetchRaisedTicketByUser, setFetchRaisedTicketByUser] = useState([]);
  const [cartdishesbyuserDetails, setCartdishesbyuserDetails] = useState([]);
  const [yourOrderByUserdetails, setyourOrderByUserdetails] = useState([]);
  const [
    categoriestheRaisedTicketByStatus,
    setcategoriestheRaisedTicketByStatus,
  ] = useState([]);
  const handleSignup = (auth, email, password) => {
    if (email == "" || password == "") {
      toast.error(`All fields are important`, {
        position: "top-center",
        theme: "colored",
      });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          toast.success("Congratulations! You are signup successfully.", {
            position: "top-center",
            theme: "colored",
          });
          navigate("/login");
        })
        .catch((error) => {
          toast.error("User Exist", {
            position: "top-center",
            theme: "colored",
          });
          navigate("/login");
        });
    }
  };

  const handleLogin = async (email, password) => {
    const auth = getAuth();
    if (email == "" || password == "") {
      toast.error(`All fields are important`, {
        position: "top-center",
        theme: "colored",
      });
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        // Login successful
        toast.success("Congratulations! You are logged-in", {
          position: "top-center",
          theme: "colored",
        });
        localStorage.setItem("accesstoken", auth.currentUser.accessToken);
        localStorage.setItem("email", auth.currentUser.email);

        navigate("/");
      } catch (error) {
        console.log(error);
        alert(
          toast.error("Invalid Credentials!", {
            position: "top-center",
            theme: "colored",
          })
        );
        console.error("Error signing in:", error);
        // Handle login error, display an error message, etc.
      }
    }
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Your session is log-out", {
          position: "top-center",
          theme: "colored",
        });
        localStorage.clear();
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const YourItems = (category) => {
    navigate("/menucard");
    const items = MenuItems.filter((num) => {
      return num.food.category == category;
    });

    setSelecteditem(items);

    localStorage.setItem("category", category.toUpperCase());
    return items;
  };

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

  // function to add to cart
  const AddToCartCollectionRef = collection(db, "cart");

  const addData = (addToCart) => {
    return addDoc(AddToCartCollectionRef, addToCart);
  };
  const handleSubmit = async (
    email,
    dishname,
    dishcategory,
    dishid,
    quantity,
    price
  ) => {
    handle_Actions();
    if (entry == 0) {
      toast.error("Please login first", {
        position: "top-center",
        theme: "colored",
      });
      const myTimeOut = setTimeout(timeout, 1000);
    } else {
      const AddToCartNewDish = {
        email,
        dishname,
        dishcategory,
        dishid,
        quantity,
        price,
      };

      try {
        await addData(AddToCartNewDish);
        toast.success(`Your Product ${dishname} is added into cart`, {
          position: "top-center",
          theme: "colored",
        });
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  // function for fetchDishes
  const getAllDishesInCart = () => {
    return getDocs(AddToCartCollectionRef);
  };

  const getDishInCart = async () => {
    const data = await getAllDishesInCart();
    setDishesInCart(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  // fetch dishes in cart by user details
  const dishesInCart_by_user_details = async (email) => {
    const items = dishesInCart.filter((cartdishes) => {
      return cartdishes.email == email;
    });

    setCartdishesbyuserDetails(items);
    return items;
  };

  const deleteProductIn_Cart = (id, dishname) => {
    const productDoc = doc(db, "cart", id);
    if (productDoc) {
      toast.success(`Your Product ${dishname} is removed from cart`, {
        position: "top-center",
        theme: "colored",
      });
    }
    return deleteDoc(productDoc);
  };

  const deleteDishesInCart = async (id) => {
    await deleteProductIn_Cart(id);
    getDishInCart();
  };
  // product details
  const product_details = async (productID) => {
    const items = MenuItems.filter((products) => {
      return products.food.id == productID;
    });

    setshowDishDetails(items);
    return items;
  };

  let entry = 0;
  const timeout = () => {};
  const handle_Actions = () => {
    if (localStorage.getItem("email")) {
      entry = 1;
    } else {
      entry = 0;
    }
  };
  // Buy the product
  const orderCollectionRef = collection(db, "orders");

  const addOrdered_Product = (neworder) => {
    return addDoc(orderCollectionRef, neworder);
  };
  const Buy_the_product = async (
    email,
    dishname,
    dishcategory,
    dishid,
    quantity,
    status,
    price,
    reasonofrejection,
    actionby
  ) => {
    handle_Actions();
    if (entry == 0) {
      toast.error("Please login first", {
        position: "top-center",
        theme: "colored",
      });
      const myTimeOut = setTimeout(timeout, 1000);
    } else {
      let orderOn = new Date();
      const newbook = {
        email,
        dishname,
        dishcategory,
        dishid,
        quantity,
        status,
        orderOn,
        actionby,
        price,
        reasonofrejection,
      };
      try {
        await addOrdered_Product(newbook);

        toast.success(`Thank you for Purchase ${dishname}`, {
          position: "top-center",
          theme: "colored",
        });
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const getAllDishesThatYouBuy = () => {
    return getDocs(orderCollectionRef);
  };

  const getDishThat_You_Buy = async () => {
    const data = await getAllDishesThatYouBuy();
    setYourOrder(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  const Categorires_orders_by_status = async (status) => {
    navigate("/customerorderbystatus");
    const items = YourOrder.filter((cartdishes) => {
      return cartdishes.status == status;
    });

    setClassifyYourOrderByStatus(items);
    return items;
  };
  const UserOrder_by_user_details = async (email) => {
    const items = YourOrder.filter((cartdishes) => {
      return cartdishes.email == email;
    });

    setyourOrderByUserdetails(items);
    return items;
  };

  const updateOrdersStatusInDatabase = async (
    documentId,
    status,
    reasonofrejection,
    ActionBy
  ) => {
    try {
      // Reference to the specific document
      const orderDocRef = doc(orderCollectionRef, documentId);

      // Update the status field of the specific document

      const confurmaction = prompt(
        "Are you really want to update? If tes then enter Email"
      );

      if (confurmaction == localStorage.getItem("email")) {
        await updateDoc(orderDocRef, {
          status: status,
          reasonofrejection: reasonofrejection,
          actionby: ActionBy, // Set the status to "deliver"
        });
        toast.success(`Congractulation! Your status is updated`, {
          position: "top-center",
          theme: "colored",
        });
      } else {
        toast.error(`UnAutherised user`, {
          position: "top-center",
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleUpdateOrderButtonClick_forAdmin = (
    documentId,
    status,
    reasonofrejection,
    Actionby
  ) => {
    // Call the function to update the status in the database
    updateOrdersStatusInDatabase(
      documentId,
      status,
      reasonofrejection,
      Actionby
    );
  };

  const handleShiftButtonClick = (docID, status, actionby) => {
    updateOrdersStatusInDatabase_ForAdmin(docID, status, actionby);
  };

  const updateOrdersStatusInDatabase_ForAdmin = async (
    docID,
    status,
    actionby
  ) => {
    try {
      // Reference to the specific document
      const orderDocRef = doc(orderCollectionRef, docID);

      // Update the status field of the specific document
      await updateDoc(orderDocRef, {
        status: status,
        actionby: actionby, // Set the status to "deliver"
      });
      toast.success(`Congractulation! Your status is updated`, {
        position: "top-center",
        theme: "colored",
      });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  const cancel_Your_Order = (id, dishname) => {
    const productDoc = doc(db, "orders", id);
    if (productDoc) {
      toast.success(`Your order ${dishname} is Cancel`, {
        position: "top-center",
        theme: "colored",
      });
    }
    return deleteDoc(productDoc);
  };

  const Cancel_The_Order = async (id) => {
    await cancel_Your_Order(id);
    getDishThat_You_Buy();
  };
  // conatct for or raised ticket start
  const raisedTicketCollectionRef = collection(db, "RaisedTicket");

  const addRaisedTicket = (newlyRaisedTicket) => {
    return addDoc(raisedTicketCollectionRef, newlyRaisedTicket);
  };
  const handleContactForm = async (
    email,
    actionby,
    concern,
    contactnumber,
    fullname,
    reasonofissue,
    solution,
    status,
    subject
  ) => {
    handle_Actions()
    if (entry == 0) {
      toast.error("Please login first", {
        position: "top-center",
        theme: "colored",
      });
      const myTimeOut = setTimeout(timeout, 1000);
    } else {
      const newlyRaisedTicket = {
        email,
        actionby,
        concern,
        contactnumber,
        fullname,
        reasonofissue,
        solution,
        status,
        subject,
      };

      try {
        await addRaisedTicket(newlyRaisedTicket);
        toast.success(
          `Your ticket is Raised. Our Executive will connect with you shortly`,
          {
            position: "top-center",
            theme: "colored",
          }
        );
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  // fetch raised ticket

  const getAllRaisedTickets = () => {
    return getDocs(raisedTicketCollectionRef);
  };

  const getRaisedTicketsByUser = async () => {
    const data = await getAllRaisedTickets();
    setYourRaisedTicket(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };
  const handleRaised_Ticket_ButtonClick = (
    docID,
    status,
    actionby,
    reasonofissue,
    solution
  ) => {
    Update_Raised_ticket_ForAdmin(
      docID,
      status,
      actionby,
      reasonofissue,
      solution
    );
  };

  const Update_Raised_ticket_ForAdmin = async (
    docID,
    status,
    actionby,
    reasonofissue,
    solution
  ) => {
    try {
      // Reference to the specific document
      const orderDocRef = doc(raisedTicketCollectionRef, docID);

      // Update the status field of the specific document
      await updateDoc(orderDocRef, {
        status: status,
        actionby: actionby,
        reasonofissue: reasonofissue,
        solution: solution, // Set the status to "deliver"
      });
      toast.success(`Congractulation! Your status is updated`, {
        position: "top-center",
        theme: "colored",
      });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  const RaisedTicket_BY_User = (email) => {
    const items = yourRaisedTicket.filter((num) => {
      return num.email == email;
    });

    setFetchRaisedTicketByUser(items);
    return items;
  };

  const cancel_Your_RaisedTicket = (id) => {
    const productDoc = doc(db, "RaisedTicket", id);
    if (productDoc) {
      toast.success(`Your Ticket is Cancel`, {
        position: "top-center",
        theme: "colored",
      });
    }
    return deleteDoc(productDoc);
  };

  const Cancel_The_RaisedTicket = async (id) => {
    await cancel_Your_RaisedTicket(id);
    RaisedTicket_BY_User();
  };

  const categoriesRaisedTicketsByStatus = (status) => {
    navigate("/customerticketbystatus");
    const items = yourRaisedTicket.filter((num) => {
      return num.status == status;
    });

    setcategoriestheRaisedTicketByStatus(items);
    return items;
  };

  // user profile start
  const profile_collection_ref = collection(db, "user_profile");

  const addUser_Profile = (newUserProfile) => {
    return addDoc(profile_collection_ref, newUserProfile);
  };
  const manage_profile = async (
    email,
    fullname,
    gender,
    contactnumber,
    isAdmin,
    address1,
    address2,
    district,
    state,
    pincode,
    applyasadmin
  ) => {
    const newUserProfile = {
      email,
      fullname,
      gender,
      contactnumber,
      isAdmin,
      address1,
      address2,
      district,
      state,
      pincode,
      applyasadmin,
    };

    try {
      await addUser_Profile(newUserProfile);
      toast.success(`Your Profie is register`, {
        position: "top-center",
        theme: "colored",
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const getAllUserProfileData = () => {
    return getDocs(profile_collection_ref);
  };

  const getProfileOfAllUser = async () => {
    const data = await getAllUserProfileData();
    setUserProfile(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  // Reject the user as admin
  const RejectAsAdmin = (docID, status, actionby, reasonofrejection) => {
    RejectTheUserAsAdmin(docID, status, actionby, reasonofrejection);
  };

  const RejectTheUserAsAdmin = async (
    docID,
    status,
    actionby,
    reasonofrejection
  ) => {
    try {
      // Reference to the specific document
      const orderDocRef = doc(profile_collection_ref, docID);

      // Update the status field of the specific document
      await updateDoc(orderDocRef, {
        status: status,
        actionby: actionby,
        reasonofrejection: reasonofrejection, // Set the status to "deliver"
      });
      toast.success(`Congractulation! Your status is updated`, {
        position: "top-center",
        theme: "colored",
      });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Reject the user as admin
  const MarkAsAdmin = (docID, isAdmin, actionby) => {
    MArkTheUserAsAdmin(docID, isAdmin, actionby);
  };

  const MArkTheUserAsAdmin = async (docID, isAdmin, actionby) => {
    try {
      // Reference to the specific document
      const orderDocRef = doc(profile_collection_ref, docID);

      // Update the status field of the specific document
      await updateDoc(orderDocRef, {
        isAdmin: isAdmin,
        actionby: actionby, // Set the status to "deliver"
      });
      toast.success(`Congractulation! Your status is updated`, {
        position: "top-center",
        theme: "colored",
      });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const fetct_user_profile = async (email) => {
    const items = userprofile.filter((profile) => {
      return profile.email == email;
    });

    setProfileofuserbyemail(items);
    setIsUserProfileCreated(items);
    return items;
  };

  const UpdateUserProfile = (
    docID,
    updatefullname,
    updateaddress1,
    updateaddress2,
    updatedistrict,
    updatepincode,
    updatestate
  ) => {
    UpdateTheProfile(
      docID,
      updatefullname,
      updateaddress1,
      updateaddress2,
      updatedistrict,
      updatepincode,
      updatestate
    );
  };
  const UpdateTheProfile = async (
    docID,
    updatefullname,
    updateaddress1,
    updateaddress2,
    updatedistrict,
    updatepincode,
    updatestate
  ) => {
    try {
      // Reference to the specific document
      const orderDocRef = doc(profile_collection_ref, docID);

      // Update the status field of the specific document

      await updateDoc(orderDocRef, {
        fullname: updatefullname,
        address1: updateaddress1,
        address2: updateaddress2,
        district: updatedistrict,
        pincode: updatepincode,
        state: updatestate,
        // Set the status to "deliver"
      });
      toast.success(`Congractulation! Your status is updated`, {
        position: "top-center",
        theme: "colored",
      });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const checkAuthority = () => {
    if (!localStorage.getItem("email")) {
      navigate("/login");
      toast.error("Please login first", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  const checkAdmin = () => {
    checkAuthority();
    if (localStorage.getItem("email")) {
      if (!localStorage.getItem("email").endsWith("@tcs.com")) {
        toast.error("Entry Restricted", {
          position: "top-center",
          theme: "colored",
        });
        navigate("/");
      }
    }
  };

  const resrictONAuthentication = () => {
    if (localStorage.getItem("email")) {
      toast.error("Another sesson is going on", {
        position: "top-center",
        theme: "colored",
      });
      navigate("/");
    }
  };
  return (
    <>
      <HotelContext.Provider
        value={{
          resrictONAuthentication,
          checkAdmin,
          checkAuthority,
          UpdateUserProfile,
          isUserProfileCreated,
          RejectAsAdmin,
          MarkAsAdmin,
          fetct_user_profile,
          profileofuserbyemail,
          setProfileofuserbyemail,
          getProfileOfAllUser,
          userprofile,
          setUserProfile,
          fetct_user_profile,
          manage_profile,
          handleShiftButtonClick,
          Categorires_orders_by_status,
          handleRaised_Ticket_ButtonClick,
          handleUpdateOrderButtonClick_forAdmin,
          classifyYourOrderByStatus,
          setClassifyYourOrderByStatus,
          categoriesRaisedTicketsByStatus,
          categoriestheRaisedTicketByStatus,
          setcategoriestheRaisedTicketByStatus,
          RaisedTicket_BY_User,
          fetchRaisedTicketByUser,
          getDishThat_You_Buy,
          setFetchRaisedTicketByUser,
          getRaisedTicketsByUser,
          yourRaisedTicket,
          setYourRaisedTicket,
          handleContactForm,
          Cancel_The_RaisedTicket,
          yourOrderByUserdetails,
          cancel_Your_Order,
          setyourOrderByUserdetails,
          UserOrder_by_user_details,
          YourOrder,
          setYourOrder,
          deleteProductIn_Cart,
          dishesInCart_by_user_details,
          setCartdishesbyuserDetails,
          cartdishesbyuserDetails,
          handleLogin,
          reducer,
          getDishInCart,
          dishesInCart,
          setDishesInCart,
          selecteditem,
          setSelecteditem,
          userSignOut,
          handleSignup,
          YourItems,
          Buy_the_product,
          handleSubmit,
          dishdetails,
          setshowDishDetails,
          product_details,
        }}
      >
        {props.children}
      </HotelContext.Provider>
      <ToastContainer />
    </>
  );
}

export default HotelState;
