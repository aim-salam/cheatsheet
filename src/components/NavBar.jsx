import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import logo from "./../assets/logo.jpg";
function NavBar() {
  return (
    <Stack direction="row" spacing={2} alignItems={"center"}>
      <Avatar alt="Sigma School Logo" src={logo} sizes="60px" />
      <Typography>Sigma School</Typography>
    </Stack>
  );
}

export default NavBar;
