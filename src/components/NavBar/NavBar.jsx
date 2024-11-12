import {
  Stack,
  Avatar,
  Typography,
  AppBar,
  IconButton,
  Box,
} from "@mui/material";
import ColorModeSwitch from "./../Switch/ColorModeSwitch";
import { useColorScheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAside } from "../../contexts/AsideContext";
import AuthButton from "../Buttons/AuthButton";

function NavBar() {
  const { mode } = useColorScheme();
  const { setIsAside } = useAside();
  return (
    <AppBar
      sx={{
        borderBottom: 1,
        borderBottomColor: mode === "dark" ? "#272727" : "#ddd",
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
          <Avatar
            alt="Sigma School Logo"
            src={"https://images.cheatsheet.cam/images/state.webp"}
            sizes="60px"
          />

          <Typography fontSize={23} fontWeight={"600"} variant="h1">
            Cheatsheet
          </Typography>
        </Stack>
        <Stack flexDirection={"row"}>
          <Box sx={styles.box1}>
            <AuthButton></AuthButton>
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
