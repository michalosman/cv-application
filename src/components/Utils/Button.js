import React from "react";
import styled from "styled-components";

const Button = ({ text, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  padding: 1rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.darkActive};
  }
`;

export default Button;
