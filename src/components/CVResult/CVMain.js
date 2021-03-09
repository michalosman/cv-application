import React from "react";
import styled from "styled-components";
import Story from "./Story";
import Sidebar from "./Sidebar";

const CVMain = () => {
  return (
    <CVMainWrapper>
      <Story />
      <Sidebar />
    </CVMainWrapper>
  );
};

const CVMainWrapper = styled.div`
  display: flex;
`;

export default CVMain;
