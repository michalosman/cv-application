import React from "react";
import styled from "styled-components";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Button from "../Utils/Button";

const CVForm = () => {
  return (
    <CVFormWrapper>
      <Personal />
      <Education />
      <Experience />
      <Button text="Generate PDF"></Button>
    </CVFormWrapper>
  );
};

const CVFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  min-width: 700px;
  padding: 2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.light};
`;

export default CVForm;
