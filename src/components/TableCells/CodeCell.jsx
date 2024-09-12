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
  marginTop: "20px",
  fontFamily:
    'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
};

function CodeCell({ mode, code, sx }) {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        // alert("Code copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy code: ", err);
      });
  };
  return (
    <TableCell align="left" sx={sx}>
      <Stack
        sx={{
          width: "300px",
          position: "relative",
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        <Typography
          color="grey"
          position="absolute"
          sx={{
            backgroundColor: "#111111",
            width: "100%",
            textAlign: "right",
            cursor: "pointer",
            // padding: "5px",
            paddingRight: "10px",
            // zIndex: 1,
          }}
          onClick={copyToClipboard}
        >
          Copy
        </Typography>
        <SyntaxHighlighter
          language="html"
          style={mode === "dark" ? vscDarkPlus : prism}
          customStyle={customCodeStyle}
        >
          {code}
        </SyntaxHighlighter>
      </Stack>
    </TableCell>
  );
}

export default CodeCell;
