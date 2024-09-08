import React, { useState } from "react";
import { CardMedia, TableCell } from "@mui/material";
import GUIModal from "./GUIModal";
import VisualModal from "./VisualModal";

function VisualCell({ visual }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <TableCell>
      <div>
        <CardMedia
          component="img"
          sx={{
            width: 200,
            objectFit: "cover",
          }}
          onClick={handleOpen}
          image={visual}
          alt="Placeholder Image"
        />
        <VisualModal
          visual={visual}
          open={open}
          handleClose={handleClose}
        ></VisualModal>
      </div>
    </TableCell>
  );
}

export default VisualCell;
