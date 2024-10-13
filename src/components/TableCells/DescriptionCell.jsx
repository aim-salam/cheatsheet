import React from "react";
import { Stack, TableCell, Typography } from "@mui/material";

function DescriptionCell({ description, customTableCellStyle, customFont }) {
  console.log("description");
  console.log(description);
  return (
    <TableCell sx={customTableCellStyle} component="th" scope="row">
      <div>
        {description.map((item) => {
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
