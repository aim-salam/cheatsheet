import React, { useState } from "react";
import { CardMedia, Stack, TableCell, Typography } from "@mui/material";
import VisualModal from "../Modals/VisualModal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useColorScheme } from "@mui/material";

function UniversalCell({ column, data }) {
  const [modalUrl, setModalUrl] = useState("");
  const { mode, setMode } = useColorScheme();

  const customCodeStyle = {
    // overflow: "auto",
    marginTop: "0px",
    borderRadius: "10px",
    fontFamily:
      'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',

    // overflow: "auto hidden",
    // cursor: "pointer",

    // width: "100%",
  };

  const handleImageClick = (url) => setModalUrl(url);
  const handleCloseModal = () => setModalUrl("");

  return (
    <TableCell
      sx={{
        alignContent: "flex-start",
        display: { xs: "block", sm: "table-cell" },
        borderBottom: { xs: "0px", sm: "1px solid #EDEDED" },
        padding: "0px",
        paddingLeft: "20px",
        paddingTop: { xs: "0px", sm: "10px" },
        paddingBottom: { xs: "0px", sm: "10px" },
        paddingRight: column === "code" ? "20px" : "0px",
      }}
    >
      {data.map(({ text, image_link, code, code_type }, index) => (
        <Stack key={text + image_link + code + code_type}>
          {text && (
            <Typography
              key={text}
              style={{ whiteSpace: "pre-wrap" }}
              fontSize={{
                xs: column === "action" ? "20px" : "15px",
                sm: column === "action" ? "16px" : "15px",
              }}
              width={{
                xs:
                  column === "action" || column === "description"
                    ? "100%"
                    : "100%",
                sm:
                  column === "action"
                    ? "80px"
                    : column === "description"
                    ? "150px"
                    : "100%",
              }}
              // fontWeight={}
              fontWeight={{
                xs: column === "action" ? "bold" : "normal",
                sm: "normal",
              }}
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
                  width: "150px",
                  objectFit: "cover",
                  "&:hover": {
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Shadow effect on hover
                  },
                  paddingBottom: "10px",
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
            <Stack
              sx={
                {
                  // width: { xs: "400px", sm: "200px" },
                  // paddingBottom: { xs: "100px", sm: "0px" },
                }
              }
            >
              <SyntaxHighlighter
                key={code}
                language={code_type}
                style={mode === "light" ? prism : vscDarkPlus}
                customStyle={customCodeStyle}
                showLineNumbers
              >
                {code}
              </SyntaxHighlighter>
            </Stack>
          )}
        </Stack>
      ))}
    </TableCell>
  );
}

export default UniversalCell;
