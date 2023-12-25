import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import starknetLogo from "../assets/starknet/SN-Symbol-Gradient - On dark bg.svg";

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start; // Align buttons to the start (left)
  gap: 20px; // Space between buttons
  margin: 32px 0; // Space above the buttons

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const StyledButton = styled(Button)`
  && {
    padding: 10px 20px;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 25px;
    border: none;
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s, box-shadow 0.2s;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.5);
    }
  }
`;
const MainnetButton = styled(StyledButton)`
  && {
    background: #cc2500; /* A bold red shade similar to the logo */
    color: #fff;
    font-weight: 600; /* Bolder font weight for better readability */
    &:hover {
      background: #a30000; /* A darker red for hover state */
    }
  }
`;

const TestnetButton = styled(StyledButton)`
  && {
    background: #006b8f; /* A complementary blue shade */
    color: #fff;
    font-weight: 600; /* Consistent font weight for both buttons */
    &:hover {
      background: #004d66; /* A darker blue for hover state */
    }
  }
`;

const Logo = styled.img`
  height: 30px; 
  margin-right: 8px;

  @media (max-width: 480px) {
    margin-left: 0;
    margin-top: 10px; // Space between the text and the logo when stacked
  }
`;

const ActionButtons: React.FC = () => {
  return (
    <>
      <ButtonsWrapper>
        <MainnetButton disabled href="path-to-mainnet-app">
        <Logo src={starknetLogo} alt="StarkNet Logo" />
          Launch Mainnet App
        </MainnetButton>
        <TestnetButton href="https://www.app.testnet.no-game.xyz/">
        <Logo src={starknetLogo} alt="StarkNet Logo" />
          Launch Sepolia App
        </TestnetButton>
      </ButtonsWrapper>
    </>
  );
};

export default ActionButtons;
