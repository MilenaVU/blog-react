// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5PkQMDEP4lFru0D0TNvt-RpZf5Ig41UQ",
  authDomain: "blog-react-87825.firebaseapp.com",
  projectId: "blog-react-87825",
  storageBucket: "blog-react-87825.appspot.com",
  messagingSenderId: "131146507883",
  appId: "1:131146507883:web:036259753b22e1264f732e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);