import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCPuXW77SWAd3FxSD_RZpGzjI1o9TT9c3c",
  authDomain: "messenger-rj.firebaseapp.com",
  projectId: "messenger-rj",
  storageBucket: "messenger-rj.appspot.com",
  messagingSenderId: "855913715057",
  appId: "1:855913715057:web:a5a08465d9d1d04b2c92d0",
  measurementId: "G-118G4M7LEQ",
});

const db = firebaseApp.firestore();
export default db;
