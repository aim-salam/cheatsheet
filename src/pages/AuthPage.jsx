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
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from './firebaseConfig'; // Ensure Firebase is set up properly

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <AuthCardMedia></AuthCardMedia>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            sm: "flex-start",
          },
        }}
      >
        {/* Title */}

        <Typography
          sx={{
            marginTop: "40px",
            marginBottom: "40px",
            textAlign: {
              xs: "center",
              sm: "start",
            },
          }}
          variant="h2"
          component="h2"
          gutterBottom
          fontWeight={"bold"}
        >
          Fullstack Cheatsheet
        </Typography>

        {/* Title */}
        <Typography
          sx={{
            marginTop: "40px",
            marginBottom: "40px",
            textAlign: {
              xs: "center",
              sm: "start",
            },
          }}
          variant="h4"
          component="h4"
          gutterBottom
          fontWeight={"bold"}
        >
          Enjoy visualization and copy-paste code.
        </Typography>
        {/* Buttons for Authentication */}

        <Stack sx={{ width: "250px" }}>
          <GoogleSignInButton
            handleLoginWithGmail={handleLoginWithGmail}
          ></GoogleSignInButton>
          <Typography
            sx={{
              alignSelf: "center",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            or
          </Typography>
          <SignUpButton handleOpenSignUp={handleOpenSignUp}></SignUpButton>

          <AuthTypography></AuthTypography>

          <SignInButton handleOpenSignIn={handleOpenSignIn}></SignInButton>
        </Stack>

        {/* Sign Up Modal */}
        <SignUpModal
          openSignUp={openSignUp}
          handleCloseSignUp={handleCloseSignUp}
          handleSignUp={handleSignUp}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />

        {/* Sign In Modal */}
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

export default AuthPage;
