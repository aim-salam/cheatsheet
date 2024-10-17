import React from "react";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

function useAuthentication() {
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useAuth();

  const handleOpenSignUp = () => setOpenSignUp(true);
  const handleCloseSignUp = () => setOpenSignUp(false);

  const handleOpenSignIn = () => setOpenSignIn(true);
  const handleCloseSignIn = () => setOpenSignIn(false);

  const handleSignUp = async () => {
    // Firebase sign-up logic here
    console.log("Sign Up with:", email, password);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      console.log("Signed up successfully:", userCredential.user);
      handleCloseSignUp();
    } catch (error) {
      console.error("Error during sign up:", error);
      throw error;
    }
  };

  const handleSignIn = async () => {
    // Firebase sign-in logic here
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      console.log("Sign In with:", email, password);
      handleCloseSignIn();
    } catch (error) {
      console.error("Error during sign in:", error);
      throw error;
    }
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

  const handleLogout = () => {
    // setAuthToken(""); // Clear token from localStorage
    auth.signOut();
  };

  const navigate = useNavigate();
  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   } else {
  //     navigate("/auth");
  //   }
  // }, [user, navigate]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
        navigate("/");
      } else {
        setUser(null);
        navigate("/auth");
      }
      // setLoading(false);
    });

    return () => unsubscribe();
  }, []);
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
    handleLogout,
    email,
    setEmail,
    password,
    setPassword,
  };
}

export default useAuthentication;
