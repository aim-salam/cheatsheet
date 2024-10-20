import React, { useState } from "react";
import {
  Box,
  Typography,
  ListItem,
  Stack,
  Avatar,
  IconButton,
  useColorScheme,
  CardMedia,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisualModal from "../Modals/VisualModal";
import { useAuth } from "../../contexts/AuthContext";
function CommentItem({ data, index, handleDeleteBooking, handleEditBooking }) {
  const { mode } = useColorScheme();
  const [modalUrl, setModalUrl] = useState("");

  const { user, setUser } = useAuth();

  const handleImageClick = (url) => setModalUrl(url);
  const handleCloseModal = () => setModalUrl("");

  return (
    <>
      <ListItem key={index}>
        <Stack flexDirection={"row"} width={"100%"}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.cheatsheet.cam/images/image-1727880828572.webp"
            sx={{
              width: 30,
              height: 30,
              marginRight: "10px",
              mt: "10px",
            }}
          />
          <Stack
            sx={{
              backgroundColor: mode === "light" ? "#f5f5f5" : "#1e1e1e",
              p: "10px",
              borderRadius: "10px",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Stack>
              <Typography fontWeight={"bold"} fontSize={"14px"}>
                {data.sender_email}
              </Typography>
              <Typography fontSize={"14px"} marginBottom={"5px"}>
                to : {data.receiver_email}
              </Typography>
              <Typography>{data.comment}</Typography>

              {data.image_url && (
                <>
                  <CardMedia
                    key={data.image_url + "preview"}
                    component="img"
                    sx={{
                      width: "150px",
                      objectFit: "cover",
                      "&:hover": {
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                    onClick={() => handleImageClick(data.image_url)}
                    image={data.image_url}
                    alt="Visual image"
                  />
                  <VisualModal
                    key={data.image_url + "visualmodal"}
                    visual={modalUrl}
                    open={modalUrl !== ""}
                    handleClose={handleCloseModal}
                  />
                </>
              )}
            </Stack>
          </Stack>
        </Stack>

        {data.sender_email === user.email ? (
          <Stack>
            <IconButton edge="end" onClick={() => handleEditBooking(index)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" onClick={() => handleDeleteBooking(index)}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        ) : null}
      </ListItem>
    </>
  );
}

export default CommentItem;
