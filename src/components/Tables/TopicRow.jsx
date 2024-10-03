import React from "react";
import { TableRow } from "@mui/material";
import OptionsCell from "../TableCells/OptionsCell";
import UniversalCell from "../TableCells/UniversalCell";

function TopicRow({ row, rows, isEditable, setRows }) {
  const { action, description, visual, gui, cli, code, attention, emoji } =
    row.item.item;

  const rowData = [
    { key: "action", value: action, width: "15%" },
    { key: "description", value: description, width: "30%" },
    { key: "visual", value: visual, width: "30%" },
    { key: "code", value: code, width: "25%" },
    // { key: "emoji", value: emoji, width: "5%" },
  ];

  return (
    <TableRow
      sx={{
        verticalAlign: "baseline",
        borderBottom: "1px solid #EDEDED",
      }}
    >
      {rowData.map(({ key, value, width }) =>
        value ? <UniversalCell key={key} data={value} width={width} /> : null
      )}

      {/* Render OptionsCell if isEditable is true */}
      {isEditable && (
        <OptionsCell
          key={`${action}-options`}
          row={row}
          rows={rows}
          setRows={setRows}
        />
      )}
    </TableRow>
  );
}

export default TopicRow;
