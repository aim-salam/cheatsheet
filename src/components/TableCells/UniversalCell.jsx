import React, { useState } from "react";
import { CardMedia, Stack, TableCell, Typography } from "@mui/material";
import VisualModal from "../Modals/VisualModal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";

function UniversalCell({ data, width }) {
  const [modalUrl, setModalUrl] = useState("");

  const customCodeStyle = {
    marginTop: "0px",
    borderRadius: "10px",
    fontFamily:
      'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
  };

  const handleImageClick = (url) => setModalUrl(url);
  const handleCloseModal = () => setModalUrl("");

  return (
    <TableCell sx={{ alignContent: "flex-start", width: width }}>
      <div>
        {data.map((item, index) => (
          <Stack key={index}>
            {item.text && (
              <Typography fontSize={"17px"}>{item.text}</Typography>
            )}

            {item.image_link && (
              <>
                <CardMedia
                  component="img"
                  sx={{
                    width: "200px",
                    objectFit: "cover",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Shadow effect on hover
                    },
                  }}
                  onClick={() => handleImageClick(item.image_link)}
                  image={item.image_link}
                  alt="Visual image"
                />
                <VisualModal
                  visual={modalUrl}
                  open={modalUrl !== ""}
                  handleClose={handleCloseModal}
                />
              </>
            )}

            {item.code && (
              <SyntaxHighlighter
                language={item.code_type}
                style={vscDarkPlus} // You can switch between dark and light themes here
                customStyle={customCodeStyle}
              >
                {item.code}
              </SyntaxHighlighter>
            )}
          </Stack>
        ))}
      </div>
    </TableCell>
  );
}

export default UniversalCell;
