import React from "react";
import styled from "styled-components";
import mainLogo from "../assets/logo-main.png";

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 64px 0; // Adjust margins as needed
`;

const LogoImage = styled.img`
  max-width: 800px;
  height: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
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
