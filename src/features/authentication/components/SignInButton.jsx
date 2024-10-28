import React from "react";
import { Button } from "@mui/material";

function SignInButton({ handleOpenSignIn }) {
  return (
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      onClick={handleOpenSignIn}
      sx={styles.button}
    >
      Sign In
    </Button>
  );
}

const styles = {
  button: {
    padding: "10px",
    fontSize: "0.8rem",
    borderRadius: "50px",
  },
};

export default SignInButton;
