import { Grid2, Box, CssBaseline } from "@mui/material";

import NavBar from "../components/NavBar/NavBar";
import Aside from "../components/Aside/Aside";
import MainContent from "../components/MainContent/MainContent";
import TopicContext from "../contexts/TopicContext";
import useHomePage from "../hooks/useHomePage";
import { AsideProvider } from "../contexts/AsideContext";

function HomePage() {
  const { topic, setTopic } = useHomePage();

  return (
    <TopicContext.Provider value={{ topic, setTopic }}>
      <AsideProvider>
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          <CssBaseline></CssBaseline>
          <NavBar></NavBar>
          <Grid2
            container
            sx={{
              flexGrow: 1,
              display: "flex",
              width: "100%",
              alignContent: "center",
            }}
          >
            <Aside setTopic={setTopic}></Aside>
            <MainContent topic={topic}></MainContent>
          </Grid2>
        </Box>
      </AsideProvider>
    </TopicContext.Provider>
  );
}

export default HomePage;
