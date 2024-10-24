import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthentication from "../../features/authentication/hooks/useAuthentication";

function AuthButton() {
  const navigate = useNavigate();
  const { user, handleLogout } = useAuthentication();
  return (
    <Button
      sx={styles.button}
      variant="contained"
      onClick={() => {
        console.log(user);
        if (user === null) {
          navigate("/auth");
        } else {
          handleLogout();
          console.log("logout");
        }
      }}
    >
      {user === null ? "Login" : "Logout"}
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

export default AuthButton;
