import React from "react";
import { TableCell, Typography } from "@mui/material";

function ActionCell({ action, customStyle }) {
  return (
    <TableCell sx={customStyle} component="th" scope="row">
      <Typography> {action}</Typography>
    </TableCell>
  );
}

export default ActionCell;
