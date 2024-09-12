import { TableCell, Typography } from "@mui/material";
import React from "react";

function EmojiCell({ emoji, sx }) {
  return (
    <TableCell component="th" scope="row" sx={sx}>
      <Typography fontSize={25}>{emoji}</Typography>
    </TableCell>
  );
}

export default EmojiCell;
