import React, { useState } from "react";
import { Box, Button, Typography, CardMedia, Stack } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import SignUpModal from "../features/authentication/components/SignUpModal";
import SignInModal from "../features/authentication/components/SignInModal";
import useAuthentication from "../features/authentication/hooks/useAuthentication";
import SignUpButton from "../features/authentication/components/SignUpButton";
import SignInButton from "../features/authentication/components/SignInButton";
import GoogleSignInButton from "../features/authentication/components/GoogleSignInButton";
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
      <CardMedia
        sx={{
          width: "50%",
          backgroundColor: "#e6e3e3",
        }}
        component="img"
        image="https://images.cheatsheet.cam/images/state.webp"
      ></CardMedia>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* Title */}
        <Typography
          sx={{ marginTop: "40px", marginBottom: "40px" }}
          variant="h2"
          component="h2"
          gutterBottom
          align="center"
          fontWeight={"bold"}
        >
          Welcome to Our App
        </Typography>

        {/* Title */}
        <Typography
          sx={{ marginTop: "40px", marginBottom: "40px" }}
          variant="h4"
          component="h4"
          gutterBottom
          align="center"
          fontWeight={"bold"}
        >
          Join Today
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

          <Typography fontSize={"12px"} marginTop={"10px"}>
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </Typography>
          <Typography
            sx={{ marginTop: "100px", marginBottom: "10px" }}
            fontWeight={"bold"}
          >
            Alrady have an account?
          </Typography>

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
