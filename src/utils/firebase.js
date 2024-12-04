// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-82a38.firebaseapp.com",
  projectId: "blog-82a38",
  storageBucket: "blog-82a38.firebasestorage.app",
  messagingSenderId: "204365925567",
  appId: "1:204365925567:web:fdac07d1cf1b17a25eca0a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);