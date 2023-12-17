import React from "react";
import styled from "styled-components";
import mainLogo from "../assets/logo-main.png";

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0; // Adjust margins as needed
`;

const LogoImage = styled.img`
  max-width: 800px;
  height: auto; // Ensures the logo is responsive
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
