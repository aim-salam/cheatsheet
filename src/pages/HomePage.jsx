import { Grid2, Box, CssBaseline } from "@mui/material";

import NavBar from "../components/NavBar/NavBar";
import Aside from "../components/Aside/Aside";
import MainContent from "../components/MainContent/MainContent";
import { TopicProvider } from "../contexts/TopicContext";
import { AsideProvider } from "../contexts/AsideContext";

function HomePage() {
  return (
    <TopicProvider>
      <AsideProvider>
        <Box sx={styles.box1}>
          <CssBaseline></CssBaseline>
          <NavBar></NavBar>
          <Grid2 container sx={styles.grid}>
            <Aside></Aside>
            <MainContent></MainContent>
          </Grid2>
        </Box>
      </AsideProvider>
    </TopicProvider>
  );
}

const styles = {
  box1: { display: "flex", flexDirection: "column", height: "100vh" },
  grid: {
    flexGrow: 1,
    display: "flex",
    width: "100%",
    alignContent: "center",
  },
};

export default HomePage;
