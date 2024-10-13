import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import RowForm from "../Modals/RowFormModal";

function CreateRowButton({ rows, setRows }) {
  const [open, setOpen] = useState(false);

  function handleCreateRow(newRow) {
    // prevent indexing problem 2024... and Z...
    const date = new Date().toISOString();
    const reverseDate = date.split("").reverse().join("");
    const finalDate = reverseDate.split("Z").join("");

    // add ID
    newRow.item.item.id = finalDate;
    console.log("new row");
    console.log(newRow);
    setRows([...rows, newRow]);
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setOpen(true);
        }}
        sx={{ marginTop: "10px" }}
      >
        <Typography> Create row</Typography>
      </Button>
      <RowForm
        // row={rows[0]}
        type="create"
        open={open}
        setOpen={setOpen}
        handleFinished={handleCreateRow}
      ></RowForm>
    </>
  );
}

export default CreateRowButton;
