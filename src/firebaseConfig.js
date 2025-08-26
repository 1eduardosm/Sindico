// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, deleteDoc, addDoc, updateDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcG83wLpMTiEaBDGFWGa57Dhghsez1WHo",
  authDomain: "linka-82e75.firebaseapp.com",
  projectId: "linka-82e75",
  storageBucket: "linka-82e75.firebasestorage.app",
  messagingSenderId: "704519260659",
  appId: "1:704519260659:web:bc2c99aa168112e0f42a86",
  measurementId: "G-LMMM340P0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getFirestore(app)

export { database, collection, doc, deleteDoc, addDoc, updateDoc }