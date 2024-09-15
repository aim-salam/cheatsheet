import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";
function ColumnsSwitch({ columns, isOptions }) {
  const customTableStyle = {
    fontSize: "17px",
    fontWeight: "bold",
    borderRight: "1px solid #EDEDED",
  };
  return (
    <TableHead>
      <TableRow>
        {columns.action ? (
          <TableCell sx={customTableStyle}>Action</TableCell>
        ) : null}
        {columns.description ? (
          <TableCell sx={customTableStyle}>Description</TableCell>
        ) : null}
        {columns.visual ? (
          <TableCell sx={customTableStyle}>Visual</TableCell>
        ) : null}
        {columns.gui ? <TableCell sx={customTableStyle}>GUI</TableCell> : null}
        {columns.cli ? <TableCell sx={customTableStyle}>CLI</TableCell> : null}
        {columns.code ? (
          <TableCell sx={customTableStyle}>Code</TableCell>
        ) : null}
        {columns.emoji ? (
          <TableCell sx={customTableStyle}>Emoji</TableCell>
        ) : null}
        {isOptions ? (
          <TableCell sx={customTableStyle}>Options</TableCell>
        ) : null}
      </TableRow>
    </TableHead>
  );
}

export default ColumnsSwitch;
