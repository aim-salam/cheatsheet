import React, { useState } from "react";
import { CardMedia, Stack, TableCell, Typography } from "@mui/material";
import VisualModal from "../Modals/VisualModal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useColorScheme } from "@mui/material";

function UniversalCell({ column, data, index }) {
  const [modalUrl, setModalUrl] = useState("");
  const { mode, setMode } = useColorScheme();

  const customCodeStyle = {
    width: "300px",
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

        display: { xs: "flex", sm: "table-cell" },
        flexWrap: "wrap",
        borderBottom: {
          xs: "0px",
          sm: mode === "light" ? "2px solid #EDEDED" : "2px solid #333232",
        },
        padding: "0px",
        paddingLeft: "20px",
        paddingTop: { xs: column === "visual" ? "10px" : "0px", sm: "10px" },
        paddingBottom: {
          xs: column === "visual" ? "50px" : "0px",
          sm: column === "visual" ? "20px" : "0px",
        },

        paddingRight: column === "code" ? "20px" : "0px",
      }}
    >
      {data.map(({ text, image_link, code, code_type }, index) => (
        <Stack
          key={text + image_link + code + code_type}
          sx={{
            marginRight: { xs: "10px", sm: "0px" },
          }}
        >
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
              paddingTop={{
                xs: column === "action" ? "20px" : "0px",
                sm: "0px",
              }}
              paddingBottom={"5px"}
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
                }}
                onClick={() => handleImageClick(image_link)}
                image={image_link}
                alt="Visual image"
              />
              <VisualModal
                key={image_link + text + code + index}
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
