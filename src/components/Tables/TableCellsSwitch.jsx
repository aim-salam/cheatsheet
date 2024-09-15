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

  const customFont = "17px";
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
          customTableCellStyle={customTableCellStyle}
          customFont={customFont}
        />
      ) : null}
      {row.item.item.description ? (
        <DescriptionCell
          action={row.item.item.description}
          customTableCellStyle={customTableCellStyle}
          customFont={customFont}
        />
      ) : null}
      {row.item.item.visual ? (
        <VisualCell
          visual={row.item.item.visual}
          customTableCellStyle={customTableCellStyle}
          customFont={customFont}
        />
      ) : null}
      {row.item.item.gui ? (
        <GUICell
          gui={row.item.item.gui}
          customTableCellStyle={customTableCellStyle}
          customFont={customFont}
        />
      ) : null}
      {row.item.item.cli ? (
        <CLICell
          cli={row.item.item.cli}
          customTableCellStyle={customTableCellStyle}
          customFont={customFont}
        />
      ) : null}
      {row.item.item.code ? (
        <CodeCell
          code={row.item.item.code}
          customTableCellStyle={customTableCellStyle}
          customFont={customFont}
        />
      ) : null}
      {row.item.item.emoji ? (
        <EmojiCell
          emoji={row.item.item.emoji}
          customTableCellStyle={customTableCellStyle}
          customFont={customFont}
        />
      ) : null}
      {isOptions && (
        <OptionsCell
          row={row}
          rows={rows}
          setRows={setRows}
          customTableCellStyle={customTableCellStyle}
          customFont={customFont}
        />
      )}
    </TableRow>
  );
}

export default TableCellsSwitch;
