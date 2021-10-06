import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYxKqHiAN2sk9Qvzxy6c5hoZszo8X1egY",
  authDomain: "prueba-final-b187a.firebaseapp.com",
  projectId: "prueba-final-b187a",
  storageBucket: "prueba-final-b187a.appspot.com",
  messagingSenderId: "724000094695",
  appId: "1:724000094695:web:2c305333c843cde32ca542",
  measurementId: "G-RFY52LWSWH",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();
const facebook = new firebase.auth.FacebookAuthProvider();

export { db, google, facebook, firebase };
