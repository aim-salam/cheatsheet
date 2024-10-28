import React from "react";
import { Box, CardMedia } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";

function AuthCardMedia() {
  return (
    <Box sx={styles.box}>
      <CardMedia
        sx={styles.cardMedia}
        component="img"
        image="https://images.cheatsheet.cam/images/image-1730098103659.webp"
      ></CardMedia>
    </Box>
  );
}

const styles = {
  box: {
    width: "50vw",
    height: "100vh",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",

    display: {
      xs: "none",
      sm: "flex",
    },
  },
  cardMedia: {
    width: "25vw",
    height: "25vw",
  },
};

export default AuthCardMedia;
