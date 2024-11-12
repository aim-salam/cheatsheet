import * as React from "react";
import { useState } from "react";
import {
  Stack,
  Typography,
  Table,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";
import TopicColumn from "./TopicColumn";
import TopicRow from "./TopicRow";
import useTable from "../../hooks/useTable";
function TopicTable({ table, cheatsheets }) {
  const { rows, setRows } = useTable({ table, cheatsheets });
  const [isEditable, setIsEditable] = useState(false);

  return (
    <Stack>
      <Stack flexDirection="row" sx={styles.stack}>
        <Typography sx={styles.typography}>{table.table}</Typography>
      </Stack>
      <TableContainer component={Paper} sx={styles.tableContainer}>
        <Table aria-label="simple table">
          <TopicColumn columns={table.columns} isEditable={isEditable} />
          <TableBody>
            {rows.map((row, index) => (
              <TopicRow
                key={row.item.item.action + row.item.item.description + index}
                row={row}
                rows={rows}
                isEditable={isEditable}
                setRows={setRows}
                index={index}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

const styles = {
  stack: { justifyContent: { xs: "center", sm: "flex-start" } },
  typography: { marginBottom: "20px", fontSize: "25px", fontWeight: "bold" },
  tableContainer: { width: "100%", marginBottom: "150px" },
};

export default TopicTable;
