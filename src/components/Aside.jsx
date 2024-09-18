import React from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Stack,
  Typography,
  Grid2,
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
    <Grid2
      // item
      xs={12}
      sm={3}
      md={2}
      sx={{ display: { xs: "none", sm: "block" }, width: "250px" }}
    >
      <List>
        {topics.map((topic) => (
          <Stack
            key={topic.topic}
            marginTop={topic.type === "parent" ? "40px" : null}
            marginBottom={topic.type === "parent" ? "10px" : null}
            height={"40px"}
          >
            {/* <Header topic={topic}></Header> */}
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
                  sx={{
                    width: topic.type === "parent" ? "30px" : "25px",
                    height: topic.type === "parent" ? "30px" : "25px",
                  }}
                  alt="Remy Sharp"
                  src={topic.imageLink ? topic.imageLink : logo}
                  variant="rounded"
                />
              </ListItemAvatar>

              <Typography
                fontWeight={topic.type === "grandchildren" ? null : "bold"}
                fontSize={topic.type === "parent" ? "25px" : "17px"}
              >
                {topic.topic}
              </Typography>
            </ListItemButton>
          </Stack>
        ))}
      </List>
    </Grid2>

    // <ul>

    // </ul>
  );
}

export default TopicList;
