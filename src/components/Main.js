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
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 5rem;
  margin-bottom: 4rem;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export default Main;
