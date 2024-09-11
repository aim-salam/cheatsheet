import React from "react";
import { TableCell, Stack, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  vs,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const customCodeStyle = {
  borderRadius: "10px",
  marginTop: "0px",
  fontSize: "13px",
  fontFamily:
    'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
};

function CodeCell({ mode, code }) {
  return (
    <TableCell align="left">
      <Stack
        sx={{
          position: "relative",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <SyntaxHighlighter
          language="javascript"
          style={mode === "dark" ? vscDarkPlus : prism}
          customStyle={customCodeStyle}
        >
          {code}
        </SyntaxHighlighter>
        <Typography
          color="grey"
          position={"absolute"}
          right={0}
          top={0}
          sx={{
            backgroundColor: "#111111",
            width: "100%",
          }}
        >
          Copy
        </Typography>
      </Stack>
    </TableCell>
  );
}

export default CodeCell;
