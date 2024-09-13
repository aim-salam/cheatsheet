import { TableCell, Typography } from "@mui/material";
import React from "react";

function EmojiCell({ emoji, customTableCellStyle, customFont }) {
  return (
    <TableCell component="th" scope="row" sx={customTableCellStyle}>
      <Typography fontSize={25}>{emoji}</Typography>
    </TableCell>
  );
}

export default EmojiCell;
