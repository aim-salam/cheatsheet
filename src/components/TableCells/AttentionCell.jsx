import React from "react";
import { TableCell, Typography } from "@mui/material";

function AttentionCell({ attention, customTableCellStyle, customFont }) {
  console.log("hOLLLAAAAAA");
  return (
    <TableCell sx={customTableCellStyle} component="th" scope="row">
      <Typography
        fontSize={customFont}
        sx={{ width: "100px", color: "#821131" }}
      >
        {attention}
      </Typography>
    </TableCell>
  );
}

export default AttentionCell;
