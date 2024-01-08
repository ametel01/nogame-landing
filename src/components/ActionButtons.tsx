import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import styled from 'styled-components';
import starknetLogo from '../assets/starknet/SN-Symbol-Gradient - On dark bg.svg';
import nftLogo from '../assets/nft.png';

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start; // Align buttons to the start (left)
  gap: 20px; // Space between buttons
  margin: 32px 0; // Space above the buttons

  @media (max-width: 768px) {
    display: none; // Hide the buttons on screens smaller than 768px
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
    background: #a31e00; // A bold red shade similar to the logo
    color: #fff;
    font-weight: 600; // Bolder font weight for better readability

    &:hover {
      background: #8f1a00; // A darker red for hover state
    }

    &.Mui-disabled {
      background: #3b3f53 !important; // A muted red shade when disabled
      color: #707070; // Greyed out text color
    }
  }
`;

export const TestnetButton = styled(StyledButton)`
  && {
    background: #4a63aa; // A complementary blue shade
    color: #fff;
    font-weight: 600; // Consistent font weight for both buttons

    &:hover {
      background: #445c9c; // A darker blue for hover state
    }

    &:disabled {
      background: #3b3f53; // A muted blue shade when disabled
      color: #bbb; // Greyed out text color
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
        <Tooltip title="Mainnet Coming Q2 2024!" arrow>
          <span>
            <MainnetButton disabled href="path-to-mainnet-app">
              <Logo src={starknetLogo} alt="StarkNet Logo" />
              Launch Mainnet App
            </MainnetButton>
          </span>
        </Tooltip>
        <TestnetButton
          href="https://www.app.testnet.no-game.xyz/"
          // target="_blank"
        >
          <Logo src={starknetLogo} alt="StarkNet Logo" />
          Launch Sepolia App
        </TestnetButton>
        <Link to="/pioneers" style={{ textDecoration: 'none' }}>
          <MainnetButton>
            <Logo src={nftLogo} alt="StarkNet Logo" />
            Claim Pioneer NFT
          </MainnetButton>
        </Link>
      </ButtonsWrapper>
    </>
  );
};

export default ActionButtons;
