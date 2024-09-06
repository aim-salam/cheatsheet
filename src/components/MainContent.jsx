import { Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import TopicTable from "./TopicTable";
import { cheatsheets } from "../db/cheatsheets";
import Fuse from "fuse.js";

function MainContent() {
  const [rows, setRows] = useState([...cheatsheets]);

  const fuse = new Fuse(cheatsheets, {
    keys: ["calories"],
    // threshold: 0.3,
  });

  useEffect(() => {
    console.log(fuse.search("99"));
  }, []);

  return (
    <Stack>
      <TopicTable key={1} cheatsheets={rows}></TopicTable>
      <TopicTable key={2} cheatsheets={rows}></TopicTable>
    </Stack>
  );
}

export default MainContent;
