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
        {Object.entries(formValues.item).map(([key, value], index) => {
          if (key !== "id") {
            return (
              <TextField
                autoFocus
                margin="dense"
                name={key}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                type="text"
                fullWidth
                variant="outlined"
                value={value}
                onChange={handleChange}
              />
            );
          }
        })}
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
