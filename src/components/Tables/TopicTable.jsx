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
      <Stack
        flexDirection="row"
        sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
      >
        <Typography
          fontSize="25px"
          fontWeight="bold"
          sx={{
            marginBottom: "20px",
          }}
        >
          {table.table}
        </Typography>
      </Stack>
      <TableContainer
        component={Paper}
        sx={{ width: "100%", marginBottom: "150px" }}
      >
        <Table
          sx={
            {
              // minWidth: 650
            }
          }
          aria-label="simple table"
        >
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

export default TopicTable;
