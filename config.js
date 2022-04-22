import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAK6H9g8M4vdLur3zYxnSlrKHG7UUuLpbw",
    authDomain: "pro-c-71-b37d8.firebaseapp.com",
    projectId: "pro-c-71-b37d8",
    storageBucket: "pro-c-71-b37d8.appspot.com",
    messagingSenderId: "470369471644",
    appId: "1:470369471644:web:d1e510c0082e5a8ff7f159"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
