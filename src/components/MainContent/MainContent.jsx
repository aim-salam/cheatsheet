import { Stack, Grid2, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import TopicTable from "../Tables/TopicTable";
import { cheatsheets } from "../../db/cheatsheets";
import Fuse from "fuse.js";

// Initialize Fuse.js outside the component to avoid unnecessary re-initialization on every render
const fuse = new Fuse(cheatsheets, {
  keys: ["topic"],
  threshold: 0.1,
});

function MainContent({ topic }) {
  const [rows, setRows] = useState([]);
  const { topic: topicName, tables } = topic;

  useEffect(() => {
    if (topicName) {
      const result = fuse.search(topicName);
      setRows(result);
    }
  }, [topic]);

  return (
    <Grid2
      item
      xs={12}
      sm={9}
      md={10}
      sx={{ paddingRight: "40px", flex: "1 1 auto" }}
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
              key={table}
              table={table}
              cheatsheets={rows}
            ></TopicTable>
          );
        })}
      </Stack>
    </Grid2>
  );
}

export default MainContent;
