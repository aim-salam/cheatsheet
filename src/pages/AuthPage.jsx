import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  TextField,
  Typography,
  CardMedia,
  Stack,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from './firebaseConfig'; // Ensure Firebase is set up properly

const AuthPage = () => {
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

  return (
    <Box
      sx={{
        // minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        // alignItems: "flex-start",
        // px: 2,
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
            <GoogleIcon sx={{ marginRight: "10px" }}></GoogleIcon> Sign up with
            Google
          </Button>
          <Typography
            sx={{
              alignSelf: "center",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            or
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleOpenSignUp}
            sx={{
              padding: "10px",
              fontSize: "0.8rem",
              borderRadius: "50px",
            }}
          >
            Create an account
          </Button>
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

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleOpenSignIn}
            sx={{
              padding: "10px",
              fontSize: "0.8rem",
              borderRadius: "50px",
            }}
          >
            Sign In
          </Button>
        </Stack>

        {/* Sign Up Modal */}
        <Dialog
          open={openSignUp}
          onClose={handleCloseSignUp}
          fullWidth
          maxWidth="xs"
        >
          <DialogTitle>Sign Up</DialogTitle>
          <DialogContent>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="dense"
              variant="outlined"
              autoFocus
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="dense"
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSignUp} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSignUp} variant="contained" color="primary">
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>

        {/* Sign In Modal */}
        <Dialog
          open={openSignIn}
          onClose={handleCloseSignIn}
          fullWidth
          maxWidth="xs"
        >
          <DialogTitle>Sign In</DialogTitle>
          <DialogContent>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="dense"
              variant="outlined"
              autoFocus
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="dense"
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSignIn} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSignIn} variant="contained" color="primary">
              Sign In
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default AuthPage;
