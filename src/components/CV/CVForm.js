import React from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import styled from "styled-components";

const Wrapper = styled.div``;

const CVForm = () => {
  return (
    <Wrapper>
      <Personal />
      <Education />
      <Experience />
      <button>Create CV</button>
    </Wrapper>
  );
};

export default CVForm;
