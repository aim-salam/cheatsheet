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
import UniversalCell from "../TableCells/UniversalCell";
function TopicRow({ row, rows, isEditable, setRows }) {
  const customTableCellStyle = {
    borderRight: "1px solid #EDEDED",
  };
  const customFont = "17px";

  const keyData = [
    { key: "action", value: row.item.item.action },
    {
      key: "description",
      value: row.item.item.description,
    },
    { key: "visual", value: row.item.item.visual },
    // { key: "gui", component: GUICell, value: row.item.item.gui },
    // { key: "cli", component: CLICell, value: row.item.item.cli },
    {
      key: "code",
      value: row.item.item.code,
    },
    // {
    //   key: "attention",
    //   component: AttentionCell,
    //   value: row.item.item.attention,
    // },
    // { key: "emoji", component: EmojiCell, value: row.item.item.emoji },
  ];

  return (
    <TableRow
      sx={{
        verticalAlign: "baseline",
        borderBottom: "1px solid #EDEDED",
      }}
    >
      {/* New Design: many cell will return UniversalCell */}
      {/* if row have keys represent columns is true, map will UniversalCell  */}
      {keyData.map(
        ({ key, value, extraProps = {} }) =>
          value && (
            <UniversalCell
              key={value}
              data={value}
              customTableCellStyle={customTableCellStyle}
              customFont={customFont}
            ></UniversalCell>
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
