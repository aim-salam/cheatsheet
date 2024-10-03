import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";
function TopicColumn({ columns, isEditable }) {
  const customTableStyle = {
    fontSize: "17px",
    fontWeight: "bold",
    // borderRight: "1px solid #EDEDED",
  };

  const columnData = [
    { key: "action", label: "" },
    { key: "description", label: "Description" },
    { key: "visual", label: "Visual" },
    { key: "code", label: "Code" },

    // { key: "emoji", label: "Emoji" },
  ];
  return (
    <TableHead>
      <TableRow>
        {columnData.map((col) => (
          // columns[col.key] &&
          <TableCell key={col.key} sx={customTableStyle}>
            {col.label}
          </TableCell>
        ))}
        {isEditable && <TableCell sx={customTableStyle}>Options</TableCell>}
      </TableRow>
    </TableHead>
  );
}

export default TopicColumn;
