import React from "react";
import { TableCell, Stack } from "@mui/material";

import DeleteRowButon from "../Buttons/DeleteRowButon";
import EditRowButton from "../Buttons/EditRowButton";

function OptionsCell({ row, rows, setRows, customTableCellStyle }) {
  return (
    <TableCell sx={customTableCellStyle}>
      <Stack>
        <DeleteRowButon
          row={row}
          rows={rows}
          setRows={setRows}
        ></DeleteRowButon>
        <EditRowButton row={row} rows={rows} setRows={setRows}></EditRowButton>
      </Stack>
    </TableCell>
  );
}

export default OptionsCell;
