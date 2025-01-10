// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlKW-KDAlqW4uHxA5NfWJSID_aswX6SY4",
  authDomain: "study-circle-b312a.firebaseapp.com",
  projectId: "study-circle-b312a",
  storageBucket: "study-circle-b312a.firebasestorage.app",
  messagingSenderId: "828475523030",
  appId: "1:828475523030:web:5d3b0e7a0be9c2dc65ae77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
