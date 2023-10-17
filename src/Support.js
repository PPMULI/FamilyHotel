import React, { useEffect, useState } from "react";
import { auth, storage } from "./Component/Firebase/Firebase";
import "./Home.css";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function Support() {
  const [imageupload, setImageupload] = useState(null);
  const [imagelist, setImagelist] = useState([]);

  const imagelistRef = ref(storage, "images/");
  //   useEffect(() => {
  const onupload = () => {
    listAll(imagelistRef).then((response) => {
      console.log(response);
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImagelist((prev) => [...prev, url]);
        });
      });
    });
    //   }, []);
  };
  const uploadimane = (e) => {
    e.preventDefault();
    console.log("uploades");

    if (imageupload == null) {
      return null;
    }

    const imageRef = ref(storage, `images/${imageupload.name}`);
    uploadBytes(imageRef, imageupload).then(() => {
      alert("Image uploaded");
    });

    listAll(imagelistRef).then((response) => {
        console.log(response);
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImagelist((prev) => [...prev, url]);
          });
        });
      });
  };

  const [username, setUsername] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.email);
        localStorage.setItem("email", user.email);
        console.log(user.email);
      } else {
        setUsername("");
      }
    });
  }, []);
  return (
    <>
      <input
        type="file"
        onChange={(e) => {
          setImageupload(e.target.files[0]);
        }}
      />
      {/* <button onClick={uploadimane}>upload</button> */}

      <button onClick={onupload}>Get uploaded image</button>

      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          {imagelist.map((url) => {
            console.log(url);
            return (
              <>
                <div className="col-lg-3">
                  <img src={url} id="image" />
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* <h1>Hello-{localStorage.getItem("email")}</h1> */}
    </>
  );
}

export default Support;


 // const [user, setUser] = useState({
  //   name: "",
  //   phone: "",
  //   address: "",
  //   photo: "",
  // });

  // const {name, phone, address, photo} = user
  // const postData = async (e) => {
  //   e.preventDefault();
  //   console.log(user)
  //   const responce = await fetch("https://travellerwebsite-default-rtdb.firebaseio.com/dummyinfo.json", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body:JSON.stringify( {
  //       name: user.name,
  //       phone: user.phone,
  //       address: user.address,
  //       photo: user.photo
  //     })
  //   })

  //   if(responce)
  //   {
  //     alert("success");
  //   }
  //   else
  //   {
  //     alert("fail")
  //   }
  //   console.log("cli")
  // }
  // const onChange = (e) => {
  //   e.preventDefault();
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  


      
  // const [imageupload, setImageupload] = useState(null);
  // const [imagelist, setImagelist] = useState([]);

  // const [user, setUser] = useState({
  //   name: "",
  //   phone: "",
  //   address: "",
  // });

  // const photo1 = document.getElementById("photo");
  // // const imagelistRef = ref(storage, `images/`);
  // const imagelistRef = ref(storage, `docs/`);
  // //   useEffect(() => {
  // const onupload = () => {
  //   listAll(imagelistRef).then((response) => {
  //     console.log(response);
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImagelist((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  //   //   }, []);
  // };
  // const uploadimane = (e) => {
  //   e.preventDefault();
  //   console.log("uploades");

  //   if (imageupload == null) {
  //     return null;
  //   }

  //   let str = "l/l/k/fd/ghj";
  //   const imageRef = ref(storage, `docs/${user.name}/${imageupload.name}`);
  //   uploadBytes(imageRef, imageupload).then(() => {
  //     alert("Image uploaded");
  //   });

  //   listAll(imagelistRef).then((response) => {
  //       console.log(response);
  //       response.items.forEach((item) => {
  //         getDownloadURL(item).then((url) => {
  //           setImagelist((prev) => [...prev, url]);
  //         });
  //       });
  //     });
  // };

  // const { name, phone, address } = user;
  // const postData = async (e) => {
  //   e.preventDefault();
  //   listAll(imagelistRef).then((response) => {
  //     console.log(response);
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImagelist((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  //   const responce = await fetch(
  //     "https://travellerwebsite-default-rtdb.firebaseio.com/dummyinfo.json",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: user.name,
  //         phone: user.phone,
  //         address: user.address
  //       }),
  //     }
  //   );

  //   if (responce) {
  //     alert("success");
  //   } else {
  //     alert("fail");
  //   }
  //   console.log("cli");
  // };
  // const onChange = (e) => {
  //   e.preventDefault();
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

//   <div className="container">
//   <form method="POST">
//     <div className="mb-3">
//       <label for="exampleInputEmail1" className="form-label">
//         Name
//       </label>
//       <input
//         type="text"
//         className="form-control"
//         id="name"
//         name="name"
//         value={user.name}
//         onChange={onChange}
//         aria-describedby="emailHelp"
//       />
//     </div>

//     <div className="mb-3">
//       <label for="exampleInputEmail1" className="form-label">
//         Phone no.
//       </label>
//       <input
//         type="text"
//         className="form-control"
//         id="phone"
//         onChange={onChange}
//         name="phone"
//         aria-describedby="emailHelp"
//       />
//     </div>

//     <div className="mb-3">
//       <label for="exampleInputEmail1" className="form-label">
//         Address
//       </label>
//       <input
//         type="text"
//         className="form-control"
//         id="address"
//         onChange={onChange}
//         name="address"
//         aria-describedby="emailHelp"
//       />
//     </div>

//     <div className="mb-3">
//       <label for="exampleInputPassword1" className="form-label">
//         Photo
//       </label>
//       <input
//         type="file"
//         onChange={(e) => {
//           setImageupload(e.target.files[0]);
//         }}
//         id="photo"
//         name="photo"
//       />
//     </div>

//     <button onClick={uploadimane}>upload</button>
//     <button type="submit" onClick={postData} className="btn btn-primary">
//       Submit
//     </button>
//   </form>
// </div>
