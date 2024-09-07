import * as React from "react";
import { useEffect, useState } from "react";
import { Stack, Typography, useColorScheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  vs,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import Fuse from "fuse.js";
import GUICell from "./GUICell";

const codeString = `
const MyStyledSwitch = () => {
  return (
    <FormControlLabel
      control={<CustomSwitch />}
      label="Styled Switch"
    />
  );
};`;

const customCodeStyle = {
  borderRadius: "10px",
  marginTop: "0px",
  fontSize: "13px",
  fontFamily:
    'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
};

function TopicTable({ cheatsheets }) {
  const [rows, setRows] = useState([]);
  const { mode } = useColorScheme();

  const fuse = new Fuse(cheatsheets, {
    keys: ["table"],
    // threshold: 0.3,
  });

  useEffect(() => {
    const result = [...fuse.search("Basic Snapshotting")];
    // do the array sorting
    console.log(result[0]);
    setRows(result);
  }, []);

  return (
    <Stack>
      <h1>Navigation</h1>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table
          sx={{
            minWidth: 650,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Action</TableCell>
              <TableCell align="right">GUI</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.item.name + row.item.fat}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.item.action}
                </TableCell>
                <GUICell gui={row.item.gui}></GUICell>
                <TableCell align="right">
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
                      {codeString}
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default TopicTable;
