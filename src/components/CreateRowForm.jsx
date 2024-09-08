import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

function CreateRowForm({ handleCreateRow }) {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    action: "",
    visual: "",
    gui: "",
    cli: "",
    code: "",
    emoji: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    handleCreateRow(formValues);
    setFormValues({
      action: "",
      visual: "",
      gui: "",
      cli: "",
      code: "",
      emoji: "",
    });
    handleClose();
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        sx={{ marginTop: "10px" }}
      >
        Open Form
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Form</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="action"
            label="Action"
            type="text"
            fullWidth
            variant="outlined"
            value={formValues.action}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="visual"
            label="Visual"
            type="text"
            fullWidth
            variant="outlined"
            value={formValues.visual}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="gui"
            label="GUI"
            type="text"
            fullWidth
            variant="outlined"
            value={formValues.gui}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="cli"
            label="CLI"
            type="text"
            fullWidth
            variant="outlined"
            value={formValues.cli}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="code"
            label="Code"
            type="text"
            fullWidth
            variant="outlined"
            value={formValues.code}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="emoji"
            label="Emoji"
            type="text"
            fullWidth
            variant="outlined"
            value={formValues.emoji}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CreateRowForm;
