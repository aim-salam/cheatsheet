import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();
  return (
    <Button
      sx={{ marginLeft: "20px" }}
      variant="contained"
      onClick={() => {
        navigate("/");
      }}
    >
      Logout
    </Button>
  );
}

export default LogoutButton;
