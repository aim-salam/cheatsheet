import React from "react";
import { CardMedia } from "@mui/material";

function AuthCardMedia() {
  return (
    <CardMedia
      sx={{
        width: "50%",
        backgroundColor: "#e6e3e3",
      }}
      component="img"
      image="https://images.cheatsheet.cam/images/state.webp"
    ></CardMedia>
  );
}

export default AuthCardMedia;
