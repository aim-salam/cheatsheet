import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";
function TopicColumn({ columns, isEditable }) {
  const columnData = [
    { key: "action", label: "", width: "120px" },
    { key: "description", label: "Description", width: "200px" },
    { key: "code", label: "Code" },
    { key: "visual", label: "Visual", width: "200px" },
  ];
  return (
    <TableHead>
      <TableRow>
        {columnData.map(({ key, label, width }) => (
          <TableCell key={key} sx={{ ...styles.tableCell, width: width }}>
            {label}
          </TableCell>
        ))}
        {isEditable && <TableCell sx={customTableStyle}>Options</TableCell>}
      </TableRow>
    </TableHead>
  );
}

const styles = {
  tableCell: {
    fontSize: "17px",
    fontWeight: "bold",
    display: { xs: "none", sm: "table-cell" },
  },
};

export default TopicColumn;
