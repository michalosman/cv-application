import React from "react";
import styled from "styled-components";
import CVHeader from "./CVHeader";
import CVMain from "./CVMain";

// TODO: Make it fixed on scroll

const CVResult = () => {
  return (
    <CVResultWrapper>
      <CVHeader />
      <CVMain />
    </CVResultWrapper>
  );
};

const CVResultWrapper = styled.div`
  min-width: 700px;
`;

export default CVResult;
