import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    // mode: "dark",
    primary: {
      main: "#1976d2", // Blue color
    },
    secondary: {
      main: "#dc004e", // Pink color
    },
    // You can add other colors or customize more aspects here
  },
  typography: {
    // You can customize typography here
    fontFamily: "Roboto, Arial, sans-serif",
  },
  // Additional customizations can be added here
});

export default theme;
