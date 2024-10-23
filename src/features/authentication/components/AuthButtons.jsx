import React from "react";
import { Stack, Typography } from "@mui/material";
import GoogleSignInButton from "./GoogleSignInButton";
import SignUpButton from "./SignUpButton";
import SignInButton from "./SignInButton";
import AuthTypography from "./AuthTypography";
function AuthButtons({
  handleLoginWithGmail,
  handleOpenSignUp,
  handleOpenSignIn,
}) {
  return (
    <Stack sx={{ width: "250px" }}>
      <GoogleSignInButton
        handleLoginWithGmail={handleLoginWithGmail}
      ></GoogleSignInButton>

      <Typography sx={styles.typography}>or</Typography>

      <SignUpButton handleOpenSignUp={handleOpenSignUp}></SignUpButton>

      <AuthTypography></AuthTypography>

      <SignInButton handleOpenSignIn={handleOpenSignIn}></SignInButton>
    </Stack>
  );
}

const styles = {
  typography: {
    alignSelf: "center",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
};

export default AuthButtons;
