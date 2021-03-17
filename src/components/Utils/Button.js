import React from "react";
import styled, { css } from "styled-components";

const Button = ({ text, onClick, primary, secondary }) => {
  return (
    <ButtonWrapper onClick={onClick} primary={primary} secondary={secondary}>
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  padding: 1rem;
  border-radius: 5px;
  font-weight: bold;

  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.darkActive};
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.light};

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
      }

      &:active {
        background-color: ${({ theme }) => theme.colors.primaryActive};
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.light};

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryHover};
      }

      &:active {
        background-color: ${({ theme }) => theme.colors.secondaryActive};
      }
    `}
`;

export default Button;
