import React, { useState, useEffect } from "react";
import { Box, Button, Typography, List } from "@mui/material";

import DateInputButton from "./DateInputButton";
import FileInputButton from "./FileInputButton";
import TextFields from "./TextFields";
import BookingItem from "./BookingItem";
import useBooking from "./hooks/useBooking";

const BookingSection = () => {
  const {
    bookings,
    setBookings,
    email,
    setEmail,
    phone,
    setPhone,
    title,
    setTitle,
    description,
    setDescription,
    booking_date,
    setDate,
    booking_time,
    setTime,
    editingIndex,
    setEditingIndex,
    handleBookingSubmit,
    handleEditBooking,
    handleDeleteBooking,
  } = useBooking();

  return (
    <Box
      sx={{
        maxWidth: 600,
        mt: 4,
        marginBottom: "100px",
      }}
    >
      <Typography variant="h5" mb={"20px"}>
        Schedule Your Discussion Session
      </Typography>
      <TextFields
        description={description}
        setDescription={setDescription}
        title={title}
        setTitle={setTitle}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
      ></TextFields>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <DateInputButton setTime={setTime} setDate={setDate}></DateInputButton>

        {/* <FileInputButton></FileInputButton> */}
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
          <BookingItem
            data={data}
            index={index}
            handleDeleteBooking={handleDeleteBooking}
            handleEditBooking={handleEditBooking}
          ></BookingItem>
        ))}
      </List>
    </Box>
  );
};

export default BookingSection;
