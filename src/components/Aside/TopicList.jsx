import React from "react";
import {
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  Stack,
  Typography,
} from "@mui/material";
import { topics } from "../../db/topics";
import { useTopic } from "../../contexts/TopicContext";
import { useAside } from "../../contexts/AsideContext";

const getStyle = (type) =>
  type === "parent" ? styles.parentStyle : styles.childStyle;

function TopicList() {
  const { isAside, setIsAside } = useAside();
  const { topic, setTopic } = useTopic();
  return (
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
              sx={styles.listItemButton}
              onClick={() => {
                setTopic(topic);
              }}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{ width: avatarSize, height: avatarSize }}
                  alt={topicName}
                  src={
                    imageLink ||
                    "https://images.cheatsheet.cam/images/image-1730098103659.webp"
                  }
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
  );
}

const styles = {
  parentStyle: {
    marginTop: "40px",
    marginBottom: "10px",
    fontSize: "25px",
    avatarSize: "30px",
  },
  childStyle: {
    fontSize: "17px",
    avatarSize: "25px",
  },
  listItemButton: {
    paddingLeft: "40px",
    paddingRight: "30px",
    paddingTop: "1px",
    paddingBottom: "1px",
  },
};

export default TopicList;
