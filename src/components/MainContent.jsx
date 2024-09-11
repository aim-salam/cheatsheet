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
    const result = fuse.search(topic);
    const reformatResult = result.map((item) => item);

    setRows([...result]);
  }, [topic]);

  return (
    <Stack>
      <TopicTable key={1} cheatsheets={rows}></TopicTable>
      {/* <TopicTable key={2} cheatsheets={rows}></TopicTable> */}
    </Stack>
  );
}

export default MainContent;
