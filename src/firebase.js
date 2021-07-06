import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCNMUVrAq4UsI5NW_nMNdSprPKLajC_2uY",
  authDomain: "thai-schd-crud.firebaseapp.com",
  projectId: "thai-schd-crud",
  storageBucket: "thai-schd-crud.appspot.com",
  messagingSenderId: "791071458894",
  appId: "1:791071458894:web:73709c0a2ca665bf2e651f"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
