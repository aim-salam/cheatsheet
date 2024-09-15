import React, { useState } from "react";
import { TableCell, Typography, Button, Stack } from "@mui/material";

function AttentionCell({ attention, customTableCellStyle, customFont }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <TableCell sx={customTableCellStyle} component="th" scope="row">
      <div>
        {attention.map((item) => {
          return (
            <Stack>
              <Typography
                fontSize={customFont}
                sx={{
                  width: "150px",
                  color: "grey",
                  display: showMore ? null : "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1, // Number of lines to display
                }}
              >
                {item.text}
              </Typography>
              <br />
            </Stack>
          );
        })}

        {attention.length > 0 ? (
          <Button
            onClick={() => setShowMore(!showMore)}
            sx={{ color: "grey", textTransform: "none" }}
          >
            {showMore ? "See less" : "See more"}
          </Button>
        ) : null}
      </div>
      {/* <Typography
        fontSize={customFont}
        sx={{
          width: "150px",
          color: "grey",
          display: showMore ? null : "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 1, // Number of lines to display
        }}
      >
        {attention}
      </Typography>
      {attention.length > 1 ? (
        <Button onClick={() => setShowMore(!showMore)} sx={{ color: "grey" }}>
          {showMore ? "See less" : "See more"}
        </Button>
      ) : null} */}
    </TableCell>
  );
}

export default AttentionCell;
