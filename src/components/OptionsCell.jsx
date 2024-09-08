import React from "react";
import { TableCell, Stack } from "@mui/material";

import DeleteRowButon from "./DeleteRowButon";
import EditRowButton from "./EditRowButton";

function OptionsCell({ row, rows, setRows }) {
  return (
    <TableCell>
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
