import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import styled from 'styled-components';
import theme from './theme';
import NavBar from './components/NavBar';
import TextBox from './components/TextBox';
import Footer from './components/Footer';
import backgroundImage from './assets/bg-image.webp';
import ClaimPioneerNft from './pages/PioneersNft';
import { StarknetProvider } from './components/StarknetProvider';

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

const BackgroundImageContainer = styled.div`
  position: fixed; // Use fixed for background positioning relative to the viewport
  right: 0; // Align to the right edge of the screen
  top: 50%; // Vertically centered
  transform: translateY(-50%) rotate(25deg); // Adjust vertical centering, tilt at 25 degrees
  opacity: 0.5; // High opacity (0 is fully transparent, 1 is fully opaque)
  background: url(${backgroundImage}) no-repeat center center; // No repeat, centered
  background-size: contain; // Contain the image within the element without cropping
  width: 40%; // Width of the image, adjust as needed
  height: 40%; // Height of the image, adjust as needed
  z-index: -1; // Ensure it stays in the background

  // Hide the background image on phones and tablets
  @media (max-width: 768px) {
    display: none; // Hide on devices with width 768px or less
  }
`;

const App: React.FC = () => {
  return (
    <StarknetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
          <BackgroundImageContainer />
          <ContentWrapper>
            <Router>
              <NavBar />
              <Routes>
                <Route path="/" element={<TextBox />} />
                <Route path="/pioneers" element={<ClaimPioneerNft />} />
              </Routes>
            </Router>
          </ContentWrapper>
          <Footer />
        </MainLayout>
      </ThemeProvider>
    </StarknetProvider>
  );
};

export default App;
