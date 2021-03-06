import React from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import styled from "styled-components";

const CVForm = () => {
  return (
    <Wrapper>
      <Personal />
      <br />
      <br />
      <Education />
      <br />
      <br />
      <Experience />
      <br />
      <br />
      <button>Create CV</button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default CVForm;
