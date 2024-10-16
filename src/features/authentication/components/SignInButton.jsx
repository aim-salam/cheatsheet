import React from "react";
import { Button } from "@mui/material";

function SignInButton({ handleOpenSignIn }) {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      onClick={handleOpenSignIn}
      sx={{
        padding: "10px",
        fontSize: "0.8rem",
        borderRadius: "50px",
      }}
    >
      Sign In
    </Button>
  );
}

export default SignInButton;
