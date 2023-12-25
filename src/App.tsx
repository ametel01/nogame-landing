import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import styled from "styled-components";
import theme from "./theme";
import NavBar from "./components/NavBar";
import TextBox from "./components/TextBox";
import Footer from "./components/Footer";

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; // 100% of the viewport height
`;

// Content wrapper, which will grow and push the footer to the bottom
const ContentWrapper = styled.main`
  flex-grow: 1; // Grow to occupy as much space as possible
  // Rest of your styling...
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <ContentWrapper>
          <NavBar />
          <TextBox />
        </ContentWrapper>
        <Footer />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
