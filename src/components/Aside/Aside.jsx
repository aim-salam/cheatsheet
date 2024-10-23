import { Box } from "@mui/material";
import { useAside } from "../../contexts/AsideContext";
import LogoutButton from "../Buttons/LogoutButton";
import { useTopic } from "../../contexts/TopicContext";
import { useColorScheme } from "@mui/material/styles";
import { useEffect } from "react";
import TopicList from "./TopicList";
function Aside() {
  const { isAside, setIsAside } = useAside();
  const { topic, setTopic } = useTopic();

  const { mode } = useColorScheme();

  return (
    <Box
      sx={{
        display: {
          xs: isAside ? "block" : "none",
          sm: isAside ? "block" : "none",
          md: isAside ? "block" : "none",
          lg: "block",
          zIndex: 2,
        },
        ...styles.box1,
      }}
    >
      <Box onClick={() => setIsAside(false)} sx={styles.box2}></Box>
      <Box
        sx={{
          backgroundColor: mode === "dark" ? "#121212" : "white",
          ...styles.box3,
        }}
      >
        <TopicList></TopicList>
        <Box sx={styles.box4}>
          <LogoutButton></LogoutButton>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  box1: {
    position: "fixed",
  },
  box2: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
    opacity: 0.5,
    position: "absolute",
    display: { lg: "none" },
    zIndex: "-1",
  },
  box3: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",

    paddingTop: "30px",

    width: "250px",
    paddingBottom: "20px",
  },
  box4: {
    display: { xs: "block", sm: "none" },
    marginLeft: "65px",
  },
};

export default Aside;
