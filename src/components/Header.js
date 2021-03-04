import React from "react";
import styled from "styled-components";
import { FaBriefcase } from "react-icons/fa";

function Header() {
  return (
    <HeaderStyled>
      <Logo>
        <FaBriefcase />
      </Logo>
      <Title>CV Creator</Title>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  display: flex;
  font-size: 2rem;
`;
const Logo = styled.div``;
const Title = styled.h1``;

export default Header;
