// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoeo7UIuMzjeWgULa3FGOgs2GAFg3YofQ",
  authDomain: "music-school-851bb.firebaseapp.com",
  projectId: "music-school-851bb",
  storageBucket: "music-school-851bb.appspot.com",
  messagingSenderId: "278721247560",
  appId: "1:278721247560:web:9d8d89a15e2cc6a790db7d",
  measurementId: "G-N5GS6NWG8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;