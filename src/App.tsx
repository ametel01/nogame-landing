import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import NavBar from "./components/NavBar";
import MainLogo from "./components/MainLogo";
import TextBox from "./components/TextBox";
import ActionButtons from "./components/ActionButtons";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <MainLogo />
      <TextBox />
      <ActionButtons />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
