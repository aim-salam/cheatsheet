import React, { useState } from "react";
import { CardMedia, Stack, TableCell, Typography } from "@mui/material";
import VisualModal from "../Modals/VisualModal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useColorScheme } from "@mui/material";
import TypographyCell from "./TypographyCell";
import ImageCell from "./ImageCell";

function UniversalCell({ column, data, index }) {
  const [modalUrl, setModalUrl] = useState("");
  const { mode } = useColorScheme();

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
    <TableCell
      sx={{
        ...styles.tableCell,
        borderBottom: {
          xs: "0px",
          sm: mode === "light" ? "2px solid #EDEDED" : "2px solid #333232",
        },
        paddingTop: { xs: column === "visual" ? "10px" : "0px", sm: "10px" },
        paddingBottom: {
          xs: column === "visual" ? "50px" : "0px",
          sm: column === "visual" ? "20px" : "0px",
        },
        paddingRight: column === "code" ? "20px" : "0px",
      }}
    >
      {data.map(({ text, image_link, code, code_type }, index) => (
        <Stack key={text + image_link + code + code_type} sx={styles.stack}>
          {text && (
            <TypographyCell column={column} text={text}></TypographyCell>
          )}

          {image_link && (
            <>
              <ImageCell
                image_link={image_link}
                handleImageClick={handleImageClick}
              ></ImageCell>
              <VisualModal
                key={image_link + text + code + index}
                visual={modalUrl}
                open={modalUrl !== ""}
                handleClose={handleCloseModal}
              />
            </>
          )}

          {code && (
            <Stack>
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

const styles = {
  tableCell: {
    alignContent: "flex-start",
    padding: "0px",
    paddingLeft: "20px",
    display: { xs: "flex", sm: "table-cell" },
    flexWrap: "wrap",
  },
  stack: {
    marginRight: { xs: "10px", sm: "0px" },
  },
};

export default UniversalCell;
