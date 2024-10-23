import React from "react";
import { Typography } from "@mui/material";
function AuthTypography() {
  return (
    <>
      <Typography sx={styles.typography1}>
        By signing up, you agree to the Terms of Service and Privacy Policy,
        including Cookie Use.
      </Typography>
      <Typography sx={styles.typography2} fontWeight={"bold"}>
        Alrady have an account?
      </Typography>
    </>
  );
}

const styles = {
  typography1: {
    fontSize: "12px",
    marginTop: "10px",
  },
  typography2: {
    marginTop: "100px",
    marginBottom: "10px",
  },
};

export default AuthTypography;
