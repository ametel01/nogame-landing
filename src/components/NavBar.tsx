import React from "react";
import { useState } from "react";
import styled from "styled-components";
import roundLogo from "../assets/logo-main.png";
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

const Hamburger = styled(FaBars)`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
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

  return (
    <Nav>
      <Logo src={roundLogo} alt="Game Logo" />
      <Hamburger size="24px" onClick={toggleDrawer(true)} />
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <IconLinks
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        ></IconLinks>
        <IconLinks>
          <IconLink href="https://github.com/ametel01">
            <FaGithub size="24px" />
          </IconLink>
          <IconLink href="https://discord.gg/4ZBS3DMTJe">
            <FaDiscord size="24px" />
          </IconLink>
          <IconLink href="https://twitter.com/home">
            <FaXTwitter size="24px" />
          </IconLink>
          <IconLink href="https://t.me/+8MsJiKToDvdiMjY0">
            <FaTelegram size="24px" />
          </IconLink>
        </IconLinks>
      </Drawer>
    </Nav>
  );
};

export default NavBar;
