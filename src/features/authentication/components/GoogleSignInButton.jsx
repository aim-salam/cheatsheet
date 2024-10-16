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
      sx={{
        padding: "10px",
        fontSize: "0.8rem",
        borderRadius: "50px",
      }}
    >
      <GoogleIcon sx={{ marginRight: "10px" }}></GoogleIcon> Sign up with Google
    </Button>
  );
}

export default GoogleSignInButton;
