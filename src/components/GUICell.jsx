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
          }}
          // height="140"

          // object-fit="cover"
          // width={"2"}
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