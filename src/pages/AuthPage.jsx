import React, { useState } from "react";
import { Box, Typography, CardMedia, Stack } from "@mui/material";
import SignUpModal from "../features/authentication/components/SignUpModal";
import SignInModal from "../features/authentication/components/SignInModal";
import useAuthentication from "../features/authentication/hooks/useAuthentication";
import SignUpButton from "../features/authentication/components/SignUpButton";
import SignInButton from "../features/authentication/components/SignInButton";
import GoogleSignInButton from "../features/authentication/components/GoogleSignInButton";
import AuthCardMedia from "../features/authentication/components/AuthCardMedia";
import AuthTypography from "../features/authentication/components/AuthTypography";
import AuthHeader from "../features/authentication/components/AuthHeader";
import AuthButtons from "../features/authentication/components/AuthButtons";

const AuthPage = () => {
  const {
    openSignUp,
    handleOpenSignUp,
    handleCloseSignUp,
    openSignIn,
    handleOpenSignIn,
    handleCloseSignIn,
    handleSignUp,
    handleSignIn,
    handleLoginWithGmail,
    email,
    setEmail,
    password,
    setPassword,
  } = useAuthentication();

  return (
    <Box sx={styles.box1}>
      <AuthCardMedia></AuthCardMedia>
      <Box sx={styles.box2}>
        <AuthHeader></AuthHeader>

        <AuthButtons
          handleLoginWithGmail={handleLoginWithGmail}
          handleOpenSignUp={handleOpenSignUp}
          handleOpenSignIn={handleOpenSignIn}
        ></AuthButtons>

        <SignUpModal
          openSignUp={openSignUp}
          handleCloseSignUp={handleCloseSignUp}
          handleSignUp={handleSignUp}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />

        <SignInModal
          openSignIn={openSignIn}
          handleCloseSignIn={handleCloseSignIn}
          handleSignIn={handleSignIn}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </Box>
    </Box>
  );
};

const styles = {
  box1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    display: "flex",
    flexDirection: "column",
    alignItems: {
      xs: "center",
      sm: "flex-start",
    },
  },
};

export default AuthPage;
