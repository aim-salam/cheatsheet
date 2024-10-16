import React from "react";
import { Button } from "@mui/material";

function SignUpButton({ handleOpenSignUp }) {
  return (
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      onClick={handleOpenSignUp}
      sx={{
        padding: "10px",
        fontSize: "0.8rem",
        borderRadius: "50px",
      }}
    >
      Create an account
    </Button>
  );
}

export default SignUpButton;
