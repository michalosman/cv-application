import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Pdf from "react-to-pdf";
import Button from "../Utils/Button";

const ref = React.createRef();

const CVResult = ({ cv }) => {
  return (
    <>
      <CVResultWrapper>
        <Header personalInfo={cv.personalInfo} />
        <Content
          personalInfo={cv.personalInfo}
          experience={cv.experience}
          education={cv.education}
        />
        <Sidebar personalInfo={cv.personalInfo} />
      </CVResultWrapper>
      <Pdf targetRef={ref} filename="cv.pdf">
        {({ toPdf }) => <Button text="Generate PDF" onClick={toPdf} />}
      </Pdf>
      <div style={{ width: 500, height: 500, background: "blue" }} ref={ref} />
    </>
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
