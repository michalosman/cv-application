import React from "react";
import styled from "styled-components";

const Input = ({ type, name, placeholder, onChange, value }) => {
  return (
    <InputWrapper
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};

const InputWrapper = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid transparent;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.lightActive};
  }
`;

export default Input;
