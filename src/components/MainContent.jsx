import { Stack, Grid2, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import TopicTable from "./Tables/TopicTable";
import { cheatsheets } from "../db/cheatsheets";
import Fuse from "fuse.js";

function MainContent({ topic }) {
  const [rows, setRows] = useState([]);

  const fuse = new Fuse(cheatsheets, {
    keys: ["topic"],
    threshold: 0.1,
  });

  useEffect(() => {
    const result = fuse.search(topic.topic);
    console.log(topic);

    setRows([...result]);
  }, [topic]);

  return (
    <Grid2
      // item
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
        {topic.topic}
      </Typography>
      {/* Add main content here */}
      <Stack>
        {topic.tables.map((table, index) => {
          return (
            <TopicTable
              key={table.table}
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
