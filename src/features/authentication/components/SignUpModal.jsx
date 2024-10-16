import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

function SignUpModal({
  openSignUp,
  handleCloseSignUp,
  handleSignUp,
  email,
  setEmail,
  password,
  setPassword,
}) {
  return (
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
  );
}

export default SignUpModal;
