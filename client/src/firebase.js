// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-project-f5046.firebaseapp.com",
  projectId: "mern-estate-project-f5046",
  storageBucket: "mern-estate-project-f5046.appspot.com",
  messagingSenderId: "981104998124",
  appId: "1:981104998124:web:93e830b0d91a207d7b17c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);