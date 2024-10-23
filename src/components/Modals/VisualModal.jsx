import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardMedia } from "@mui/material";

export default function VisualModal({ visual, open, handleClose }) {
  return (
    <Modal
      key={visual}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.box1}>
        <CardMedia component="img" image={visual} alt="Visual image" />
      </Box>
    </Modal>
  );
}

const styles = {
  box1: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};
