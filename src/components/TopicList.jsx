import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Stack,
  Typography,
} from "@mui/material";

import logo from "./../assets/logo.jpg";
function TopicList() {
  const topics = [
    { topic: "React", type: "parent" },
    { topic: "Component", type: "children" },
    { topic: "State", type: "children" },
    { topic: "HTML", type: "parent" },
    { topic: "CSS", type: "parent" },
  ];

  function Header({ topic }) {
    if (topic.type === "parent") {
      return (
        <Typography marginTop={"20px"}>
          {topic.type === "parent" ? `${topic.topic}` : null}
        </Typography>
      );
    }
  }
  return (
    <List>
      {topics.map((topic) => (
        <Stack>
          <Header topic={topic}></Header>
          <ListItemButton key={topic.topic}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={logo} variant="rounded" />
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
