// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoGK-sZiKwZGbJ_GtiqDRdo4wOnrbEYP4",
  authDomain: "twitter-7dccc.firebaseapp.com",
  projectId: "twitter-7dccc",
  storageBucket: "twitter-7dccc.appspot.com",
  databaseURL: "https://twitter-7dccc.firebaseio.com",
  messagingSenderId: "537646651234",
  appId: "1:537646651234:web:e6614e601495e818c6fe3b",
  measurementId: "G-8XWR9T5YB6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;

// const analytics = getAnalytics(app);
