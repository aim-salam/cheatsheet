import * as React from "react";
import { useEffect } from "react";
import { Stack, Typography, useColorScheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  vs,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 12, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

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

function TopicTable() {
  const { mode } = useColorScheme();

  return (
    <TableContainer component={Paper} sx={{ width: "100%" }}>
      <Table
        sx={
          {
            // minWidth: 650,
          }
        }
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right" component={"pre"}>
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
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
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TopicTable;