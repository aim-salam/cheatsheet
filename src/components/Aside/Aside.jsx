import React from "react";
import {
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  Stack,
  Typography,
  Grid2,
} from "@mui/material";
import { topics } from "../../db/topics";
import logo from "./../../assets/logo.jpg";
function TopicList({ setTopic }) {
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
    <Grid2
      position={"fixed"}
      item
      sx={{
        marginTop: "30px",
        display: {
          xs: "none",
          sm: "none",
          md: "none",
          lg: "block",
          // xl: "block",
        },
        width: "250px",
      }}
    >
      <List>
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
  );
}

export default TopicList;
