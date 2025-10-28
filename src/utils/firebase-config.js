import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUEl0C52vVC_5E9pUeBc2pnPlsXxbNKYQ",
  authDomain: "netflixgpt-13730.firebaseapp.com",
  projectId: "netflixgpt-13730",
  storageBucket: "netflixgpt-13730.firebasestorage.app",
  messagingSenderId: "757332903861",
  appId: "1:757332903861:web:c382f3dd10d3b3f94c3bfc",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const AUTH = getAuth();
