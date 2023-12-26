import React from "react";
import { useState } from "react";
import styled from "styled-components";
import logoMain from "../assets/logo-main.webp";
import { FaBars } from "react-icons/fa";
import { FaGithub, FaDiscord, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Drawer from "@mui/material/Drawer";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center; // Vertically center the items
  padding: 12px;
  background-color: #212a30;
  border-bottom: 1px solid #314049;

  @media (max-width: 768px) {
    flex-direction: row; // Keep the row layout on small screens
    justify-content: space-between; // Space between logo and hamburger menu
    align-items: center; // Align items on the same horizontal line
  }
`;

const Logo = styled.img`
height: 48px;

@media (max-width: 768px) {
  height: 24px; // Smaller height for screens 768px or less
}
`;

const IconLinks = styled.div`
  display: flex;
  gap: 10px;
  align-items: center; // Ensure icons are vertically centered

  @media (max-width: 768px) {
    flex-direction: column; // Stack icons vertically on small screens
    align-items: flex-start; // Align items to the start
  }
`;

const IconLink = styled.a`
  color: #f8f8ff;
  padding: 8px;
  display: flex;
  align-items: center;

  &:hover {
    color: #ccc; // Adjust hover color as needed
  }

  @media (max-width: 768px) {
    padding: 12px; // Increase padding for larger touch targets
    font-size: 1.2em; // Increase font size for readability
  }

  svg {
    @media (max-width: 768px) {
      width: 30px; // Increase icon size on small screens
      height: 30px;
    }
  }
`;

const Hamburger = styled(FaBars)`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

const IconLinksDesktop = styled.div`
  display: none; // Initially hidden

  @media (min-width: 769px) {
    display: flex; // Display on larger screens
    gap: 10px;
    align-items: center;
  }
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: #212a30; // Set the background color of the drawer
    height: 100%; // Ensure the drawer takes the full height
  }
`;

const NavBar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsDrawerOpen(open);
    };

  const iconLinksContent = (
    <IconLinks>
      <IconLink href="https://github.com/ametel01">
        <FaGithub size="24px" />
      </IconLink>
      <IconLink href="https://discord.gg/4ZBS3DMTJe">
        <FaDiscord size="24px" />
      </IconLink>
      <IconLink href="https://twitter.com/NoGameStarknet">
        <FaXTwitter size="24px" />
      </IconLink>
      <IconLink href="https://t.me/+8MsJiKToDvdiMjY0">
        <FaTelegram size="24px" />
      </IconLink>
    </IconLinks>
  );

  return (
    <Nav>
      <Logo src={logoMain} alt="Game Logo" />
      <Hamburger size="24px" onClick={toggleDrawer(true)} />
      <StyledDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {iconLinksContent}
      </StyledDrawer>
      <IconLinksDesktop>
        {iconLinksContent}
      </IconLinksDesktop>
    </Nav>
  );
};

export default NavBar;
