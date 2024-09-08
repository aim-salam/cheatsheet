import React, { useState } from "react";
import { CardMedia, TableCell } from "@mui/material";
import GUIModal from "./GUIModal";

function GUICell({ gui }) {
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
            "&:hover": {
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Shadow effect on hover
            },
          }}
          onClick={handleOpen}
          image={gui}
          alt="Placeholder Image"
        />
        <GUIModal gui={gui} open={open} handleClose={handleClose}></GUIModal>
      </div>
    </TableCell>
  );
}

export default GUICell;
