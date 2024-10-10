import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

export default function FileInputButton() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);

      // Create a preview of the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        mr: 2,
        ml: 2,
        alignItems: "center",
      }}
    >
      <TextField
        type="file"
        inputProps={{ accept: "image/*" }} // Accept only image files
        onChange={handleImageUpload}
      />
      {preview && (
        <Box
          component="img"
          src={preview}
          alt="Uploaded Image Preview"
          sx={{ height: "50px", mr: 2 }}
        />
      )}
    </Box>
  );
}
