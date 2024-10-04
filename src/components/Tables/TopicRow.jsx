import React from "react";
import { TableRow } from "@mui/material";
import OptionsCell from "../TableCells/OptionsCell";
import UniversalCell from "../TableCells/UniversalCell";

function TopicRow({ row, rows, isEditable, setRows }) {
  const { action, description, visual, code, emoji } = row.item.item;

  const rowData = [
    { key: "action", value: action, width: "100%" },
    { key: "description", value: description, width: "100%" },
    { key: "visual", value: visual, width: { xs: "200px", sm: "200px" } },
    {
      key: "code",
      value: code,
      width: { xs: "500px", sm: "200px" },
    },
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
        value ? <UniversalCell column={key} data={value} width={width} /> : null
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
