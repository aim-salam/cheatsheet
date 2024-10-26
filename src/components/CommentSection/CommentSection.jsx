import React from "react";
import { Box, Button, Typography, List } from "@mui/material";
import FileInputButton from "./FileInputButton";
import TextFields from "./TextFields";
import CommentItem from "./CommentItem";
import useComment from "./hooks/useComment";
import { useAuth } from "../../contexts/AuthContext";
import AuthButton from "../Buttons/AuthButton";
import { useColorScheme } from "@mui/material";
const CommentSection = () => {
  const {
    bookings,
    setBookings,
    receiver_email,
    setReceiver,
    comment,
    setComment,
    editingIndex,
    setEditingIndex,
    handleBookingSubmit,
    handleEditBooking,
    handleDeleteBooking,
    uploading,
    progress,
    setImage,
    preview,
    setPreview,
  } = useComment();

  const { user } = useAuth();
  const { mode } = useColorScheme();

  return (
    <Box id="target-component" sx={styles.box1}>
      <Typography variant="h5" mb={"30px"}>
        Leave Comments
      </Typography>

      {user === null ? (
        <>
          <Typography
            backgroundColor={mode === "dark" ? "#1e1e1e" : "#f5f5f5"}
            sx={styles.typography}
          >
            Please login to leave a comment
          </Typography>
          {/* <AuthButton></AuthButton> */}
        </>
      ) : (
        <>
          <TextFields
            comment={comment}
            setComment={setComment}
            receiver_id={receiver_email}
            setReceiver={setReceiver}
            editingIndex={editingIndex}
          ></TextFields>
          <Box sx={styles.box2}>
            {/* <DateInputButton setTime={setTime} setDate={setDate}></DateInputButton> */}

            {editingIndex === null ? (
              <FileInputButton
                uploading={uploading}
                progress={progress}
                setImage={setImage}
                preview={preview}
                setPreview={setPreview}
              ></FileInputButton>
            ) : null}
            <Button
              variant="text"
              onClick={handleBookingSubmit}
              sx={styles.button}
            >
              {editingIndex !== null ? "Update" : "Submit"}
            </Button>
          </Box>
        </>
      )}

      <List sx={{ mt: 3 }}>
        {bookings.map((data, index) => (
          <CommentItem
            key={data.id + index}
            data={data}
            index={index}
            handleDeleteBooking={handleDeleteBooking}
            handleEditBooking={handleEditBooking}
          ></CommentItem>
        ))}
      </List>
    </Box>
  );
};

const styles = {
  box1: {
    maxWidth: 600,
    marginBottom: "100px",
    paddingTop: "80px",
  },

  box2: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: { backgroundColor: "#e6e3e3", color: "black", width: "100px" },
  typography: {
    padding: "10px 20px",
    borderRadius: "10px",
    marginBottom: "10px",
  },
};

export default CommentSection;
