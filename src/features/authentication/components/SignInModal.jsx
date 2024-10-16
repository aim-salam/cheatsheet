import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

function SignInModal({
  openSignIn,
  handleCloseSignIn,
  handleSignIn,
  email,
  setEmail,
  password,
  setPassword,
}) {
  return (
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
  );
}

export default SignInModal;
