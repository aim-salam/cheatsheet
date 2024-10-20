import { Stack, Grid2, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import TopicTable from "../Tables/TopicTable";
import { cheatsheets } from "../../db/cheatsheets";
import Fuse from "fuse.js";
import CommentSection from "../CommentSection/CommentSection";
import { useTopic } from "../../contexts/TopicContext";
// Initialize Fuse.js outside the component to avoid unnecessary re-initialization on every render
const fuse = new Fuse(cheatsheets, {
  keys: ["topic"],
  threshold: 0.1,
});

function MainContent() {
  const [rows, setRows] = useState([]);
  const { topic, setTopic } = useTopic();
  const { topic: topicName, tables } = topic;

  useEffect(() => {
    if (topicName) {
      const result = fuse.search(topicName);
      setRows(result);
    }
  }, [topic]);

  return (
    <Grid2
      sx={{
        paddingRight: { xs: "20px" },
        paddingLeft: { xs: "20px", lg: "250px" },
        flex: "1 1 auto",
        minWidth: "320px",
        maxWidth: "1200px",

        margin: "0 auto",
        marginTop: "30px",
      }}
    >
      <Typography
        fontSize={40}
        fontWeight={"bold"}
        align="center"
        marginBottom={"60px"}
        marginTop={"40px"}
      >
        {topicName}
      </Typography>
      {/* Add main content here */}
      <Stack>
        {tables.map((table, index) => {
          return (
            <TopicTable
              key={table + index}
              table={table}
              cheatsheets={rows}
            ></TopicTable>
          );
        })}
      </Stack>
      <CommentSection></CommentSection>
    </Grid2>
  );
}

export default MainContent;
