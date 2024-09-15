import React from "react";
import { TableCell, Typography } from "@mui/material";

function AttentionCell({ attention, customTableCellStyle, customFont }) {
  console.log("hOLLLAAAAAA");
  return (
    <TableCell sx={customTableCellStyle} component="th" scope="row">
      <Typography
        fontSize={customFont}
        fontWeight={"bold"}
        sx={{ width: "80px" }}
      >
        sjskj
      </Typography>
    </TableCell>
  );
}

export default AttentionCell;
