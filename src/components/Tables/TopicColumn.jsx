import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";
function TopicColumn({ columns, isEditable }) {
  const customTableStyle = {
    fontSize: "17px",
    fontWeight: "bold",
    // borderRight: "1px solid #EDEDED",
    display: { xs: "none", sm: "table-cell" },
  };

  const columnData = [
    { key: "action", label: "", width: "120px" },
    { key: "description", label: "Description", width: "200px" },
    { key: "code", label: "Code" },
    { key: "visual", label: "Visual", width: "200px" },

    // { key: "emoji", label: "Emoji" },
  ];
  return (
    <TableHead>
      <TableRow>
        {columnData.map(({ key, label, width }) => (
          // columns[col.key] &&
          <TableCell key={key} sx={{ ...customTableStyle, width: width }}>
            {label}
          </TableCell>
        ))}
        {isEditable && <TableCell sx={customTableStyle}>Options</TableCell>}
      </TableRow>
    </TableHead>
  );
}

export default TopicColumn;
