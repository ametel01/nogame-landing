import React from "react";
import styled from "styled-components";
import ActionButtons from "./ActionButtons";

// Adjusted the container to not necessarily take up the full height
const CenteredFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Align children to the start (left side)
  padding: 4% 5%; // Padding on all sides
`;

const BoxWrapper = styled.div`
  text-align: left; // Align text to the left
  max-width: 800px; // Adjust width as needed to fit your content
  margin-left: 128px;
  margin-top: 48px;
`;

const CatchyPhrase = styled.h1`
  font-size: 2.8em; // Slightly reduced font size
  font-weight: bold; // Bold font weight
  text-transform: uppercase; // Uppercase letters for the phrase
  line-height: 1.1; // Tight line height
  letter-spacing: normal; // Adjust letter spacing as needed
  @media (max-width: 768px) {
    font-size: 2.5em; // Further reduced font size for smaller screens
  }
`;

const GameDescription = styled.p`
  font-size: 1.2em; // Readable font size
  margin: 0; // Removed margin to reduce space
  font-weight: normal; // Standard font weight for description
  line-height: 1.6; // Line height for readability
  opacity: 0.9; // Slightly transparent
`;

const TextBox: React.FC = () => {
  return (
    <CenteredFlexContainer>
      <BoxWrapper>
        <CatchyPhrase>
          Forge Your Destiny in the Blockchain Universe of NoGame
        </CatchyPhrase>
        <GameDescription>
          Enter NoGame, a revolutionary blockchain MMO where your strategy
          shapes the universe. Own planets as NFTs, trade resources as ERC20
          tokens, and engage in strategic battles for dominance.
        </GameDescription>
      </BoxWrapper>
      <ActionButtons />
    </CenteredFlexContainer>
  );
};

export default TextBox;
