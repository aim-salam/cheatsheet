import React from "react";
import { TableCell, Typography } from "@mui/material";

function ActionCell({ action, sx }) {
  return (
    <TableCell sx={{ ...sx, paddingLeft: "20px" }} component="th" scope="row">
      <Typography> {action}</Typography>
    </TableCell>
  );
}

export default ActionCell;
