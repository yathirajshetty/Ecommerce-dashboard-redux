import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyB4z54wfCNeKCReeUN4WaLy5MIKz9AjcnM",
    authDomain: "react-ecommerce-project-b9922.firebaseapp.com",
    projectId: "react-ecommerce-project-b9922",
    storageBucket: "react-ecommerce-project-b9922.appspot.com",
    messagingSenderId: "862393956004",
    appId: "1:862393956004:web:285e76c44b8b791ff9d831"
  };

  firebase.initializeApp(firebaseConfig);
  const auth= firebase.auth();
  const dbbaseapp= firebase.initializeApp(firebaseConfig);
  const db= dbbaseapp.firestore();
  export {auth, db};