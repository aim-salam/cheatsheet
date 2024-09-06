import { Stack } from "@mui/material";
import React from "react";
import TopicTable from "./TopicTable";

function MainContent() {
  return (
    <Stack>
      <TopicTable></TopicTable>
      <TopicTable></TopicTable>
    </Stack>
  );
}

export default MainContent;
