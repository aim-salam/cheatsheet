import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import logo from "./../assets/logo.jpg";
import ColorModeSwitch from "./Switch/ColorModeSwitch";
function NavBar() {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Avatar alt="Sigma School Logo" src={logo} sizes="60px" />

        <Typography fontSize={23} fontWeight={"600"} variant="h1">
          Cheatsheet
        </Typography>
      </Stack>
      <ColorModeSwitch></ColorModeSwitch>
    </Stack>
  );
}

export default NavBar;
