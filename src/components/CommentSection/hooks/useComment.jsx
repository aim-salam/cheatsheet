import React from "react";
import { useState, useEffect } from "react";
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
function useBooking() {
  const [bookings, setBookings] = useState([]);
  const [receiver_email, setReceiver] = useState("");
  const [comment, setComment] = useState("");

  const [editingIndex, setEditingIndex] = useState(null);

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const { topic, setTopic } = useTopic();
  const { user } = useAuth();

  const handleUploadToFirebase = () => {
    if (image) {
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
            setImageURL(downloadURL);
            setImage(null);
            setPreview(null);
            setUploading(false);
            setProgress(0);
            handleUploadToFirestore(downloadURL);
          });
        }
      );
    } else {
      handleUploadToFirestore(imageURL);
    }
  };

  const handleUploadToFirestore = (image_url) => {
    console.log(1, image_url);
    if (comment.trim()) {
      if (editingIndex !== null) {
        const updatedBookings = [...bookings];
        const updatedData = {
          ...updatedBookings[editingIndex],
          comment,
          receiver_email,
          image_url,
        };
        updatedBookings[editingIndex] = updatedData;
        setBookings(updatedBookings);
        axios
          .put(
            `${import.meta.env.VITE_COMMENT_URL}/comment/${
              updatedBookings[editingIndex].id
            }`,
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
          receiver_email,
          date: new Date().toISOString(),
          topic: topic.topic,
          image_url: image_url,
          //random
          sender_email: user.email,
          profile_url: user.photoURL || "",
        };
        console.log(topic);

        setBookings([...bookings, newData]);

        axios
          .post("${import.meta.env.VITE_COMMENT_URL}/comment", newData)
          .then((response) => {
            console.log("Success:", response.data);
          })
          .catch((error) => {
            console.error("Error", error);
          });
      }
      setComment("");
      setReceiver("");
      setImageURL("");
    }
  };

  const handleBookingSubmit = () => {
    handleUploadToFirebase();
  };

  const handleEditBooking = (index) => {
    console.log(bookings[index]);
    setComment(bookings[index].comment);
    setReceiver(bookings[index].receiver_email);
    setImageURL(bookings[index].image_url);
    setEditingIndex(index);
  };

  const handleDeleteBooking = async (index) => {
    const deletedBookings = bookings[index];
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);

    axios
      .delete(
        `${import.meta.env.VITE_COMMENT_URL}/comment/${bookings[index].id}`
      )
      .then((response) => {
        const fileRef = ref(storage, `${deletedBookings.image_url}`);
        deleteObject(fileRef);

        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const fetchPosts = () => {
    console.log("hello");
    fetch(`${import.meta.env.VITE_COMMENT_URL}/comment/topic/${topic.topic}`)
      .then((response) => response.json())
      .then((data) => {
        setBookings([...data]);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetchPosts();
    console.log(topic);
  }, [topic]);

  return {
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
    progress,
    uploading,
    setImage,
    preview,
    setPreview,
  };
}

export default useBooking;
