import React from "react";
import styled from "styled-components";
import CVHeader from "./CVHeader";
import CVMain from "./CVMain";

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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default CVResult;
