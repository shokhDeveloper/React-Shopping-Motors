import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAE6xYYMD-qI1M8hzDKT_9w0MEzNYroSVM",
  authDomain: "motoproject-25854.firebaseapp.com",
  projectId: "motoproject-25854",
  storageBucket: "motoproject-25854.appspot.com",
  messagingSenderId: "129360473420",
  appId: "1:129360473420:web:833a2b2a4330c2bd98b3e9",
  measurementId: "G-9Z9V8HLD3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
