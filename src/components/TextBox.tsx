import React from "react";
import styled from "styled-components";

const BoxWrapper = styled.div`
  text-align: center;
  padding: 20px;
  margin: 20px 0; // Adjust margins as needed
  color: #fff; // Adjust text color as needed
`;

const CatchyPhrase = styled.h1`
  font-size: 2em; // Adjust font size as needed
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const GameDescription = styled.p`
  font-size: 1em;
`;

const TextBox: React.FC = () => {
  return (
    <BoxWrapper>
      <CatchyPhrase>Your Catchy Phrase Here</CatchyPhrase>
      <GameDescription>
        Brief description of your game, its features, or its unique selling
        points.
      </GameDescription>
    </BoxWrapper>
  );
};

export default TextBox;
