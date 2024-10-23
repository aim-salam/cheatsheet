import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useTopic } from "../../../contexts/TopicContext";
import { useAuth } from "./../../../contexts/AuthContext";
import { storage } from "../../../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const COMMENT_URL = import.meta.env.VITE_COMMENT_URL;

function useBooking() {
  const [bookings, setBookings] = useState([]);
  const [receiverEmail, setReceiverEmail] = useState("");
  const [comment, setComment] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const { topic } = useTopic();
  const { user } = useAuth();

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `${COMMENT_URL}/comment/topic/${topic.topic}`
      );
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleUploadToFirebase = () => {
    if (!image && !imageURL) return handleUploadToFirestore(imageURL);

    const storageRef = ref(storage, `comment_images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    setUploading(true);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercent =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progressPercent);
      },
      (error) => {
        console.error("Upload failed:", error);
        setUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          handleUploadToFirestore(downloadURL);
        });
      }
    );
  };

  const handleUploadToFirestore = async (image_url) => {
    if (!comment.trim()) return;

    const updatedBookings = [...bookings];
    const newData = {
      id: uuidv4(),
      comment,
      receiver_email: receiverEmail,
      date: new Date().toISOString(),
      topic: topic.topic,
      image_url,
      sender_email: user.email,
      profile_url: user.photoURL || "",
    };

    if (editingIndex !== null) {
      updatedBookings[editingIndex] = {
        ...updatedBookings[editingIndex],
        ...newData,
      };
      setBookings(updatedBookings);

      try {
        await axios.put(
          `${COMMENT_URL}/comment/${updatedBookings[editingIndex].id}`,
          updatedBookings[editingIndex]
        );
      } catch (error) {
        console.error("Error updating booking:", error);
      } finally {
        setEditingIndex(null);
      }
    } else {
      setBookings((prev) => [...prev, newData]);
      try {
        await axios.post(`${COMMENT_URL}/comment`, newData);
      } catch (error) {
        console.error("Error creating booking:", error);
      }
    }

    // Clear input fields after submission
    resetForm();
  };

  const handleDeleteBooking = async (index) => {
    const deletedBooking = bookings[index];
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);

    try {
      await axios.delete(`${COMMENT_URL}/comment/${deletedBooking.id}`);
      const fileRef = ref(storage, `${deletedBooking.image_url}`);
      await deleteObject(fileRef);
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const handleEditBooking = (index) => {
    const bookingToEdit = bookings[index];
    setComment(bookingToEdit.comment);
    setReceiverEmail(bookingToEdit.receiver_email);
    setImageURL(bookingToEdit.image_url);
    setEditingIndex(index);
  };

  const resetForm = () => {
    setComment("");
    setReceiverEmail("");
    setImageURL("");
    setImage(null);
    setUploading(false);
    setProgress(0);
  };

  useEffect(() => {
    fetchPosts();
  }, [topic]);

  return {
    bookings,
    setBookings,
    receiverEmail,
    setReceiverEmail,
    comment,
    setComment,
    editingIndex,
    setEditingIndex,
    handleBookingSubmit: handleUploadToFirebase,
    handleEditBooking,
    handleDeleteBooking,
    progress,
    uploading,
    setImage,
  };
}

export default useBooking;
