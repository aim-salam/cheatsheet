import React, { useState } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import RowForm from "../Modals/RowFormModal";
function EditRowButton({ row, rows, setRows }) {
  const [open, setOpen] = useState(false);

  function handleEditRow(newRow) {
    console.log(newRow);
    const newRows = rows.map((row) => {
      return row.item.item.id === newRow.item.item.id ? newRow : row;
    });

    setRows([...newRows]);
  }
  return (
    <>
      <IconButton
        color="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        <EditIcon />
      </IconButton>
      <RowForm
        row={row}
        open={open}
        setOpen={setOpen}
        handleFinished={handleEditRow}
      ></RowForm>
    </>
  );
}

export default EditRowButton;
