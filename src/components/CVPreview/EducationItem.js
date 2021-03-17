import React from "react";
import styled from "styled-components";
import Subsection from "../Utils/Subsection";

const EducationItem = ({ educationItem }) => {
  return (
    <EducationItemWrapper>
      <Period>
        {educationItem.from} - {educationItem.to}
      </Period>
      <Subsection
        title={`${educationItem.universityName}, ${educationItem.city}`}
      >
        <p>Degree: {educationItem.degree}</p>
        <p>Subject: {educationItem.subject}</p>
      </Subsection>
    </EducationItemWrapper>
  );
};

const EducationItemWrapper = styled.div`
  display: flex;
`;

const Period = styled.div`
  width: 20%;
  font-weight: bold;
`;

export default EducationItem;
