// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmJ_YzSxBluMEm5X36QPK7dr7QIn98mxk",
  authDomain: "netflixgpt-24d94.firebaseapp.com",
  projectId: "netflixgpt-24d94",
  storageBucket: "netflixgpt-24d94.firebasestorage.app",
  messagingSenderId: "500939698677",
  appId: "1:500939698677:web:ed306aa7cec64f874270bc",
  measurementId: "G-D6Z00HL8YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();