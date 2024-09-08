import React, { useState } from "react";
import { Button } from "@mui/material";
import RowForm from "./RowForm";

function CreateRowForm({ handleCreateRow }) {
  const [open, setOpen] = useState(false);
  const defaultFormValues = {
    action: "",
    visual: "",
    gui: "",
    cli: "",
    code: "",
    emoji: "",
  };
  const [formValues, setFormValues] = useState(defaultFormValues);

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

    setFormValues(defaultFormValues);

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
      <RowForm
        open={open}
        formValues={formValues}
        handleClose={handleClose}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></RowForm>
    </>
  );
}

export default CreateRowForm;
