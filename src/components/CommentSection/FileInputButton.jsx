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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
          sx={{ height: "100px", my: 2 }}
        />
      )}

      {uploading ? (
        <Box sx={{ width: "100%", my: 2 }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      ) : null}
    </Box>
  );
}
