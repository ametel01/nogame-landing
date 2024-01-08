import React from 'react';
import styled from 'styled-components';
import ActionButtons from './ActionButtons';
import backgroundImage from '../assets/bg-image.webp';
import roundLogo from '../assets/logo3-removebg.png';
import snSymbol from '../assets/starknet/SN-Symbol-Flat colour - On dark bg.svg';

// Adjusted the container to not necessarily take up the full height
const CenteredFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Align children to the start (left side)
  padding: 4% 5%; // Padding on all sides

  @media (max-width: 768px) {
    align-items: center; // Center-align on small screens
  }
`;

const BoxWrapper = styled.div`
  text-align: left; // Align text to the left
  max-width: 800px; // Adjust width as needed to fit your content
  margin-left: 64px;
  margin-top: 48px;

  @media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 12px;
    text-align: center; // Center-align text on small screens
  }
`;

const BackgroundImage = styled.div`
  display: none; // Initially hidden
  background: url(${backgroundImage}) no-repeat center center; // Centered background image
  background-size: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%; // Full width
    height: 200px;
    display: block; // Display on small screens
  }
`;

const CatchyPhrase = styled.h1`
  font-size: 2.8em;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.1;
  letter-spacing: normal;

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 48px;
  }
`;

const GameDescription = styled.p`
  font-size: 1.3em; // Readable font size
  margin: 0; // Removed margin to reduce space
  font-weight: normal; // Standard font weight for description
  line-height: 1.6; // Line height for readability
  opacity: 0.9; // Slightly transparent

  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-top: 48px;
  }
`;

const LogosContainer = styled.div`
  display: none; // Initially hidden
  @media (max-width: 768px) {
    display: flex; // Display on small screens
    justify-content: center; // Center the logos horizontally
    align-items: center; // Align the logos vertically
    gap: 60px; // Space between logos
    margin-top: 48px; // Margin above the logos
  }
`;

const LogoImage = styled.img`
  height: 48px; // Adjust the size as needed
`;

const TextBox: React.FC = () => {
  return (
    <CenteredFlexContainer>
      <BoxWrapper>
        <CatchyPhrase>
          Forge Your Destiny in the Blockchain Universe of NoGame
        </CatchyPhrase>
        <BackgroundImage />
        <GameDescription>
          Enter NoGame, a revolutionary blockchain MMO where your strategy
          shapes the universe. Own planets as NFTs, trade resources as ERC20
          tokens, and engage in strategic battles for dominance.
        </GameDescription>
        <LogosContainer>
          <LogoImage src={roundLogo} alt="Round Logo" />
          <LogoImage src={snSymbol} alt="StarkNet Symbol" />
        </LogosContainer>
        <ActionButtons />
      </BoxWrapper>
    </CenteredFlexContainer>
  );
};

export default TextBox;
