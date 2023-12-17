import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #151a1e; // Adjust to match your theme
  color: #fff;
  text-align: center;
  padding: 20px;
  font-size: 0.8em;

  @media (max-width: 768px) {
    font-size: 0.7em;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 0.6em;
    padding: 10px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Your Game Title. All rights reserved.
      {/* Additional content can be added here */}
    </FooterContainer>
  );
};

export default Footer;
