import {
  Stack,
  Avatar,
  Typography,
  AppBar,
  IconButton,
  Box,
} from "@mui/material";
import logo from "./../../assets/logo.jpg";
import ColorModeSwitch from "./../Switch/ColorModeSwitch";
import { useColorScheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAside } from "../../contexts/AsideContext";
import LogoutButton from "../Buttons/LogoutButton";

function NavBar() {
  const { mode } = useColorScheme();
  const { setIsAside } = useAside();
  return (
    <AppBar
      sx={{
        borderBottom: 1,
        borderBottomColor: mode === "light" ? "#ddd" : "#272727",
        ...styles.appBar,
      }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <IconButton
            sx={{ display: { lg: "none" } }}
            onClick={setIsAside}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Avatar alt="Sigma School Logo" src={logo} sizes="60px" />

          <Typography fontSize={23} fontWeight={"600"} variant="h1">
            Cheatsheet
          </Typography>
        </Stack>
        <Stack flexDirection={"row"}>
          <ColorModeSwitch></ColorModeSwitch>
          <Box sx={styles.box1}>
            <LogoutButton></LogoutButton>
          </Box>
        </Stack>
      </Stack>
    </AppBar>
  );
}

const styles = {
  appBar: {
    position: "fixed",
    color: "primary",

    paddingRight: "20px",
    paddingLeft: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    boxShadow: 0,
  },
  box1: {
    display: { xs: "none", sm: "block" },
  },
};

export default NavBar;
