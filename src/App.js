import * as React from "react";
import {
  Grid2,
  Box,
  Typography,
  AppBar,
  CssBaseline,
  useColorScheme,
} from "@mui/material";
import NavBar from "./components/NavBar";
import TopicList from "./components/TopicList";
import MainContent from "./components/MainContent";
// import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const { mode } = useColorScheme();
  return (
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
          <Typography
            variant="h1"
            fontWeight={"600"}
            fontSize={25}
            paddingLeft={"40px"}
            paddingTop={"70px"}
          >
            Topics
          </Typography>
          {/* Add aside content here */}
          <TopicList></TopicList>
        </Grid2>

        {/* Main Content Area */}
        <Grid2
          // item
          xs={12}
          sm={9}
          md={10}
          sx={{ paddingRight: "40px", flex: "1 1 auto" }}
        >
          <Typography fontSize={55} fontWeight={"600"} paddingTop={"40px"}>
            Main Content
          </Typography>
          {/* Add main content here */}
          <MainContent></MainContent>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default App;
