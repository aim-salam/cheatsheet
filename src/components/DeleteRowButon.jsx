import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteRowButon({ row, rows, setRows }) {
  function handleDeleteRow(id) {
    const updatedRows = rows.filter((row) => row.item.id !== id);
    setRows(updatedRows);
  }
  return (
    <IconButton color="secondary" onClick={() => handleDeleteRow(row.item.id)}>
      <DeleteIcon />
    </IconButton>
  );
}

export default DeleteRowButon;
