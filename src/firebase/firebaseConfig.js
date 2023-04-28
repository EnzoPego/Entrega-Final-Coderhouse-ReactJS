
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDVhc52bwY7ZO6f4FdjlRdKlt_YmarcsnE",
  authDomain: "e-commerce-de617.firebaseapp.com",
  projectId: "e-commerce-de617",
  storageBucket: "e-commerce-de617.appspot.com",
  messagingSenderId: "997509095302",
  appId: "1:997509095302:web:067db376d08ac28b575607"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)