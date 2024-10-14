import React from "react";
import { TextField } from "@mui/material";
function TextFields({
  description,
  setDescription,
  title,
  setTitle,
  email,
  setEmail,
  phone,
  setPhone,
}) {
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  return (
    <>
      {/* <TextField
        fullWidth
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Phone"
        variant="outlined"
        value={phone}
        onChange={handlePhoneChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Title"
        variant="outlined"
        value={title}
        onChange={handleTitleChange}
        sx={{ mb: 2 }}
      /> */}
      <TextField
        fullWidth
        label="Description"
        variant="outlined"
        value={description}
        onChange={handleDescriptionChange}
        sx={{ mb: 2 }}
      />
    </>
  );
}

export default TextFields;
