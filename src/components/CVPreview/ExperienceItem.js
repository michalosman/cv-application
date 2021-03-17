import React from "react";
import styled from "styled-components";
import Subsection from "../Utils/Subsection";

const ExperienceItem = ({ experienceItem }) => {
  return (
    <ExperienceItemWrapper>
      <Period>
        {experienceItem.from} - {experienceItem.to}
      </Period>
      <Subsection title={experienceItem.position}>
        <p>
          {experienceItem.company}, {experienceItem.city}
        </p>
      </Subsection>
    </ExperienceItemWrapper>
  );
};

const ExperienceItemWrapper = styled.div`
  display: flex;
`;

const Period = styled.div`
  width: 20%;
  font-weight: bold;
`;

export default ExperienceItem;
