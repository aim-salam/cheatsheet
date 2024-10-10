import { Stack, Grid2, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import TopicTable from "../Tables/TopicTable";
import { cheatsheets } from "../../db/cheatsheets";
import Fuse from "fuse.js";
import BookingSection from "../BookingSection/BookingSection";

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
      // xs={12} // Full width for extra small screens
      // sm={9} // 75% width for small screens
      // md={10} // 83% width for medium screens and above
      sx={{
        paddingRight: { xs: "20px" }, // Adjust padding based on screen size
        paddingLeft: { xs: "20px", lg: "250px" }, // Adjust padding based on screen size
        flex: "1 1 auto",
        minWidth: "320px", // Prevent shrinking below a certain width
        // maxWidth: "960px", // Optional: Set a max width if needed

        margin: "0 auto", // Center the contenth
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
              key={table}
              table={table}
              cheatsheets={rows}
            ></TopicTable>
          );
        })}
      </Stack>
      <BookingSection></BookingSection>
    </Grid2>
  );
}

export default MainContent;
