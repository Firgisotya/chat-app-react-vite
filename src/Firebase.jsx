// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_55J8Fx-w1nd8OwgfWTpaFQygHZ5VQrs",
  authDomain: "instant-chat-662e6.firebaseapp.com",
  projectId: "instant-chat-662e6",
  storageBucket: "instant-chat-662e6.appspot.com",
  messagingSenderId: "305123183097",
  appId: "1:305123183097:web:f7b0afbe201974a75e9528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);