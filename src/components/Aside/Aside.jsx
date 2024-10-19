import {
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  Stack,
  Typography,
  Grid2,
  Box,
} from "@mui/material";
import { topics } from "../../db/topics";
import logo from "./../../assets/logo.jpg";
import { useState } from "react";
import { useAside } from "../../contexts/AsideContext";
function TopicList({ setTopic }) {
  const { isAside, setIsAside } = useAside();
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

  return (
    <Box
      sx={{
        position: "fixed",
        height: "100vh",
        marginTop: "30px",
        display: {
          xs: isAside ? "block" : "none",
          sm: isAside ? "block" : "none",
          md: isAside ? "block" : "none",
          lg: "block",
        },
        width: "250px",
        backgroundColor: "white",
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
        }}
      ></Box>
      <Grid2
      // item
      >
        <List sx={{ backgroundColor: "white", height: "100vh" }}>
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
      </Grid2>
    </Box>
  );
}

export default TopicList;
