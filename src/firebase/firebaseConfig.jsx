import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBROZvEvIdOe6Aa-VeP_INqWDmajkvyz0c",
  authDomain: "e-commerce-website-64d5e.firebaseapp.com",
  projectId: "e-commerce-website-64d5e",
  storageBucket: "e-commerce-website-64d5e.appspot.com",
  messagingSenderId: "890285570479",
  appId: "1:890285570479:web:df2faa35ce4d5a4fd9175a",
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
