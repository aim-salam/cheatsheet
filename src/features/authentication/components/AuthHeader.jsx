import React from "react";
import { Typography } from "@mui/material";
function AuthHeader() {
  return (
    <>
      <Typography
        sx={{
          marginTop: "80px",
          textAlign: {
            xs: "center",
            sm: "start",
          },
          paddingRight: "20px",
        }}
        variant="h2"
        component="h2"
        gutterBottom
        fontWeight={"bold"}
      >
        Fullstack Cheatsheet
      </Typography>

      <Typography
        sx={{
          marginTop: "40px",
          marginBottom: "20px",
          textAlign: {
            xs: "center",
            sm: "start",
          },
          paddingRight: "20px",
        }}
        variant="h4"
        component="h4"
        gutterBottom
        fontWeight={"bold"}
      >
        Enjoy visualization and copy-paste code.
      </Typography>
    </>
  );
}

const styles = {};

export default AuthHeader;
