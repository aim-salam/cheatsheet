import React, { useState } from "react";
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
// import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const { mode } = useColorScheme();
  const [topic, setTopic] = useState({
    topic: "CSS",
    type: "parent",
    imageLink: "https://images.cheatsheet.cam/images/css.webp",
    tables: [],
  });
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
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {/* <Typography
              variant="h1"
              fontWeight={"bold"}
              fontSize={18}
              paddingLeft={"40px"}
              paddingTop={"20px"}
            >
              Topics
            </Typography> */}
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
            <Typography fontSize={55} fontWeight={"bold"}>
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
