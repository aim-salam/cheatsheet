import * as React from "react";
import { useEffect, useState } from "react";
import { Stack, useColorScheme, IconButton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";

import Fuse from "fuse.js";
import ColumnsSwitch from "./ColumnsSwitch";
import TableCellsSwitch from "./TableCellsSwitch";

function TopicTable({ table, cheatsheets }) {
  const [rows, setRows] = useState([]);
  const [isOptions, setIsOptions] = useState(false);
  const { mode } = useColorScheme();

  const fuse = new Fuse(cheatsheets, {
    keys: ["item.table"],
    threshold: 0.0,
  });

  useEffect(() => {
    const result = [...fuse.search(table.table)];

    setRows(result);
  }, [cheatsheets]);

  function Row({ row }) {
    console.log(row.item.item);
    return (
      <TableCellsSwitch
        row={row}
        rows={rows}
        isOptions={isOptions}
        setRows={setRows}
      ></TableCellsSwitch>
    );
  }

  function RowList({ rows, provided, index }) {
    return rows.map((row, index) => (
      <Row
        key={row.item.item.action}
        row={row}
        provided={provided}
        index={index}
      ></Row>
    ));
  }

  return (
    <Stack>
      <Stack flexDirection={"row"}>
        <h2>{table.table}</h2>
        {/* if admin */}
        <IconButton color="primary" onClick={() => setIsOptions(!isOptions)}>
          <EditIcon />
        </IconButton>
      </Stack>
      <TableContainer
        component={Paper}
        sx={{ width: "100%", marginBottom: "100px" }}
      >
        <Table
          sx={{
            minWidth: 650,
          }}
          aria-label="simple table"
        >
          <ColumnsSwitch
            columns={table.columns}
            isOptions={isOptions}
          ></ColumnsSwitch>

          <TableBody>
            <RowList rows={rows}></RowList>
          </TableBody>
        </Table>
      </TableContainer>

      {/* if admin */}
      {/* <CreateRowButton rows={rows} setRows={setRows}></CreateRowButton> */}
    </Stack>
  );
}

export default TopicTable;
