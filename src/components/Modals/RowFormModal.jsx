import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

function RowForm({ row, type, open, setOpen, handleFinished }) {
  const defaultFormValues = {
    item: {
      item: {
        action: "",
        description: [" "],
        visual: [{ text: "", link: "" }],
        gui: "",
        cli: "",
        code: "",
        codeType: "",
        emoji: "",
        priority: "",
      },
    },
  };
  const [formValues, setFormValues] = useState(defaultFormValues);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    if (event.target.name === "description") {
      setFormValues({
        item: {
          item: {
            ...formValues.item.item,
            [event.target.name]: [event.target.value],
          },
        },
      });
    } else if (event.target.name === "visual") {
      setFormValues({
        item: {
          item: {
            ...formValues.item.item,
            [event.target.name]: [{ text: "", link: event.target.value }],
          },
        },
      });
    } else {
      setFormValues({
        item: {
          item: {
            ...formValues.item.item,
            [event.target.name]: event.target.value,
          },
        },
      });
    }
  };

  const handleSubmit = () => {
    handleFinished(formValues);

    // setFormValues(defaultFormValues);

    handleClose();
  };

  useEffect(() => {
    // RowForm keep use previous data, so everytime open state changes, insert new data

    if (row) {
      for (const key in row.item.item) {
        console.log("key");
        console.log(`${row[key]}  ${row[key]}`);
        if (!row[key]) {
          delete row[key];
        }
      }

      setFormValues(row);
    } else {
      setFormValues(defaultFormValues);
    }
  }, [open]);
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Form</DialogTitle>
      <DialogContent>
        {Object.entries(formValues.item.item).map(([key, value], index) => {
          if (key !== "id") {
            console.log(key);

            return (
              <TextField
                // autoFocus
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
