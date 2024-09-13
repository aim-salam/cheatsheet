import { TableCell, Typography } from "@mui/material";
import React from "react";

function EmojiCell({ emoji, customStyle }) {
  return (
    <TableCell component="th" scope="row" sx={customStyle}>
      <Typography fontSize={25}>{emoji}</Typography>
    </TableCell>
  );
}

export default EmojiCell;
