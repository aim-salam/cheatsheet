import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import useHomePage from "../../../hooks/useHomePage";
function useBooking() {
  const [bookings, setBookings] = useState([]);
  const [receiver_id, setReceiver] = useState("");
  const [comment, setComment] = useState("");

  const [editingIndex, setEditingIndex] = useState(null);

  const { topic, setTopic } = useHomePage();

  const handleBookingSubmit = () => {
    if (comment.trim()) {
      if (editingIndex !== null) {
        const updatedBookings = [...bookings];
        const updatedData = {
          ...updatedBookings[editingIndex],
          comment,
        };
        updatedBookings[editingIndex] = updatedData;
        setBookings(updatedBookings);
        axios
          .put(
            `https://5ddde656-d855-4f06-b5d0-ae67e1119489-00-1831yo3lmus36.sisko.replit.dev/comment/${updatedBookings[editingIndex].id}`,
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
          id: uuidv4(),
          comment,
          receiver_id,
          date: new Date().toISOString().split("").reverse().join(""),
          topic: topic.topic,
          //image_url
          //random
          user_id: "U001",
        };

        setBookings([...bookings, newData]);

        axios
          .post(
            "https://5ddde656-d855-4f06-b5d0-ae67e1119489-00-1831yo3lmus36.sisko.replit.dev/comment",
            newData
          )
          .then((response) => {
            console.log("Success:", response.data);
          })
          .catch((error) => {
            console.error("Error", error);
          });
      }
      setComment("");
      setReceiver("");
    }
  };

  const handleEditBooking = (index) => {
    console.log(bookings[index]);
    setComment(bookings[index].comment);
    setReceiver(bookings[index].receiver_id);
    setEditingIndex(index);
  };

  const handleDeleteBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);

    axios
      .delete(
        `https://5ddde656-d855-4f06-b5d0-ae67e1119489-00-1831yo3lmus36.sisko.replit.dev/comment/${bookings[index].id}`
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
    receiver_id,
    setReceiver,
    comment,
    setComment,
    editingIndex,
    setEditingIndex,
    handleBookingSubmit,
    handleEditBooking,
    handleDeleteBooking,
  };
}

export default useBooking;
