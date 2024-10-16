import React from "react";
import { useState } from "react";

function useAuthentication() {
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOpenSignUp = () => setOpenSignUp(true);
  const handleCloseSignUp = () => setOpenSignUp(false);

  const handleOpenSignIn = () => setOpenSignIn(true);
  const handleCloseSignIn = () => setOpenSignIn(false);

  const handleSignUp = () => {
    // Firebase sign-up logic here
    console.log("Sign Up with:", email, password);
    handleCloseSignUp();
  };

  const handleSignIn = () => {
    // Firebase sign-in logic here
    console.log("Sign In with:", email, password);
    handleCloseSignIn();
  };

  const handleLoginWithGmail = async () => {
    // const provider = new GoogleAuthProvider();
    // try {
    //   await signInWithPopup(auth, provider);
    //   console.log('Logged in with Gmail');
    // } catch (error) {
    //   console.error('Error logging in with Gmail', error);
    // }
  };
  return {
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
  };
}

export default useAuthentication;
