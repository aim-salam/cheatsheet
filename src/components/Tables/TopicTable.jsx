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
      <Stack flexDirection="row" justifyContent="center">
        <Typography
          fontSize="30px"
          fontWeight="bold"
          sx={{
            paddingRight: "20px",
            paddingLeft: "20px",
            marginBottom: "5px",
          }}
        >
          {table.table}
        </Typography>
        {/* <IconButton color="primary" onClick={() => setIsEditable(!isEditable)}>
          <EditIcon />
        </IconButton> */}
      </Stack>
      <TableContainer
        component={Paper}
        sx={{ width: "100%", marginBottom: "150px" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TopicColumn columns={table.columns} isEditable={isEditable} />
          <TableBody>
            {rows.map((row, index) => (
              <TopicRow
                row={row}
                rows={rows}
                isEditable={isEditable}
                setRows={setRows}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <CreateRowButton rows={rows} setRows={setRows} /> */}
    </Stack>
  );
}

export default TopicTable;
