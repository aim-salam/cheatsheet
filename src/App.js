import React, { useEffect, useState } from "react";
import {
  Grid2,
  Box,
  Typography,
  AppBar,
  CssBaseline,
  useColorScheme,
} from "@mui/material";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";
import MainContent from "./components/MainContent";
import TopicContext from "./Contexts/TopicContext";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
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
  const { mode } = useColorScheme();
  const [topic, setTopic] = useState({
    topic: "HTML",
    type: "parent",
    imageLink: "https://images.cheatsheet.cam/images/html.webp",
    tables: [
      {
        table: "Introduction",
        columns: {
          action: true,
          description: true,
          visual: true,
          // emoji: true
        },
      },
      {
        table: "Head",
        columns: {
          action: true,
          description: true,
          visual: true,
          code: true,
          // emoji: true,
        },
      },
      {
        table: "Text",
        columns: {
          action: true,
          description: true,
          visual: true,
          code: true,
          // emoji: true,
        },
      },
    ],
  });

  useEffect(() => {
    console.log("page_view: Home");
    logEvent(analytics, "page_view: Home");
  }, []);
  return (
    <TopicContext.Provider value={{ topic, setTopic }}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <CssBaseline />

        {/* Top Navigation Bar */}
        <AppBar
          position="static"
          color="white"
          sx={{
            boxShadow: 0,
            borderBottom: 1,
            borderBottomColor: mode === "light" ? "#ddd" : "#272727",
            paddingRight: "20px",
            paddingLeft: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <NavBar></NavBar>
        </AppBar>

        <Grid2
          container
          sx={{
            flexGrow: 1,
            display: "flex",
            width: "100%",
          }}
        >
          {/* Left Aside */}
          <Grid2
            // item
            xs={12}
            sm={3}
            md={2}
            sx={{ display: { xs: "none", sm: "block" }, width: "200px" }}
          >
            {/* Add aside content here */}
            <Aside setTopic={setTopic}></Aside>
          </Grid2>

          {/* Main Content Area */}
          <Grid2
            // item
            xs={12}
            sm={9}
            md={10}
            sx={{ paddingRight: "40px", flex: "1 1 auto" }}
          >
            <Typography fontSize={40} fontWeight={"bold"}>
              {topic.topic}
            </Typography>
            {/* Add main content here */}
            <MainContent topic={topic}></MainContent>
          </Grid2>
        </Grid2>
      </Box>
    </TopicContext.Provider>
  );
}

export default App;
