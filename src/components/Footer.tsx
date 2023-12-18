import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  color: #fff;
  text-align: center;
  margin-top: 64px;
  padding: 20px;
  font-size: 0.8em;
  opacity: 0.7;

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
      © {new Date().getFullYear()} Your NoGame. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
