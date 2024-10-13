import React from "react";
import { Stack, TableCell, Typography } from "@mui/material";

function CLICell({ cli, customTableCellStyle, customFont }) {
  const textSx = {
    fontSize: customFont,
    color: "white",
    backgroundColor: "black",
    padding: 1,
    paddingLeft: 2,
    paddingRight: 2,
  };
  return (
    <TableCell component="th" scope="row" sx={customTableCellStyle}>
      <Stack
        sx={{
          position: "relative",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Typography
          fontSize={customFont}
          color="grey"
          sx={{
            backgroundColor: "#111111",
            width: "100%",
          }}
        >
          Copy
        </Typography>
        <Typography sx={textSx}> {cli}</Typography>
      </Stack>
    </TableCell>
  );
}

export default CLICell;
