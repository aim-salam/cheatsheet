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
import AttentionCell from "../TableCells/AttentionCell";
function TableCellsSwitch({ row, rows, isOptions, setRows }) {
  const customTableCellStyle = {
    borderRight: "1px solid #EDEDED",
  };

  console.log(row.item.item.attention);

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
          key={row.item.item.action + "action"}
          action={row.item.item.action}
          customTableCellStyle={customTableCellStyle}
          customFont={customFont}
        />
      ) : null}
      {row.item.item.description ? (
        <DescriptionCell
          key={row.item.item.action + "desctiption"}
          action={row.item.item.description}
          customTableCellStyle={customTableCellStyle}
          customFont={customFont}
        />
      ) : null}
      {row.item.item.visual ? (
        <VisualCell
          key={row.item.item.action + "visual"}
          visual={row.item.item.visual}
          customTableCellStyle={customTableCellStyle}
          customFont={customFont}
        />
      ) : null}
      {row.item.item.gui ? (
        <GUICell
          key={row.item.item.action + "gui"}
          gui={row.item.item.gui}
          customTableCellStyle={customTableCellStyle}
          customFont={customFont}
        />
      ) : null}
      {row.item.item.cli ? (
        <CLICell
          key={row.item.item.action + "cli"}
          cli={row.item.item.cli}
          customTableCellStyle={customTableCellStyle}
          customFont={customFont}
        />
      ) : null}
      {row.item.item.code ? (
        <CodeCell
          key={row.item.item.action + "code"}
          code={row.item.item.code}
          customTableCellStyle={customTableCellStyle}
          customFont={customFont}
        />
      ) : null}
      {row.item.item.attention ? (
        <AttentionCell
          key={row.item.item.action + "attention"}
          attention={row.item.item.attention}
          customTableCellStyle={customTableCellStyle}
          customFont={customFont}
        />
      ) : null}
      {row.item.item.emoji ? (
        <EmojiCell
          key={row.item.item.action + "emoji"}
          emoji={row.item.item.emoji}
          customTableCellStyle={customTableCellStyle}
          customFont={customFont}
        />
      ) : null}
      {isOptions && (
        <OptionsCell
          key={row.item.item.action + "isOption"}
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
