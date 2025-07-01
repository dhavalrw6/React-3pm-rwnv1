// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOgfvTIbar5HONIiHdHDxvfCqzpPcGhNY",
  authDomain: "fir-1d4d1.firebaseapp.com",
  databaseURL: "https://fir-1d4d1-default-rtdb.firebaseio.com",
  projectId: "fir-1d4d1",
  storageBucket: "fir-1d4d1.firebasestorage.app",
  messagingSenderId: "242906278889",
  appId: "1:242906278889:web:92436383a6cedaeac37978"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);