import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#28a745", // Customize primary color
    },
    secondary: {
      main: "#279AF1", // Customize secondary color
    },
    background: {
      default: "#151a1e",
    },
    text: {
      primary: "#F4F3EE", // Main text color
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    allVariants: {
      color: "#F4F3EE", // Apply the color to all text variants
    },
  },
  breakpoints: {
    values: {
      xs: 0, // small phone
      sm: 600, // phone
      md: 900, // tablet
      lg: 1200, // small laptop
      xl: 1536, // desktop
      // You can add more breakpoints if you need them
    },
  },
});

export default theme;
