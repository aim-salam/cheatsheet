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
  const customTableCellStyle = {
    borderRight: "1px solid #EDEDED",
  };
  return (
    <TableRow
      sx={{
        verticalAlign: "baseLine",

        borderBottom: "1px solid #EDEDED", // Custom bottom border
      }}
    >
      {row.item.item.action ? (
        <ActionCell
          action={row.item.item.action}
          customStyle={customTableCellStyle}
        />
      ) : null}
      {row.item.item.description ? (
        <DescriptionCell
          action={row.item.item.description}
          customStyle={customTableCellStyle}
        />
      ) : null}
      {row.item.item.visual ? (
        <VisualCell
          visual={row.item.item.visual}
          customStyle={customTableCellStyle}
        />
      ) : null}
      {row.item.item.gui ? (
        <GUICell gui={row.item.item.gui} customStyle={customTableCellStyle} />
      ) : null}
      {row.item.item.cli ? (
        <CLICell cli={row.item.item.cli} customStyle={customTableCellStyle} />
      ) : null}
      {row.item.item.code ? (
        <CodeCell
          code={row.item.item.code}
          customStyle={customTableCellStyle}
        />
      ) : null}
      {row.item.item.emoji ? (
        <EmojiCell
          emoji={row.item.item.emoji}
          customStyle={customTableCellStyle}
        />
      ) : null}
      {isOptions && (
        <OptionsCell
          row={row}
          rows={rows}
          setRows={setRows}
          customStyle={customTableCellStyle}
        />
      )}
    </TableRow>
  );
}

export default TableCellsSwitch;
