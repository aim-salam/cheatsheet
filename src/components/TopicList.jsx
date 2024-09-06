import React from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Stack,
  Typography,
} from "@mui/material";

import logo from "./../assets/logo.jpg";
function TopicList() {
  const topics = [
    {
      topic: "React",
      type: "parent",
      imageLink: "https://images.cheatsheet.cam/images/react.webp",
    },
    {
      topic: "Component",
      type: "children",
      imageLink: "https://images.cheatsheet.cam/images/component.webp",
    },
    {
      topic: "State",
      type: "children",
      imageLink: "https://images.cheatsheet.cam/images/state.webp",
    },
    {
      topic: "HTML",
      type: "parent",
      imageLink: "https://images.cheatsheet.cam/images/html.webp",
    },
    {
      topic: "CSS",
      type: "parent",
      imageLink: "https://images.cheatsheet.cam/images/css.webp",
    },
  ];

  function Header({ topic }) {
    if (topic.type === "parent") {
      return (
        <Typography
          marginTop={"20px"}
          paddingLeft={"40px"}
          paddingRight={"20px"}
        >
          {topic.type === "parent" ? `${topic.topic}` : null}
        </Typography>
      );
    }
  }
  return (
    <List>
      {topics.map((topic) => (
        <Stack key={topic.topic}>
          <Header topic={topic}></Header>
          <ListItemButton sx={{ paddingLeft: "40px", paddingRight: "30px" }}>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src={topic.imageLink ? topic.imageLink : logo}
                variant="rounded"
              />
            </ListItemAvatar>
            <ListItemText primary={topic.topic} />
          </ListItemButton>
        </Stack>
      ))}
    </List>
    // <ul>

    // </ul>
  );
}

export default TopicList;
