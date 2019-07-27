import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA3uL66qXOIJaYZqq2MQjx_lLy8xa9oMzQ",
  authDomain: "crwn-db-37ad7.firebaseapp.com",
  databaseURL: "https://crwn-db-37ad7.firebaseio.com",
  projectId: "crwn-db-37ad7",
  storageBucket: "",
  messagingSenderId: "838901676174",
  appId: "1:838901676174:web:b22b3ac74f6f257d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
