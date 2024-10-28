import React from "react";
import { Button } from "@mui/material";

function SignUpButton({ handleOpenSignUp }) {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      onClick={handleOpenSignUp}
      sx={styles.button}
    >
      Create an account
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

export default SignUpButton;
