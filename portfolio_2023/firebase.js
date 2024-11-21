// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADkmTPVtOGoYTlR6WaTTzEwDSiGxeRPGM",
  authDomain: "portfolio-2023-a522f.firebaseapp.com",
  projectId: "portfolio-2023-a522f",
  storageBucket: "portfolio-2023-a522f.appspot.com",
  messagingSenderId: "327987393250",
  appId: "1:327987393250:web:4bd747b29d171a89bee4bb",
  measurementId: "G-93SHVWJ2D7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);