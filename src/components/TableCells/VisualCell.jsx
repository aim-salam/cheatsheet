import React, { useState } from "react";
import { CardMedia, Stack, TableCell, Typography } from "@mui/material";
import VisualModal from "../Modals/VisualModal";

function VisualCell({ visual, customTableCellStyle, customFont }) {
  const [modalUrl, setModalUrl] = useState("");

  return (
    <TableCell sx={customTableCellStyle}>
      <div>
        {visual.map((item) => {
          return (
            <Stack key={visual}>
              <Typography fontSize={customFont}>{item.text}</Typography>
              <CardMedia
                component="img"
                sx={{
                  width: "200px",
                  objectFit: "cover",
                  "&:hover": {
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Shadow effect on hover
                  },
                }}
                onClick={() => {
                  setModalUrl(item.link);
                }}
                image={item.link}
                alt="Visual image"
              />
              <VisualModal
                visual={modalUrl}
                open={modalUrl !== "" ? true : false}
                handleClose={() => {
                  setModalUrl("");
                }}
              ></VisualModal>
              <br />
            </Stack>
          );
        })}
      </div>
    </TableCell>
  );
}

export default VisualCell;
