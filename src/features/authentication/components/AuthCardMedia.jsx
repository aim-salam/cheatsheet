import React from "react";
import { CardMedia } from "@mui/material";

function AuthCardMedia() {
  return (
    <CardMedia
      sx={styles.cardMedia}
      component="img"
      image="https://images.cheatsheet.cam/images/state.webp"
    ></CardMedia>
  );
}

const styles = {
  cardMedia: {
    width: "50%",
    backgroundColor: "#e6e3e3",
    display: {
      xs: "none",
      sm: "block",
    },
  },
};

export default AuthCardMedia;
