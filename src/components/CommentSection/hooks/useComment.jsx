import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function useBooking() {
  const [bookings, setBookings] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [booking_date, setDate] = useState("");
  const [booking_time, setTime] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleBookingSubmit = () => {
    if (description.trim()) {
      if (editingIndex !== null) {
        const updatedBookings = [...bookings];
        const updatedData = {
          ...updatedBookings[editingIndex],
          email,
          phone,
          description,
          title,
          booking_date,
          booking_time,
        };
        updatedBookings[editingIndex] = updatedData;
        setBookings(updatedBookings);
        axios
          .put(
            `https://a44ad0e3-6688-40ea-8856-e9dcfc763cb4-00-2yr7oz1fvtf1.sisko.replit.dev/bookings/${updatedBookings[editingIndex].id}`,
            updatedData
          )
          .then((response) => {
            console.log("Success:", response.data);
          })
          .catch((error) => {
            console.error("Error", error);
          });
        setEditingIndex(null);
      } else {
        const newData = {
          email,
          phone,
          description,
          title,
          booking_date,
          booking_time,
          id: new Date().toISOString(),
          user_id: "U001",
        };

        setBookings([...bookings, newData]);

        axios
          .post(
            "https://a44ad0e3-6688-40ea-8856-e9dcfc763cb4-00-2yr7oz1fvtf1.sisko.replit.dev/bookings",
            newData
          )
          .then((response) => {
            console.log("Success:", response.data);
          })
          .catch((error) => {
            console.error("Error", error);
          });
      }
      setTitle("");
      setDescription("");
      setEmail("");
      setPhone("");
    }
  };

  const handleEditBooking = (index) => {
    console.log(bookings[index]);
    setTitle(bookings[index].title);
    setDescription(bookings[index].description);
    setEmail(bookings[index].email);
    setPhone(bookings[index].phone);
    setEditingIndex(index);
  };

  const handleDeleteBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);

    axios
      .delete(
        `https://a44ad0e3-6688-40ea-8856-e9dcfc763cb4-00-2yr7oz1fvtf1.sisko.replit.dev/bookings/${bookings[index].id}`
      )
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const fetchPosts = (userId) => {
    // fetch(
    //   `https://a44ad0e3-6688-40ea-8856-e9dcfc763cb4-00-2yr7oz1fvtf1.sisko.replit.dev/bookings`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setBookings([...data]);
    //     console.log(data);
    //   })
    //   .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
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
  };
}

export default useBooking;
