import React, { useState } from "react";
import { CardMedia, Stack, TableCell, Typography } from "@mui/material";
import VisualModal from "../Modals/VisualModal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  vs,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";
function UniversalCell({ data, customTableCellStyle, customFont }) {
  const [modalUrl, setModalUrl] = useState("");
  const customCodeStyle = {
    // fontSize: customFont,
    marginTop: "0px",
    borderRadius: "10px",
    fontFamily:
      'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
  };

  return (
    <TableCell sx={customTableCellStyle}>
      <div>
        {data.map((item) => {
          return (
            <Stack key={data}>
              {item.text ? (
                <Typography fontSize={customFont}>{item.text}</Typography>
              ) : null}
              {item.image_link ? (
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
                    onClick={() => {
                      setModalUrl(item.image_link);
                    }}
                    image={item.image_link}
                    alt="Visual image"
                  />
                  <VisualModal
                    visual={modalUrl}
                    open={modalUrl !== "" ? true : false}
                    handleClose={() => {
                      setModalUrl("");
                    }}
                  ></VisualModal>
                </>
              ) : null}

              {item.code ? (
                <SyntaxHighlighter
                  language={item.code_type}
                  // style={mode === "dark" ? vscDarkPlus : prism}
                  customStyle={customCodeStyle}
                >
                  {item.code}
                </SyntaxHighlighter>
              ) : null}

              <br />
            </Stack>
          );
        })}
      </div>
    </TableCell>
  );
}

export default UniversalCell;
