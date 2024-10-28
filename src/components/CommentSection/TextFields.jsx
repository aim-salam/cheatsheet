import React from "react";
import { TextField } from "@mui/material";
function TextFields({
  comment,
  setComment,
  receiverEmail,
  setReceiverEmail,
  editingIndex,
}) {
  const handleDescriptionChange = (event) => {
    setComment(event.target.value);
  };

  const handleEmailChange = (event) => {
    setReceiverEmail(event.target.value);
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
        value={receiverEmail}
        onChange={handleEmailChange}
        sx={{ mb: 2 }}
        disabled={editingIndex !== null}
      />
    </>
  );
}

export default TextFields;
