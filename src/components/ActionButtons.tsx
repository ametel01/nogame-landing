import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // Space between buttons
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const StyledButton = styled(Button)`
  && {
    // Increase specificity for overriding MUI styles
    padding: 10px 20px;
    color: #fff;
    border-radius: 5px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const ActionButtons: React.FC = () => {
  return (
    <ButtonsWrapper>
      <StyledButton
        variant="contained"
        color="primary"
        href="path-to-mainnet-app"
      >
        Launch Mainnet App
      </StyledButton>
      <StyledButton
        variant="contained"
        color="secondary"
        href="path-to-testnet-app"
      >
        Launch Testnet App
      </StyledButton>
    </ButtonsWrapper>
  );
};

export default ActionButtons;
