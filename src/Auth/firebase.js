// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuuivuv0qSNEFt6lLR55UjOL-VQWo4g0I",
  authDomain: "listed--auth.firebaseapp.com",
  projectId: "listed--auth",
  storageBucket: "listed--auth.appspot.com",
  messagingSenderId: "1027167692536",
  appId: "1:1027167692536:web:af8b52bec9fd1392c03d0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
