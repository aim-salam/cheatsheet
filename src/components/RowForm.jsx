import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

function RowForm({ row, open, setOpen, handleFinished }) {
  const defaultFormValues = {
    item: { action: "", visual: "", gui: "", cli: "", code: "", emoji: "" },
  };
  const [formValues, setFormValues] = useState(row ? row : defaultFormValues);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setFormValues({
      item: { ...formValues.item, [event.target.name]: event.target.value },
    });
  };

  const handleSubmit = () => {
    handleFinished(formValues);

    // setFormValues(defaultFormValues);

    handleClose();
  };

  useEffect(() => {
    // RowForm keep use previous data, so everytime open state changes, insert new data

    setFormValues(row ? row : defaultFormValues);
  }, []);
  return (
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
          value={formValues.item.action}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="visual"
          label="Visual"
          type="text"
          fullWidth
          variant="outlined"
          value={formValues.item.visual}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="gui"
          label="GUI"
          type="text"
          fullWidth
          variant="outlined"
          value={formValues.item.gui}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="cli"
          label="CLI"
          type="text"
          fullWidth
          variant="outlined"
          value={formValues.item.cli}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="code"
          label="Code"
          type="text"
          fullWidth
          variant="outlined"
          value={formValues.item.code}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="emoji"
          label="Emoji"
          type="text"
          fullWidth
          variant="outlined"
          value={formValues.item.emoji}
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
  );
}

export default RowForm;
