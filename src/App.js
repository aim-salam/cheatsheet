import React, { useEffect, useState } from "react";
import {
  Grid2,
  Box,
  Typography,
  AppBar,
  CssBaseline,
  useColorScheme,
  Paper,
} from "@mui/material";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";
import MainContent from "./components/MainContent";
import TopicContext from "./contexts/TopicContext";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import HomePage from "./pages/HomePage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBvTQGABIdbUweZnoZu3K3fSZ8tcYuUhU",
  authDomain: "cheatsheet-1b79b.firebaseapp.com",
  projectId: "cheatsheet-1b79b",
  storageBucket: "cheatsheet-1b79b.appspot.com",
  messagingSenderId: "455671111697",
  appId: "1:455671111697:web:5fd68a3f7d7a44348391b0",
  measurementId: "G-NMEXYV70SV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return <HomePage></HomePage>;
}

export default App;
