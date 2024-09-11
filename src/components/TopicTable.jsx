import * as React from "react";
import { useEffect, useState } from "react";
import { Stack, useColorScheme, Button, IconButton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";

import Fuse from "fuse.js";
import GUICell from "./GUICell";
import CodeCell from "./CodeCell";
import ActionCell from "./ActionCell";
import VisualCell from "./VisualCell";
import CLICell from "./CLICell";
import EmojiCell from "./EmojiCell";
import CreateRowButton from "./CreateRowButton";
import OptionsCell from "./OptionsCell";

function TopicTable({ cheatsheets }) {
  const [rows, setRows] = useState([]);
  const [isOptions, setIsOptions] = useState(false);
  const { mode } = useColorScheme();

  const fuse = new Fuse(cheatsheets, {
    keys: ["table"],
    threshold: 0.0,
  });

  useEffect(() => {
    const result = [...fuse.search("element > body childrens element")];
    // do the array sorting
    setRows(result);
  }, []);

  function Row({ row }) {
    return (
      <TableRow
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          "& td": {
            borderBottom: "0px", // Change color and width as needed
          },
          "& th": {
            borderBottom: "0px", // Change color and width as needed
          },
        }}
      >
        <TableCell>
          <ActionCell action={row.item.action} />
        </TableCell>
        <TableCell>
          <VisualCell visual={row.item.visual} />
        </TableCell>
        {/* <TableCell>
          <GUICell gui={row.item.gui} />
        </TableCell> */}
        <TableCell>
          <CodeCell code={row.item.code} />
        </TableCell>
        {/* <TableCell>
          <CLICell cli={row.item.cli} />
        </TableCell> */}
        <TableCell>
          <EmojiCell emoji={row.item.emoji} />
        </TableCell>
        {isOptions && (
          <TableCell>
            <OptionsCell row={row} rows={rows} setRows={setRows} />
          </TableCell>
        )}
      </TableRow>
    );
  }

  function RowList({ rows, provided, index }) {
    return rows.map((row, index) => (
      <Row row={row} provided={provided} index={index}></Row>
    ));
  }

  return (
    <Stack alignItems={"flex-end"}>
      <Stack flexDirection={"row"}>
        <h1>Navigation</h1>
        {/* if admin */}
        <IconButton color="primary" onClick={() => setIsOptions(!isOptions)}>
          <EditIcon />
        </IconButton>
      </Stack>
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
              <TableCell>Visual</TableCell>
              {/* <TableCell>GUI</TableCell> */}
              {/* <TableCell>CLI</TableCell> */}
              <TableCell>Code</TableCell>
              <TableCell>Emoji</TableCell>
              {isOptions ? <TableCell>Options</TableCell> : null}
            </TableRow>
          </TableHead>

          <TableBody>
            <RowList rows={rows}></RowList>
          </TableBody>
        </Table>
      </TableContainer>
      {/* if admin */}
      <CreateRowButton rows={rows} setRows={setRows}></CreateRowButton>
    </Stack>
  );
}

export default TopicTable;
