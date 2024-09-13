import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";
function ColumnsSwitch({ columns, isOptions }) {
  return (
    <TableHead>
      <TableRow>
        {columns.action ? <TableCell>Action</TableCell> : null}
        {columns.description ? <TableCell>Description</TableCell> : null}
        {columns.visual ? <TableCell>Visual</TableCell> : null}
        {columns.gui ? <TableCell>GUI</TableCell> : null}
        {columns.cli ? <TableCell>CLI</TableCell> : null}
        {columns.code ? <TableCell>Code</TableCell> : null}
        {columns.emoji ? <TableCell>Emoji</TableCell> : null}
        {isOptions ? <TableCell>Options</TableCell> : null}
      </TableRow>
    </TableHead>
  );
}

export default ColumnsSwitch;
