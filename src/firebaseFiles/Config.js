import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC1ZO6SG9RfgkIq0IfMmO7238fkq-_RGF8",
  authDomain: "familyhotel-85e24.firebaseapp.com",
  projectId: "familyhotel-85e24",
  storageBucket: "familyhotel-85e24.appspot.com",
  messagingSenderId: "401491541493",
  appId: "1:401491541493:web:195f4698d9ab2b42a434bc",
  measurementId: "G-97VZ7GLP08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, getFirestore, db}