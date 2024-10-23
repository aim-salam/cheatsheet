import React from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
function GoogleSignInButton({ handleLoginWithGmail }) {
  return (
    <Button
      variant="outlined"
      color="inherit"
      fullWidth
      onClick={handleLoginWithGmail}
      sx={styles.button}
    >
      <GoogleIcon sx={styles.icon}></GoogleIcon> Sign up with Google
    </Button>
  );
}

const styles = {
  button: {
    padding: "10px",
    fontSize: "0.8rem",
    borderRadius: "50px",
  },
  icon: {
    marginRight: "10px",
  },
};

export default GoogleSignInButton;
