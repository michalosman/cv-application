import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";

const CVResult = ({ cv }) => {
  return (
    <CVResultWrapper id="divToPrint">
      <Header personalInfo={cv.personalInfo} />
      <Content
        personalInfo={cv.personalInfo}
        experience={cv.experience}
        education={cv.education}
      />
      <Sidebar personalInfo={cv.personalInfo} />
    </CVResultWrapper>
  );
};

const CVResultWrapper = styled.div`
  position: sticky;
  top: 10px;
  display: grid;
  grid-template-columns: 500px 200px;
  min-width: 700px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default CVResult;
