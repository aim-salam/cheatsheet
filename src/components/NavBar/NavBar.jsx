import { Stack, Avatar, Typography, AppBar, IconButton } from "@mui/material";
import logo from "./../../assets/logo.jpg";
import ColorModeSwitch from "./../Switch/ColorModeSwitch";
import LogoutButton from "./LogoutButton";
import { useColorScheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAside } from "../../contexts/AsideContext";

function NavBar() {
  const { mode } = useColorScheme();
  const { setIsAside } = useAside();
  return (
    <AppBar
      // position="static"
      position="fixed"
      color="primary"
      sx={{
        boxShadow: 0,
        borderBottom: 1,
        borderBottomColor: mode === "light" ? "#ddd" : "#272727",
        paddingRight: "20px",
        paddingLeft: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
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
          <LogoutButton></LogoutButton>
          <ColorModeSwitch></ColorModeSwitch>
        </Stack>
      </Stack>
    </AppBar>
  );
}

export default NavBar;
