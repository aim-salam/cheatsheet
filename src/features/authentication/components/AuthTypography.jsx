import React from "react";
import { Typography } from "@mui/material";
function AuthTypography() {
  return (
    <>
      <Typography fontSize={"12px"} marginTop={"10px"}>
        By signing up, you agree to the Terms of Service and Privacy Policy,
        including Cookie Use.
      </Typography>
      <Typography
        sx={{ marginTop: "100px", marginBottom: "10px" }}
        fontWeight={"bold"}
      >
        Alrady have an account?
      </Typography>
    </>
  );
}

export default AuthTypography;
