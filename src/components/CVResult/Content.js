import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import Subsection from "../Utils/Subsection";

const Content = ({ personalInfo, experience, education }) => {
  return (
    <ContentWrapper>
      <Description>{personalInfo.description}</Description>
      <Section title="Experience" contrastTitle>
        {/* For each */}
        <Period>
          {experience.from} - {experience.to}
        </Period>
        <Subsection title={experience.position}>
          <p>
            {experience.company}, {experience.city}
          </p>
        </Subsection>
      </Section>
      <Section title="Education" contrastTitle>
        {/* For each */}
        <Period>
          {education.from} - {education.to}
        </Period>
        <Subsection title={`${education.universityName}, ${education.city}`}>
          <p>Degree: {education.degree}</p>
          <p>Subject: {education.subject}</p>
        </Subsection>
      </Section>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  padding: 2rem;
  border-bottom-left-radius: 5px;
  background-color: ${({ theme }) => theme.colors.light};
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const Period = styled.div`
  width: 20%;
  font-weight: bold;
`;

export default Content;
