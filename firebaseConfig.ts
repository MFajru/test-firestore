import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";

// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDxgtSCUjwyYHpweHer8w6Au7sQienERXQ",
  authDomain: "test-rn-auth-d93c4.firebaseapp.com",
  projectId: "test-rn-auth-d93c4",
  storageBucket: "test-rn-auth-d93c4.appspot.com",
  messagingSenderId: "17978487746",
  appId: "1:17978487746:web:57c8aa6d72524d8b1b9c5b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, addDoc, collection, getDocs, onSnapshot, deleteDoc };
