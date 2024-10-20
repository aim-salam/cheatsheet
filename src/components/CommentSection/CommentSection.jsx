import React, { useState, useEffect } from "react";
import { Box, Button, Typography, List } from "@mui/material";

import DateInputButton from "./DateInputButton";
import FileInputButton from "./FileInputButton";
import TextFields from "./TextFields";
import CommentItem from "./CommentItem";
import useComment from "./hooks/useComment";

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

  return (
    <Box
      sx={{
        maxWidth: 600,
        mt: 4,
        marginBottom: "100px",
      }}
    >
      <Typography variant="h5" mb={"20px"}>
        Leave Comments
      </Typography>
      <TextFields
        comment={comment}
        setComment={setComment}
        receiver_id={receiver_email}
        setReceiver={setReceiver}
      ></TextFields>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
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
          sx={{ backgroundColor: "#e6e3e3", color: "black", width: "100px" }}
        >
          {editingIndex !== null ? "Update" : "Submit"}
        </Button>
      </Box>
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

export default CommentSection;
