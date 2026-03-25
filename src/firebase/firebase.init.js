// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2CQkvt8O8Q83UQGFelf-1wnQs9GFoXUE",
  authDomain: "coffee-store-app-57999.firebaseapp.com",
  projectId: "coffee-store-app-57999",
  storageBucket: "coffee-store-app-57999.firebasestorage.app",
  messagingSenderId: "329652598209",
  appId: "1:329652598209:web:06f46dc44bdd22379dab40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);