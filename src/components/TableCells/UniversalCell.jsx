import React, { useState } from "react";
import { CardMedia, Stack, TableCell, Typography } from "@mui/material";
import VisualModal from "../Modals/VisualModal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useColorScheme } from "@mui/material";

function UniversalCell({ data, width }) {
  const [modalUrl, setModalUrl] = useState("");
  const { mode, setMode } = useColorScheme();

  const customCodeStyle = {
    width: "200px",
    // overflow: "auto",
    marginTop: "0px",
    borderRadius: "10px",
    fontFamily:
      'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
  };

  const handleImageClick = (url) => setModalUrl(url);
  const handleCloseModal = () => setModalUrl("");

  return (
    <TableCell
      sx={{
        alignContent: "flex-start",
        // borderRight: "1px solid #EDEDED",
        width: width,
      }}
    >
      <div>
        {data.map(({ text, image_link, code, code_type }, index) => (
          <Stack
            key={text + image_link + code + code_type}
            marginBottom={"20px"}
          >
            {text && (
              <Typography
                key={text}
                style={{ whiteSpace: "pre-wrap" }}
                fontSize={"17px"}
              >
                {text}
              </Typography>
            )}

            {image_link && (
              <>
                <CardMedia
                  key={image_link}
                  component="img"
                  sx={{
                    // width: "300px",
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
                  key={image_link}
                  visual={modalUrl}
                  open={modalUrl !== ""}
                  handleClose={handleCloseModal}
                />
              </>
            )}

            {code && (
              <SyntaxHighlighter
                key={code}
                language={code_type}
                style={mode === "light" ? prism : vscDarkPlus} // You can switch between dark and light themes here
                customStyle={customCodeStyle}
                showLineNumbers
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
