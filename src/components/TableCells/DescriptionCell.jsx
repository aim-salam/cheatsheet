import React from "react";
import { Stack, TableCell, Typography } from "@mui/material";

function DescriptionCell({ action, customTableCellStyle, customFont }) {
  return (
    <TableCell sx={customTableCellStyle} component="th" scope="row">
      <div>
        {action.map((item) => {
          return (
            <Stack>
              <Typography fontSize={customFont} sx={{ width: "150px" }}>
                {item}
              </Typography>
              <br />
            </Stack>
          );
        })}
      </div>
    </TableCell>
  );
}

export default DescriptionCell;
