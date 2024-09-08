import { TableCell, Typography } from "@mui/material";
import React from "react";

function EmojiCell({ emoji }) {
  console.log(emoji);
  return (
    <TableCell component="th" scope="row">
      <Typography fontSize={25}>{emoji}</Typography>
    </TableCell>
  );
}

export default EmojiCell;
