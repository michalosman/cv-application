import React from "react";
import styled from "styled-components";

const TextArea = ({ onChange, name, placeholder, value }) => {
  return (
    <TextAreaWrapper
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};

const TextAreaWrapper = styled.textarea`
  height: 80px;
  padding: 0.5rem;
  padding-right: 2rem;
  border-radius: 5px;
  border: 1px solid transparent;
  resize: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.lightActive};
  }
`;

export default TextArea;
