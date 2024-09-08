import React from "react";
import { TableCell } from "@mui/material";

function ActionCell({ action }) {
  return (
    <TableCell component="th" scope="row">
      {action}
    </TableCell>
  );
}

export default ActionCell;
