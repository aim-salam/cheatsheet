import { Stack } from "@mui/material";
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
    <Stack>
      {topic.tables.map((table, index) => {
        return (
          <TopicTable key={table} table={table} cheatsheets={rows}></TopicTable>
        );
      })}
    </Stack>
  );
}

export default MainContent;
