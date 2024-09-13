import React from "react";
import { TableCell, Typography } from "@mui/material";

function DescriptionCell({ action, sx, childrenStyle }) {
  return (
    <TableCell sx={sx} component="th" scope="row">
      <Typography sx={{ width: "100px", ...childrenStyle }}>
        {action}
      </Typography>
    </TableCell>
  );
}

export default DescriptionCell;
