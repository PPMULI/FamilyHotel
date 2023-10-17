import React, { useRef, useState } from "react";
import HotelContext from "./hotelContext";
import { ToastContainer, toast } from "react-toastify";
import { MenuItems } from "../menu/MenuItems";
import "react-toastify/dist/ReactToastify.css";
import { json } from "react-router-dom";
function HotelState(props) {
  const [customer, setCustomer] = useState([]);
  const [total, setTotla] = useState([]);
  const [data, myData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [detaiItem, setDetailItem] = useState([]);
  const [totalOrderAdmin, setTotalOrderAdmin] = useState([]);
  const [favouriteItem, setFavouriteItem] = useState([]);
  const [credentials, setCredentials] = useState({
    email: "",
    name: "",
    contactnumber: "",
    address: "",
    password: "",
  });

  const [raisedTicketStatusAdmin, setraisedTicketStatusAdmin] = useState([]);
  const [admnTickets, setAdminTickets] = useState([]);
  const [adminorderStatus, setadminOrderStatus] = useState([]);
  const [myOrder, setMyOrder] = useState([]);
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

  const [statusOfTicketUpdatedByAdmin, setStatusOfTicketUpdatedByAdmin] =
    useState([]);
  const [userticket, setUserticket] = useState([]);

  const [orderstatus, setOrderStatus] = useState([]);

  const [favourite, setFavourite] = useState({
    email: "",
    productname: "",
    quantity: "",
    price: "500",
    productId: "",
    foodID: "",
    imageurl: "",
  });

  const [raisedEicketUser, setRaisedticketUser] = useState([]);
  const [ticketStatus, setTicketStatus] = useState([]);
  const [raisedticketadmin, setRaisedticketAdmin] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [selecteditem, setSelecteditem] = useState([]);
  const [dishDetails, setDetails] = useState([]);
  const [orders, setOrders] = useState({
    email: localStorage.getItem("email"),
    orderedfood: customer,
    status: "pending",
  });

  const [orderedItem, setOrderedItem] = useState([]);
  // function on cartitem start
  const fetchDetails = async () => {
    const responce = await fetch("http://localhost:5000/api/cart/fetchitems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: localStorage.getItem("email"),
      }),
    });
    const json = await responce.json();

    setCustomer(json.cart);
    localStorage.setItem("orderfood1", JSON.stringify(json.cart));
  };

  const removeItem = async (id) => {
    const responce = await fetch(
      `http://localhost:5000/api/cart/deleteitem/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: localStorage.getItem("email"),
        }),
      }
    );
    const json = await responce.json();

    let newCustomer = customer.filter((cust) => cust._id !== id);

    setCustomer(newCustomer);
    total_Ammount();
  };

  const total_Ammount = () => {
    let final_Ammount = 0;
    for (let i = 0; i < customer.length; i++) {
      final_Ammount = final_Ammount + customer[i].price * customer[i].quantity;
    }

    localStorage.setItem("total_ammount", final_Ammount);
  };

  let customerOrder = [];
  {
    customer.map((value) => {
      customerOrder.push({
        id: value.productId,
        quantity: value.quantity,
        dish: value.productname,
      });
    });
  }
  const orderManager = async () => {
    const { email, orderedfood, status } = orders;
    const responce = await fetch("http://localhost:5000/api/orders/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: localStorage.getItem("email"),
        orderedfood: customerOrder,
        status: orders.status,
      }),
    });
    const json = await responce.json();

    if (json.success) {
      toast.success("your order is book", {
        position: "top-center",
        theme: "colored",
      });

      toast.success("Refer my order", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  const checkAuthority = () => {
    if (!localStorage.getItem("authtoken")) {
      toast.error(`Please log-in first ${(window.location.href = "/")}`, {
        position: "top-center",
        theme: "colored",
      });
    }
    if (localStorage.getItem("authtoken")) {
      // const myTimeout = setTimeout(myGreeting, 6000);
    }
  };

  function myGreeting() {
    if (localStorage.getItem("authtoken")) {
      localStorage.clear();
      alert(
        toast.error("session Time", {
          position: "top-center",
          theme: "colored",
        })
      );
    }
  }
  const restrictUser = () => {
    if (localStorage.getItem("authtoken")) {
      toast.error(
        `Another session is gong on! Please log-out first ${(window.location.href =
          "/")} `,
        {
          position: "top-center",
          theme: "colored",
        }
      );
    }
  };

  const handleSubmit = async (email, name, address, number, password) => {
    const email1 = document.getElementById("email");
    const password1 = document.getElementById("password");
    const address1 = document.getElementById("address");
    const contactnumber1 = document.getElementById("number");
    const name1 = document.getElementById("name");

    let error = 0;
    let succ = 0;
    // function for checking the length of each field
    function checkLength(input) {
      if (input.value.length == 0) {
        error = 1;
      } else {
        succ = 1;
      }
    }

    // function call
    checkLength(contactnumber1);
    checkLength(email1);
    checkLength(password1);
    checkLength(name1);
    checkLength(address1);

    if (succ == 1 && error == 0) {
      const responce = await fetch(
        "http://localhost:5000/api/authenticator/authentication",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            address: address,
            contactnumber: number,
          }),
        }
      );

      const json = await responce.json();
      if (json.success) {
        toast.success(
          `Congratulation! Your account is create with email: ${email} ${(window.location.href =
            "/login")}`,
          {
            position: "top-center",
            theme: "colored",
          }
        );
      } else {
        toast.error(
          "You are already created the account eith this credentials",
          {
            position: "top-center",
            theme: "colored",
          }
        );
      }
    } else {
      toast.error("All fields are important", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  const fetchOrders = async () => {
    // if (customer.length > 0) {
    const responce = await fetch(
      "http://localhost:5000/api/orders/fetchorders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: localStorage.getItem("email"),
        }),
      }
    );
    const json = await responce.json();

    setOrderedItem(json.order[0].orderedfood);
    // }
  };

  const adminSignup = async (
    email,
    name,
    address,
    number,
    password,
    empID,
    location,
    reportsto,
    JobRole
  ) => {
    const email1 = document.getElementById("email");
    const password1 = document.getElementById("password");
    const address1 = document.getElementById("address");
    const contactnumber1 = document.getElementById("number");
    const name1 = document.getElementById("name");
    const empid1 = document.getElementById("empid");
    const location1 = document.getElementById("location");
    const reportsto1 = document.getElementById("reportsto");

    let error = 0;
    let succ = 0;
    // function for checking the length of each field
    function checkLength(input) {
      if (input.value.length == 0) {
        error = 1;
      } else {
        succ = 1;
      }
    }

    // function call
    checkLength(contactnumber1);
    checkLength(email1);
    checkLength(password1);
    checkLength(name1);
    checkLength(address1);

    if (succ == 1 && error == 0) {
      const responce = await fetch(
        "http://localhost:5000/api/admin/adminauthentication",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            address: address,
            contactnumber: number,
            reportsto: reportsto,
            empid: empID,
            location: location,
            jobrole: JobRole,
          }),
        }
      );

      const json = await responce.json();
      if (json.success) {
        toast.success(
          `Congratulation! Your account is create with email: ${email} ${(window.location.href =
            "/login")}`,
          {
            position: "top-center",
            theme: "colored",
          }
        );
      } else {
        toast.error(
          "You are already created the account eith this credentials",
          {
            position: "top-center",
            theme: "colored",
          }
        );
      }
    } else {
      toast.error("All fields are important", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  const adminLogin = async (email, password) => {
    const email1 = document.getElementById("email");
    const password1 = document.getElementById("password");

    let error = 0;
    let succ = 0;
    // function for checking the length of each field
    function checkLength(input) {
      if (input.value.length == 0) {
        error = 1;
      } else {
        succ = 1;
      }
    }

    // function call
    checkLength(email1);
    checkLength(password1);

    if (succ == 1 && error == 0) {
      const responce = await fetch(
        "http://localhost:5000/api/admin/adminlogin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const json = await responce.json();

      if (json.success) {
        toast.success(`You are log-in as ${email}  }`, {
          position: "top-center",
          theme: "colored",
        });

        localStorage.setItem("authtoken", json.authtoken);
        localStorage.setItem("email", json.email);
      } else {
        toast.error(
          "You are already created the account eith this credentials",
          {
            position: "top-center",
            theme: "colored",
          }
        );
      }
    } else {
      toast.error("All fields are important", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  const YourItems = (category) => {
    const items = MenuItems.filter((num) => {
      return num.food.category == category;
    });

    setSelecteditem(items);
    localStorage.setItem("category", category.toUpperCase());
    return items;
  };

  const onItemDetails = (productID) => {
    const items = MenuItems.filter((products) => {
      return products.food.id == productID;
    });

    setProductDetails(items);
    // localStorage.setItem("category", category.toUpperCase());
    return items;
  };

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
      return quantity;
    }

    const responce = await fetch("http://localhost:5000/api/cart/cartitems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: localStorage.getItem("email"),
        productname: localStorage.getItem("foodname"),
        quantity: orderquantity,
        // quantity: 1,
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
        toast.error("Something wents wrong", {
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

  const addToFavourite = (product) => {
    setCartItems([...cartItems, product]);
    setDetailItem([product]);
    data.push({ product });
    localStorage.setItem("productImage", product.food.image);
    localStorage.setItem("productID", product.food.id);
    localStorage.setItem("foodID", product.food.foodId);
    localStorage.setItem("foodname", product.food.knownAs);
    localStorage.setItem("foodid", product.food.foodId);
    handleFavourite();
  };

  const handleFavourite = async (e) => {
    const { email, productname, price, payment, productId, foodID, imageurl } =
      product;
    const responce = await fetch(
      "http://localhost:5000/api/favourite/addtofavourite",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: localStorage.getItem("email"),
          productname: localStorage.getItem("foodname"),
          price: product.price,
          payment: product.payment,
          imageurl: localStorage.getItem("productImage"),
          productId: localStorage.getItem("productID"),
          foodID: localStorage.getItem("foodid"),
        }),
      }
    );

    const json = await responce.json();
    if (!json.success) {
      alert(
        toast.error("Something wents wrong", {
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
        toast.success("Item is added in favourite list", {
          position: "top-center",
          theme: "colored",
        })
      );
    }
  };

  //fetch favourite list
  const fetchFavouriteItems = async () => {
    const responce = await fetch(
      "http://localhost:5000/api/favourite/fetchfavouriteitems",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: localStorage.getItem("email"),
        }),
      }
    );
    const json = await responce.json();

    setFavouriteItem(json.favourite);
    // localStorage.setItem("orderfood1", JSON.stringify(json.cart));
  };

  const removeFavouriteItem = async (id) => {
    const responce = await fetch(
      `http://localhost:5000/api/favourite/deletefavouriteitem/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: localStorage.getItem("email"),
        }),
      }
    );
    const json = await responce.json();

    let newFavouriteItem = favouriteItem.filter((cust) => cust._id !== id);

    setFavouriteItem(newFavouriteItem);
  };

  const handleContactForm = async (
    email,
    name,
    number,
    subject,
    message,
    status
  ) => {
    const email1 = document.getElementById("email");
    const contactnumber1 = document.getElementById("number");
    const name1 = document.getElementById("name");
    const subject1 = document.getElementById("subject");
    const message1 = document.getElementById("message");

    let error = 0;
    let succ = 0;
    // function for checking the length of each field
    function checkLength(input) {
      if (input.value.length == 0) {
        error = 1;
      } else {
        succ = 1;
      }
    }

    // function call
    checkLength(contactnumber1);
    checkLength(email1);
    checkLength(name1);
    checkLength(subject1);
    checkLength(message1);

    if (succ == 1 && error == 0) {
      const responce = await fetch(
        "http://localhost:5000/api/contact/contactform",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: localStorage.getItem("email"),
            name: name,
            contactnumber: number,
            subject: subject,
            message: message,
            status: status,
          }),
        }
      );

      const json = await responce.json();
      if (json.success) {
        toast.success(
          `Congratulation! You are successfully raise the ticket}`,
          {
            position: "top-center",
            theme: "colored",
          }
        );

        toast.success(`We will connect with you with in 24 hrs`, {
          position: "top-center",
          theme: "colored",
        });
      } else {
        toast.error("Something wents wrong", {
          position: "top-center",
          theme: "colored",
        });
      }
    } else {
      toast.error("All fields are important", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  const yourOrder = async () => {
    const responce = await fetch(
      "http://localhost:5000/api/orders/fetchorders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: localStorage.getItem("email"),
        }),
      }
    );
    const json = await responce.json();
    setMyOrder(json.order);
  };

  const handleUpdateAdmin = (orderId, status, reasonOfRejection) => {
    // Replace 'yourUpdateEndpoint' with your actual API endpoint for updating orders
    const responce = fetch(
      `http://localhost:5000/api/orders/updateorder/${orderId}`,
      {
        method: "PUT", // Use the appropriate HTTP method (PUT, POST, etc.)
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: status,
          reasonofrejection: reasonOfRejection,
        }), // Replace 'updatedStatus' with the new status value
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log("Order updated:", data);
        // You may want to update your component's state or trigger a refresh here
      })
      .catch((error) => {
        console.error("Error updating order:", error);
      });
  };

  const fetchOrderAdmin = async () => {
    const responce = await fetch(
      "http://localhost:5000/api/orders/fetchOrderAdmin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await responce.json();
    setTotalOrderAdmin(json.order);
  };

  const fetchUpdatedstatusAdmin = (orderStatus) => {
    const items = totalOrderAdmin.filter((num) => {
      return num.status == orderStatus;
    });

    setadminOrderStatus(items);
    return items;
  };

  const fetch_Raised_Ticket_admin = async (ticketstatus) => {
    const responce = await fetch(
      "http://localhost:5000/api/contact/fetchconcernadmin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await responce.json();
    setRaisedticketAdmin(json.order);
  };

  const ref = useRef(null);

  const checkAdmin = () => {
    if (!localStorage.getItem("authtoken")) {
      toast.error(`Please log-in first ${(window.location.href = "/login")}`, {
        position: "top-center",
        theme: "colored",
      });
    }

    if (!localStorage.getItem("email").endsWith("@tcs.com")) {
      toast.error(
        `Access denied ${(window.location.href = "/")}`,
        (window.location.href = "/"),
        {
          position: "top-center",
          theme: "colored",
        }
      );
    }
    // if (localStorage.getItem("authtoken")) {
    // const myTimeout = setTimeout(myGreeting, 6000);
    // }
  };

  const fetchuserticket = async () => {
    const responce = await fetch(
      "http://localhost:5000/api/contact/fetchusertickets",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: localStorage.getItem("email"),
        }),
      }
    );
    const json = await responce.json();
    setUserticket(json.concern);
  };

  const fetchusertickets = (userTicketStatus) => {
    const user_raised_tickets = userticket.filter((num) => {
      return num.status == userTicketStatus;
    });

    setRaisedticketUser(user_raised_tickets);
    return user_raised_tickets;
  };

  const YourOrderStatus = (orderStatus) => {
    const items = myOrder.filter((num) => {
      return num.status == orderStatus;
    });

    setOrderStatus(items);
    return items;
  };

  const cancel_orderItem = async (id) => {
    const responce = await fetch(
      `http://localhost:5000/api/orders/cancelorder/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: localStorage.getItem("email"),
        }),
      }
    );
    const json = await responce.json();

    let YourOrdersNew = myOrder.filter((cust) => cust._id !== id);

    setMyOrder(YourOrderStatus);
  };

  const handleDelivaryAdmin = (orderId, status, deliverby) => {
    // Replace 'yourUpdateEndpoint' with your actual API endpoint for updating orders
    const responce = fetch(
      `http://localhost:5000/api/orders/updateorder/${orderId}`,
      {
        method: "PUT", // Use the appropriate HTTP method (PUT, POST, etc.)
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: status, deliverby: deliverby }), // Replace 'updatedStatus' with the new status value
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log("Order updated:", data);
        // You may want to update your component's state or trigger a refresh here
      })
      .catch((error) => {
        console.error("Error updating order:", error);
      });
  };

  const ticketStatusAdmin = async () => {
    const responce = await fetch(
      "http://localhost:5000/api/contact/fetchconcernadmin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await responce.json();
    setraisedTicketStatusAdmin(json.order);
  };

  const TicketStatusByAdmin = (StatusOfTheTicket) => {
    const items = raisedTicketStatusAdmin.filter((num) => {
      return num.status == StatusOfTheTicket;
    });

    setStatusOfTicketUpdatedByAdmin(items);

    return items;
  };

  const updated_Ticket_By_Admin = (
    ticketID,
    ticketStatus,
    resolveBy,
    reasonOfIssue,
    SolutionofIssue
  ) => {
    // Replace 'yourUpdateEndpoint' with your actual API endpoint for updating orders
    const responce = fetch(
      `http://localhost:5000/api/contact/updateticketadmin/${ticketID}`,
      {
        method: "PUT", // Use the appropriate HTTP method (PUT, POST, etc.)
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: ticketStatus,
          resolveby: resolveBy,
          reason: reasonOfIssue,
          solution: SolutionofIssue,
        }), // Replace 'updatedStatus' with the new status value
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log("Order updated:", data);
        // You may want to update your component's state or trigger a refresh here
      })
      .catch((error) => {
        console.error("Error updating order:", error);
      });
  };
  return (
    <>
      <HotelContext.Provider
        value={{
          updated_Ticket_By_Admin,
          raisedTicketStatusAdmin,
          setraisedTicketStatusAdmin,
          TicketStatusByAdmin,
          setStatusOfTicketUpdatedByAdmin,
          statusOfTicketUpdatedByAdmin,
          cancel_orderItem,
          ticketStatusAdmin,
          handleDelivaryAdmin,
          fetchusertickets,
          raisedEicketUser,
          setRaisedticketUser,
          fetchuserticket,
          userticket,
          setUserticket,
          customer,
          fetchUpdatedstatusAdmin,
          ticketStatus,
          checkAdmin,
          setTicketStatus,
          fetch_Raised_Ticket_admin,
          setRaisedticketAdmin,
          raisedticketadmin,
          adminorderStatus,
          setadminOrderStatus,
          orderstatus,
          setOrderStatus,
          fetchOrderAdmin,
          setTotalOrderAdmin,
          YourOrderStatus,
          myOrder,
          setMyOrder,
          totalOrderAdmin,
          yourOrder,
          setCustomer,
          handleUpdateAdmin,
          adminLogin,
          fetchDetails,
          orderManager,
          restrictUser,
          checkAuthority,
          removeItem,
          handleAddToCart,
          total_Ammount,
          addToFavourite,
          handleSubmit,
          fetchOrders,
          orderedItem,
          adminSignup,
          setOrderedItem,
          YourItems,
          selecteditem,
          setSelecteditem,
          onItemDetails,
          productDetails,
          setProductDetails,
          favouriteItem,
          setFavouriteItem,
          removeFavouriteItem,
          fetchFavouriteItems,
          handleContactForm,
        }}
      >
        {props.children}
      </HotelContext.Provider>
      <ToastContainer />
    </>
  );
}

export default HotelState;
