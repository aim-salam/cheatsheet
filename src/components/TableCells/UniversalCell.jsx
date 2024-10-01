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
    width: "300px",
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
        {data.map(({ text, image_link, code, code_type }, index) => (
          <Stack key={text + image_link + code + code_type}>
            {text && <Typography fontSize={"17px"}>{text}</Typography>}

            {image_link && (
              <>
                <CardMedia
                  component="img"
                  sx={{
                    width: "300px",
                    objectFit: "cover",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Shadow effect on hover
                    },
                  }}
                  onClick={() => handleImageClick(image_link)}
                  image={image_link}
                  alt="Visual image"
                />
                <VisualModal
                  visual={modalUrl}
                  open={modalUrl !== ""}
                  handleClose={handleCloseModal}
                />
              </>
            )}

            {code && (
              <SyntaxHighlighter
                language={code_type}
                style={vscDarkPlus} // You can switch between dark and light themes here
                customStyle={customCodeStyle}
              >
                {code}
              </SyntaxHighlighter>
            )}
          </Stack>
        ))}
      </div>
    </TableCell>
  );
}

export default UniversalCell;
