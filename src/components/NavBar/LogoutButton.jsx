import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthentication from "../../features/authentication/hooks/useAuthentication";
function LogoutButton() {
  const navigate = useNavigate();
  const { handleLogout } = useAuthentication();
  return (
    <Button
      sx={{ marginLeft: "20px" }}
      variant="contained"
      onClick={() => {
        handleLogout();
        navigate("/");
      }}
    >
      Logout
    </Button>
  );
}

export default LogoutButton;
