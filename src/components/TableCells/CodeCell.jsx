import React from "react";
import { TableCell, Stack, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  vs,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeCell({ mode, code, codeType, customTableCellStyle, customFont }) {
  const customCodeStyle = {
    // fontSize: customFont,
    marginTop: "0px",
    borderRadius: "10px",
    fontFamily:
      'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
  };

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
    <TableCell sx={customTableCellStyle}>
      {code !== " " ? (
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
            sx={{
              backgroundColor: "#111111",
              width: "100%",
              textAlign: "right",
              cursor: "pointer",
              paddingRight: "10px",
            }}
            onClick={copyToClipboard}
          >
            Copy
          </Typography>
          <SyntaxHighlighter
            language={codeType}
            style={mode === "dark" ? vscDarkPlus : prism}
            customStyle={customCodeStyle}
          >
            {code}
          </SyntaxHighlighter>
        </Stack>
      ) : null}
    </TableCell>
  );
}

export default CodeCell;
