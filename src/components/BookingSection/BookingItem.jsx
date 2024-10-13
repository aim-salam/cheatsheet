import React from "react";
import {
  Box,
  Typography,
  ListItem,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
function BookingItem({ data, index, handleDeleteBooking, handleEditBooking }) {
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
              backgroundColor: "#f5f5f5",
              p: "10px",
              borderRadius: "10px",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Stack>
              <Typography>{data.email}</Typography>
              <Typography>{data.phone}</Typography>
              <Typography>{data.title}</Typography>
              <Typography>{data.description}</Typography>
              {/* <Box
                component="img"
                src={
                  "https://images.cheatsheet.cam/images/image-1727881142974.webp"
                }
                alt="Uploaded Image Preview"
                sx={{ height: "50px", width: "50px", mr: 2 }}
              /> */}
            </Stack>
            <Stack>
              <Typography sx={{ fontSize: "15px", mt: "5px" }}>
                {data.booking_date + "  . " + data.booking_time}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack>
          <IconButton edge="end" onClick={() => handleEditBooking(index)}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" onClick={() => handleDeleteBooking(index)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </ListItem>
    </>
  );
}

export default BookingItem;
