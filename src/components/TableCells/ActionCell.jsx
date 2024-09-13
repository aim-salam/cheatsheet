import React from "react";
import { TableCell, Typography } from "@mui/material";

function ActionCell({ action, customTableCellStyle, customFont }) {
  return (
    <TableCell sx={customTableCellStyle} component="th" scope="row">
      <Typography fontSize={customFont}> {action}</Typography>
    </TableCell>
  );
}

export default ActionCell;
