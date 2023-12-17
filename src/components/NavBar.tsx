import React from "react";
import styled from "styled-components";
import roundLogo from "../assets/logo-round.png";

const Nav = styled.nav`
  background-color: #151a1e;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: 40px; // Adjust size as needed
`;

const IconLinks = styled.div`
  display: flex;
  gap: 10px;
`;

const NavBar: React.FC = () => {
  return (
    <Nav>
      <Logo src={roundLogo} alt="Game Logo" />
      <IconLinks>
        <a href="https://github.com/ametel01">GitHub</a>
        <a href="https://discord.gg/4ZBS3DMTJe">Discord</a>
        <a href="https://twitter.com/home">Twitter</a>
        <a href="https://t.me/+8MsJiKToDvdiMjY0">Telegram</a>
      </IconLinks>
    </Nav>
  );
};

export default NavBar;
