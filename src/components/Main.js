import React from "react";
import styled from "styled-components";
import CVForm from "./CVForm";
import CVResult from "./CVResult";

const Main = () => {
  return (
    <MainWrapper>
      <CVForm />
      <CVResult />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 6rem;
  padding: 5rem;
  margin-bottom: 4rem;

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export default Main;
