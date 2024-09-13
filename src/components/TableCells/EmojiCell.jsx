import { TableCell, Typography } from "@mui/material";
import React from "react";

function EmojiCell({ emoji, sx, childrenStyle }) {
  return (
    <TableCell component="th" scope="row" sx={sx}>
      <Typography sx={childrenStyle} fontSize={25}>
        {emoji}
      </Typography>
    </TableCell>
  );
}

export default EmojiCell;
