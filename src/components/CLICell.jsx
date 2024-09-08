import React from "react";
import { TableCell, Typography } from "@mui/material";

function CLICell({ cli }) {
  const textSx = {
    color: "white",
    backgroundColor: "black",
    padding: 1,
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 2,
  };
  return (
    <TableCell component="th" scope="row">
      <Typography sx={textSx}> {cli}</Typography>
    </TableCell>
  );
}

export default CLICell;
