import React from "react";
import { TableCell, Typography } from "@mui/material";

function ActionCell({ action }) {
  return (
    <TableCell component="th" scope="row">
      <Typography> {action}</Typography>
    </TableCell>
  );
}

export default ActionCell;
