import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  margin-top: auto; // Pushes the footer to the bottom
  padding: 24px;
  border-top: 1px solid #314049;
  font-size: 0.8em;
  opacity: 0.7;
  background-color: #212a30;

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
      © {new Date().getFullYear()} NoGame. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
