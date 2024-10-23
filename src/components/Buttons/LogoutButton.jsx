import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthentication from "../../features/authentication/hooks/useAuthentication";

function LogoutButton() {
  const navigate = useNavigate();
  const { handleLogout } = useAuthentication();
  return (
    <Button
      sx={styles.button}
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

const styles = {
  button: {
    paddingLeft: "20px",
    paddingRight: "20px",
    marginLeft: "20px",
  },
};

export default LogoutButton;
