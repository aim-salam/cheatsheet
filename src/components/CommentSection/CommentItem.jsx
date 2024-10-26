import { useState } from "react";
import {
  Typography,
  ListItem,
  Stack,
  Avatar,
  useColorScheme,
  CardMedia,
} from "@mui/material";
import VisualModal from "../Modals/VisualModal";
import { useAuth } from "../../contexts/AuthContext";
import duration from "../../utils/duration";

function CommentItem({ data, index, handleDeleteBooking, handleEditBooking }) {
  const { mode } = useColorScheme();
  const [modalUrl, setModalUrl] = useState("");

  const { user } = useAuth();

  const handleImageClick = (url) => setModalUrl(url);
  const handleCloseModal = () => setModalUrl("");

  return (
    <>
      <ListItem key={index}>
        <Stack flexDirection={"row"} width={"100%"}>
          <Avatar alt="Remy Sharp" src={data.profile_url} sx={styles.avatar} />
          <Stack
            sx={{
              backgroundColor: mode === "dark" ? "#1e1e1e" : "#f5f5f5",
              ...styles.stack,
            }}
          >
            <Stack>
              <Typography fontWeight={"bold"} fontSize={"14px"}>
                {data.sender_email}
              </Typography>
              <Typography fontSize={"14px"} marginBottom={"5px"}>
                <Typography component="span">to :</Typography>
                <Typography component="span" color="#1f85de" fontSize={"14px"}>
                  {data.receiver_email}
                </Typography>
              </Typography>

              <Typography>{data.comment}</Typography>

              {data.image_url && (
                <>
                  <CardMedia
                    key={data.image_url + "preview"}
                    component="img"
                    sx={styles.cardMedia}
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
            <Stack justifyContent={"space-between"}>
              <Typography fontSize={"13px"}>{duration(data.date)}</Typography>
              {user && data.sender_email === user.email ? (
                <Stack flexDirection={"row"}>
                  <Typography
                    href="#target-component"
                    component="a"
                    variant="body1"
                    fontSize={"13px"}
                    onClick={() => handleEditBooking(index)}
                    style={{ cursor: "pointer", color: "#B7B7B7" }}
                    marginRight={"10px"}
                  >
                    Edit
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={"13px"}
                    onClick={() => handleDeleteBooking(index)}
                    style={{ cursor: "pointer", color: "#B7B7B7" }}
                  >
                    Delete
                  </Typography>
                </Stack>
              ) : null}
            </Stack>
          </Stack>
        </Stack>
      </ListItem>
    </>
  );
}

const styles = {
  avatar: {
    width: 30,
    height: 30,
    marginRight: "10px",
    mt: "10px",
  },
  stack: {
    p: "10px",
    borderRadius: "10px",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardMedia: {
    width: "150px",
    objectFit: "cover",
    "&:hover": {
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    },
  },
};

export default CommentItem;
