import React from "react";
import { Typography } from "@mui/material";
function TypographyCell({ column, text }) {
  return (
    <Typography
      key={text}
      style={{ whiteSpace: "pre-wrap" }}
      fontSize={{
        xs: column === "action" ? "20px" : "15px",
        sm: column === "action" ? "16px" : "15px",
      }}
      width={{
        xs: column === "action" || column === "description" ? "100%" : "100%",
        sm:
          column === "action"
            ? "80px"
            : column === "description"
            ? "150px"
            : "100%",
      }}
      fontWeight={{
        xs: column === "action" ? "bold" : "normal",
        sm: "normal",
      }}
      paddingTop={{
        xs: column === "action" ? "20px" : "0px",
        sm: "0px",
      }}
      paddingBottom={"5px"}
    >
      {text}
    </Typography>
  );
}

export default TypographyCell;
