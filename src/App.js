import * as React from "react";
import {
  Grid2,
  Paper,
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  CssBaseline,
} from "@mui/material";
import NavBar from "./components/NavBar";
import darkTheme from "./theme";
import TopicList from "./components/TopicList";
// import MenuIcon from "@mui/icons-material/Menu";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <CssBaseline />

      {/* Top Navigation Bar */}
      <AppBar position="static" color="white">
        <NavBar></NavBar>
      </AppBar>

      <Grid2 container sx={{ flexGrow: 1 }}>
        {/* Left Aside */}
        <Grid2
          item
          xs={12}
          sm={3}
          md={2}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Paper
            elevation={3}
            sx={{ padding: 2, height: "100%", boxSizing: "border-box" }}
          >
            <Typography variant="h6">Topics</Typography>
            {/* Add aside content here */}
            <TopicList></TopicList>
          </Paper>
        </Grid2>

        {/* Main Content Area */}
        <Grid2 item xs={12} sm={9} md={10} sx={{ padding: 2 }}>
          <Paper
            elevation={3}
            sx={{ padding: 2, height: "100%", boxSizing: "border-box" }}
          >
            <Typography variant="h6">Main Content</Typography>
            {/* Add main content here */}
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default App;
