import React from "react";
import { Stack, TableCell, Typography } from "@mui/material";

function CLICell({ cli, sx, childrenStyle }) {
  const textSx = {
    color: "white",
    backgroundColor: "black",
    padding: 1,
    paddingLeft: 2,
    paddingRight: 2,
  };
  return (
    <TableCell component="th" scope="row">
      <Stack
        sx={{
          position: "relative",
          borderRadius: "10px",
          overflow: "hidden",
          //   position: "absolute",
          // right: 0,
          // top: 0,
          ...childrenStyle,
        }}
      >
        <Typography
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
