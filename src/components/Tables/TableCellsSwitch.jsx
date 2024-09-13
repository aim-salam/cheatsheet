import React from "react";
import { TableRow, TableCell } from "@mui/material";
import ActionCell from "../TableCells/ActionCell";
import VisualCell from "../TableCells/VisualCell";
import GUICell from "../TableCells/GUICell";
import CLICell from "../TableCells/CLICell";
import CodeCell from "../TableCells/CodeCell";
import EmojiCell from "../TableCells/EmojiCell";
import OptionsCell from "../TableCells/OptionsCell";
import DescriptionCell from "../TableCells/DescriptionCell";
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
        verticalAlign: "baseLine",
      }}
    >
      {row.item.item.action ? (
        <ActionCell action={row.item.item.action} />
      ) : null}
      {row.item.item.description ? (
        <DescriptionCell action={row.item.item.description} />
      ) : null}
      {row.item.item.visual ? (
        <VisualCell visual={row.item.item.visual} />
      ) : null}
      {row.item.item.gui ? <GUICell gui={row.item.item.gui} /> : null}
      {row.item.item.cli ? <CLICell cli={row.item.item.cli} /> : null}
      {row.item.item.code ? <CodeCell code={row.item.item.code} /> : null}
      {row.item.item.emoji ? <EmojiCell emoji={row.item.item.emoji} /> : null}
      {isOptions && <OptionsCell row={row} rows={rows} setRows={setRows} />}
    </TableRow>
  );
}

export default TableCellsSwitch;
