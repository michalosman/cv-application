import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";

const CVResult = () => {
  return (
    <CVResultWrapper>
      <Header />
      <Content />
      <Sidebar />
    </CVResultWrapper>
  );
};

const CVResultWrapper = styled.div`
  display: grid;
  grid-template-columns: 500px 200px;
  min-width: 700px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default CVResult;
