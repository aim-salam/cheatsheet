import React from "react";
import { TableCell, Stack } from "@mui/material";

import DeleteRowButon from "../Buttons/DeleteRowButon";
import EditRowButton from "../Buttons/EditRowButton";

function OptionsCell({ row, rows, setRows, customStyle }) {
  return (
    <TableCell sx={customStyle}>
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
