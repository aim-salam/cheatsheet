import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Stack,
  Avatar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DateInputButton from "./DateInputButton";
import FileInputButton from "./FileInputButton";

const BookingSection = () => {
  const [Bookings, setBookings] = useState([]);
  const [Booking, setBooking] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleBookingChange = (event) => {
    setBooking(event.target.value);
  };

  const handleBookingSubmit = () => {
    if (Booking.trim()) {
      if (editingIndex !== null) {
        const updatedBookings = [...Bookings];
        updatedBookings[editingIndex] = Booking;
        setBookings(updatedBookings);
        setEditingIndex(null);
      } else {
        setBookings([...Bookings, Booking]);
      }
      setBooking("");
    }
  };

  const handleEditBooking = (index) => {
    setBooking(Bookings[index]);
    setEditingIndex(index);
  };

  const handleDeleteBooking = (index) => {
    const updatedBookings = Bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mt: 4,
        marginBottom: "100px",
      }}
    >
      <Typography variant="h6">Schedule Your Discussion Session</Typography>
      <TextField
        fullWidth
        label="Add a Booking"
        variant="outlined"
        value={Booking}
        onChange={handleBookingChange}
        sx={{ mb: 2 }}
      />
      <Box
        sx={{
          //   backgroundColor: "#e6e3e3",

          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <DateInputButton></DateInputButton>

        <FileInputButton></FileInputButton>
        <Button
          variant="text"
          onClick={handleBookingSubmit}
          sx={{ backgroundColor: "#e6e3e3", color: "black", width: "100px" }}
        >
          {editingIndex !== null ? "Update" : "Submit"}
        </Button>
      </Box>
      <List sx={{ mt: 3 }}>
        {Bookings.map((c, index) => (
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
                    backgroundColor: "#f5f5f5",
                    p: "10px",
                    borderRadius: "10px",
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack>
                    <ListItemText
                      primary={
                        <Box
                          sx={{
                            display: "flex",
                          }}
                        >
                          <Typography
                            component="span"
                            fontWeight="bold"
                            marginRight={"5px"}
                          >
                            {"Akmal Bakri :"}
                          </Typography>
                          <Typography component="span">{c}</Typography>
                        </Box>
                      }
                    />
                    <Box
                      component="img"
                      src={
                        "https://images.cheatsheet.cam/images/image-1727881142974.webp"
                      }
                      alt="Uploaded Image Preview"
                      sx={{ height: "50px", width: "50px", mr: 2 }}
                    />
                  </Stack>
                  <Typography sx={{ fontSize: "15px", mt: "5px" }}>
                    1/2/2022
                  </Typography>
                </Stack>
              </Stack>

              {/* <IconButton edge="end" onClick={() => handleEditBooking(index)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => handleDeleteBooking(index)}>
                <DeleteIcon />
              </IconButton> */}
            </ListItem>
          </>
        ))}
      </List>
    </Box>
  );
};

export default BookingSection;
