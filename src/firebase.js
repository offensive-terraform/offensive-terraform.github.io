import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGR1t04Vea4k_51vqBbqWRMUYLZeJgy8o",
  authDomain: "offensive-terraform.firebaseapp.com",
  databaseURL: "https://offensive-terraform.firebaseio.com",
  projectId: "offensive-terraform",
  storageBucket: "offensive-terraform.appspot.com",
  messagingSenderId: "556600256441",
  appId: "1:556600256441:web:6a17fe02846490f8b87868",
  measurementId: "G-DEWDK2DB9R",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
