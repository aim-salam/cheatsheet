import React from "react";
import { TextField } from "@mui/material";
function TextFields({ comment, setComment, receiver_id, setReceiver }) {
  const handleDescriptionChange = (event) => {
    setComment(event.target.value);
  };

  const handleEmailChange = (event) => {
    setReceiver(event.target.value);
  };

  return (
    <>
      <TextField
        fullWidth
        label="Comment"
        variant="outlined"
        value={comment}
        onChange={handleDescriptionChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Reply to"
        variant="outlined"
        value={receiver_id}
        onChange={handleEmailChange}
        sx={{ mb: 2 }}
      />
    </>
  );
}

export default TextFields;
