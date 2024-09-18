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
function TopicRow({ row, rows, isEditable, setRows }) {
  const customTableCellStyle = {
    borderRight: "1px solid #EDEDED",
  };
  const customFont = "17px";

  const cellData = [
    { key: "action", component: ActionCell, value: row.item.item.action },
    {
      key: "description",
      component: DescriptionCell,
      value: row.item.item.description,
    },
    { key: "visual", component: VisualCell, value: row.item.item.visual },
    { key: "gui", component: GUICell, value: row.item.item.gui },
    { key: "cli", component: CLICell, value: row.item.item.cli },
    {
      key: "code",
      component: CodeCell,
      value: row.item.item.code,
      extraProps: { codeType: row.item.item.codeType },
    },
    {
      key: "attention",
      component: AttentionCell,
      value: row.item.item.attention,
    },
    { key: "emoji", component: EmojiCell, value: row.item.item.emoji },
  ];

  return (
    <TableRow
      sx={{
        verticalAlign: "baseline",
        borderBottom: "1px solid #EDEDED",
      }}
    >
      {cellData.map(
        ({ key, component: CellComponent, value, extraProps = {} }) =>
          value && (
            <CellComponent
              key={row.item.item.action + key}
              {...extraProps}
              customTableCellStyle={customTableCellStyle}
              customFont={customFont}
              {...{ [key]: value }} // Spread dynamic prop
            />
          )
      )}

      {/* Render options cell if isOptions is true */}
      {isEditable && (
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

export default TopicRow;
