import React from "react";
import styled from "styled-components";
import roundLogo from "../assets/logo-round.png";
import { FaGithub, FaDiscord, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center; // Add this line to vertically center the items
  padding: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: 60px;
`;

const IconLink = styled.a`
  color: #f8f8ff;
  padding: 8px;
  &:hover {
    color: #ccc; // Adjust hover color as needed
  }
`;

const IconLinks = styled.div`
  display: flex;
  gap: 10px;
  align-items: center; // Add this line to ensure icons are also vertically centered
`;

const NavBar: React.FC = () => {
  return (
    <Nav>
      <Logo src={roundLogo} alt="Game Logo" />
      <IconLinks>
        <IconLink href="https://github.com/ametel01">
          <FaGithub size="30px" />
        </IconLink>
        <IconLink href="https://discord.gg/4ZBS3DMTJe">
          <FaDiscord size="30px" />
        </IconLink>
        <IconLink href="https://twitter.com/home">
          <FaXTwitter size="30px" />
        </IconLink>
        <IconLink href="https://t.me/+8MsJiKToDvdiMjY0">
          <FaTelegram size="30px" />
        </IconLink>
      </IconLinks>
    </Nav>
  );
};

export default NavBar;
