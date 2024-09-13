import React from "react";
import { TableCell, Typography } from "@mui/material";

function DescriptionCell({ action, customStyle }) {
  return (
    <TableCell sx={customStyle} component="th" scope="row">
      <Typography sx={{ width: "100px" }}>{action}</Typography>
    </TableCell>
  );
}

export default DescriptionCell;
