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
import { topics } from "../db/topics";
import logo from "./../assets/logo.jpg";
function TopicList({ setTopic }) {
  function Header({ topic }) {
    if (topic.type === "parent") {
      return (
        <Typography
          marginTop={"20px"}
          paddingLeft={"40px"}
          paddingRight={"20px"}
          fontSize={"18px"}
          fontWeight={"bold"}
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
                alt="Remy Sharp"
                src={topic.imageLink ? topic.imageLink : logo}
                variant="rounded"
              />
            </ListItemAvatar>
            {/* <ListItemText primary={topic.topic} /> */}
            <Typography
              fontWeight={topic.type === "children" ? "bold" : null}
              fontSize={"15px"}
            >
              {topic.topic}
            </Typography>
          </ListItemButton>
        </Stack>
      ))}
    </List>
    // <ul>

    // </ul>
  );
}

export default TopicList;
