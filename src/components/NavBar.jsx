import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import logo from "./../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
function NavBar() {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      justifyContent={"space-between"}
      paddingRight={"20px"}
      paddingLeft={"20px"}
      paddingTop={"5px"}
      paddingBottom={"5px"}
    >
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <Avatar alt="Sigma School Logo" src={logo} sizes="60px" />
        <Typography>Cheatsheet</Typography>
      </Stack>
      <ColorModeSwitch></ColorModeSwitch>
    </Stack>
  );
}

export default NavBar;
