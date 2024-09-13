import React from "react";
import { TableCell, Typography } from "@mui/material";

function DescriptionCell({ action, customTableCellStyle, customFont }) {
  return (
    <TableCell sx={customTableCellStyle} component="th" scope="row">
      <Typography fontSize={customFont} sx={{ width: "100px" }}>
        {action}
      </Typography>
    </TableCell>
  );
}

export default DescriptionCell;
