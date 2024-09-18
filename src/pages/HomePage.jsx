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

import NavBar from "../components/NavBar/NavBar";
import Aside from "../components/Aside/Aside";
import MainContent from "../components/MainContent/MainContent";
import TopicContext from "../contexts/TopicContext";
import useHomePage from "../hooks/useHomePage";

function HomePage() {
  const { mode } = useColorScheme();
  const { topic, setTopic } = useHomePage();

  return (
    <TopicContext.Provider value={{ topic, setTopic }}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <CssBaseline></CssBaseline>
        <NavBar mode={mode}></NavBar>
        <Grid2
          container
          sx={{
            flexGrow: 1,
            display: "flex",
            width: "100%",
          }}
        >
          <Aside setTopic={setTopic}></Aside>
          <MainContent topic={topic}></MainContent>
        </Grid2>
      </Box>
    </TopicContext.Provider>
  );
}

export default HomePage;
