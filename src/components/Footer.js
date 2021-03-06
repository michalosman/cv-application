import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <Copyright>Copyright © 2021 michalosman</Copyright>
      <Link href="https://github.com/michalosman" target="_blank">
        <FaGithub />
      </Link>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
`;

const Copyright = styled.p`
  margin-right: 1rem;
`;

const Link = styled.a`
  position: relative;
  top: 0.2rem;
  color: ${({ theme }) => theme.colors.light};

  &:hover {
    color: ${({ theme }) => theme.colors.lightHover};
  }
`;
