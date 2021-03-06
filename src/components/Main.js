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
  padding: 4rem;
  margin-bottom: 5rem;
`;

export default Main;
