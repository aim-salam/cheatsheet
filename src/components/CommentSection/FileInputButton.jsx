import { Box, LinearProgress, TextField } from "@mui/material";

export default function FileInputButton({
  uploading,
  progress,
  setImage,
  preview,
  setPreview,
}) {
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
    <Box sx={styles.box1}>
      <TextField
        type="file"
        inputProps={{ accept: "image/*" }}
        onChange={handleImageUpload}
      />
      {preview && (
        <Box
          component="img"
          src={preview}
          alt="Uploaded Image Preview"
          sx={styles.box2}
        />
      )}

      {uploading ? (
        <Box sx={styles.box3}>
          <LinearProgress
            color="secondary"
            variant="determinate"
            value={progress}
          />
        </Box>
      ) : null}
    </Box>
  );
}

const styles = {
  box1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  box2: { height: "100px", my: 2 },
  box3: { width: "100%", my: 2 },
};
