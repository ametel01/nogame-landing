import React from "react";
import styled from "styled-components";
import mainLogo from "../assets/logo-main.png";

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px; // Adjust margins as needed
`;

const LogoImage = styled.img`
  max-width: 700px;
  height: auto;
  @media (max-width: 768px) {
    // Adjust size for mobile devices
    max-width: 70%;
  }
`;

const MainLogo: React.FC = () => {
  return (
    <LogoWrapper>
      <LogoImage src={mainLogo} alt="Main Game Logo" />
    </LogoWrapper>
  );
};

export default MainLogo;
