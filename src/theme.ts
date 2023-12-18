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
      default: "#151a1e", // Set the default background color
    },
    text: {
      primary: "#F4F3EE", // Main text color
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    allVariants: {
      color: "#f8f8ff", // Apply the color to all text variants
    },
  },
});

export default theme;
