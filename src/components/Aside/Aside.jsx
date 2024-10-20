import {
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import { topics } from "../../db/topics";
import logo from "./../../assets/logo.jpg";
import { useAside } from "../../contexts/AsideContext";
import LogoutButton from "../Buttons/LogoutButton";
import { useTopic } from "../../contexts/TopicContext";
import { useColorScheme } from "@mui/material/styles";
import { useEffect } from "react";
function TopicList() {
  const { isAside, setIsAside } = useAside();
  const { topic, setTopic } = useTopic();
  const parentStyle = {
    marginTop: "40px",
    marginBottom: "10px",
    fontSize: "25px",
    avatarSize: "30px",
  };

  const childStyle = {
    fontSize: "17px",
    avatarSize: "25px",
  };

  const getStyle = (type) => (type === "parent" ? parentStyle : childStyle);

  const { mode } = useColorScheme();

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  return (
    <Box
      sx={{
        position: "fixed",
        display: {
          xs: isAside ? "block" : "none",
          sm: isAside ? "block" : "none",
          md: isAside ? "block" : "none",
          lg: "block",
          zIndex: 2,
        },
      }}
    >
      <Box
        onClick={() => setIsAside(false)}
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
          opacity: 0.5,
          position: "absolute",
          display: { lg: "none" },
          zIndex: "-1",
        }}
      ></Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",

          paddingTop: "30px",

          width: "250px",
          backgroundColor: mode === "dark" ? "#121212" : "white",
          paddingBottom: "20px",
        }}
      >
        <List sx={{ flexGrow: 1 }}>
          {topics.map((topic) => {
            const { topic: topicName, type, imageLink } = topic;
            const { marginTop, marginBottom, fontSize, avatarSize } =
              getStyle(type);

            return (
              <Stack
                key={topicName}
                marginTop={marginTop}
                marginBottom={marginBottom}
                height={"40px"}
              >
                <ListItemButton
                  sx={{
                    paddingLeft: "40px",
                    paddingRight: "30px",
                    paddingTop: "1px",
                    paddingBottom: "1px",
                  }}
                  onClick={() => {
                    setTopic(topic);
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{ width: avatarSize, height: avatarSize }}
                      alt={topicName}
                      src={imageLink || logo}
                      variant="rounded"
                    />
                  </ListItemAvatar>

                  <Typography
                    fontWeight={type !== "grandchildren" ? "bold" : "normal"}
                    fontSize={fontSize}
                  >
                    {topic.topic}
                  </Typography>
                </ListItemButton>
              </Stack>
            );
          })}
        </List>

        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            marginLeft: "65px",
          }}
        >
          <LogoutButton></LogoutButton>
        </Box>
      </Box>
    </Box>
  );
}

export default TopicList;

{
  /* <List sx={{ flexGrow: 1 }}>

<ListItem sx={{ marginTop: "auto" }}>
  <ListItemText primary="Bottom Item" />
</ListItem>
</List> */
}
