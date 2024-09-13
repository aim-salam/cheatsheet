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
  const TableCellStyle = {
    padding: "0px",
  };
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
        <ActionCell action={row.item.item.action} sx={TableCellStyle} />
      ) : null}
      {row.item.item.description ? (
        <DescriptionCell
          action={row.item.item.description}
          sx={TableCellStyle}
        />
      ) : null}
      {row.item.item.visual ? (
        <VisualCell visual={row.item.item.visual} sx={TableCellStyle} />
      ) : null}
      {row.item.item.gui ? (
        <GUICell gui={row.item.item.gui} sx={TableCellStyle} />
      ) : null}
      {row.item.item.cli ? (
        <CLICell cli={row.item.item.cli} sx={TableCellStyle} />
      ) : null}
      {row.item.item.code ? (
        <CodeCell code={row.item.item.code} sx={TableCellStyle} />
      ) : null}
      {row.item.item.emoji ? (
        <EmojiCell emoji={row.item.item.emoji} sx={TableCellStyle} />
      ) : null}
      {isOptions && (
        <OptionsCell
          row={row}
          rows={rows}
          setRows={setRows}
          sx={TableCellStyle}
        />
      )}
    </TableRow>
  );
}

export default TableCellsSwitch;
