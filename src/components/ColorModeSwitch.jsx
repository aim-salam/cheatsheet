import React from "react";
import { Stack, Switch, Typography, useColorScheme } from "@mui/material";

function ColorModeSwitch() {
  const { mode, setMode } = useColorScheme();

  function handleChange(event) {
    setMode(event.target.checked ? "dark" : "light");
  }

  return (
    <Stack flexDirection={"row"} alignItems={"center"}>
      <Switch onChange={handleChange}></Switch>
      <Typography>Dark mode</Typography>
    </Stack>
  );
}

export default ColorModeSwitch;
