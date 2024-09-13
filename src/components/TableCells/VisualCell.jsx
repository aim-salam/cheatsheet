import React, { useState } from "react";
import { CardMedia, TableCell } from "@mui/material";
import VisualModal from "../Modals/VisualModal";

function VisualCell({ visual, sx }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <TableCell sx={sx}>
      {visual.map((item) => {
        return (
          <div key={item.link}>
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
              image={item.link}
              alt="Visual image"
            />
            <VisualModal
              visual={item.link}
              open={open}
              handleClose={handleClose}
            ></VisualModal>
          </div>
        );
      })}
    </TableCell>
  );
}

export default VisualCell;
