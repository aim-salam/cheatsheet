import React from "react";
import { CardMedia } from "@mui/material";
function ImageCell({ image_link, handleImageClick }) {
  return (
    <CardMedia
      key={image_link}
      component="img"
      sx={styles.cardMedia}
      onClick={() => handleImageClick(image_link)}
      image={image_link}
      alt="Visual image"
    />
  );
}

const styles = {
  cardMedia: {
    width: "150px",
    objectFit: "cover",
    "&:hover": {
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    },
  },
};

export default ImageCell;
