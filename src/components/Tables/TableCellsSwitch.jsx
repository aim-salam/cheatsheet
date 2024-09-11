import React from "react";
import { TableRow, TableCell } from "@mui/material";
import ActionCell from "../TableCells/ActionCell";
import VisualCell from "../TableCells/VisualCell";
import GUICell from "../TableCells/GUICell";
import CLICell from "../TableCells/CLICell";
import CodeCell from "../TableCells/CodeCell";
import EmojiCell from "../TableCells/EmojiCell";
import OptionsCell from "../TableCells/OptionsCell";
function TableCellsSwitch({ row, rows, isOptions, setRows }) {
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
      {row.item.item.action ? (
        <TableCell>
          <ActionCell action={row.item.item.action} />
        </TableCell>
      ) : null}
      {row.item.item.visual ? (
        <TableCell>
          <VisualCell visual={row.item.item.visual} />
        </TableCell>
      ) : null}
      {row.item.item.gui ? (
        <TableCell>
          <GUICell gui={row.item.item.gui} />
        </TableCell>
      ) : null}
      {row.item.item.cli ? (
        <TableCell>
          <CLICell cli={row.item.item.cli} />
        </TableCell>
      ) : null}
      {row.item.item.code ? (
        <TableCell>
          <CodeCell code={row.item.item.code} />
        </TableCell>
      ) : null}
      {row.item.item.emoji ? (
        <TableCell>
          <EmojiCell emoji={row.item.item.emoji} />
        </TableCell>
      ) : null}
      {isOptions && (
        <TableCell>
          <OptionsCell row={row} rows={rows} setRows={setRows} />
        </TableCell>
      )}
    </TableRow>
  );
}

export default TableCellsSwitch;
