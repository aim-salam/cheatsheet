import React from "react";
import { CardMedia } from "@mui/material";

function AuthCardMedia() {
  return (
    <CardMedia
      sx={styles.cardMedia}
      component="img"
      image="https://images.cheatsheet.cam/images/image-1730098103659.webp"
    ></CardMedia>
  );
}

const styles = {
  cardMedia: {
    width: "50%",
    height: "50%",
    backgroundColor: "white",
    padding: "100px",
    display: {
      xs: "none",
      sm: "block",
    },
  },
};

export default AuthCardMedia;
