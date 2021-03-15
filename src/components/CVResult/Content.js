import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import Subsection from "../Utils/Subsection";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";

const Content = ({ personalInfo, experience, education }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
  ));

  const educationItems = education.map((educationItem) => (
    <EducationItem key={educationItem.id} educationItem={educationItem} />
  ));

  return (
    <ContentWrapper>
      <Description>{personalInfo.description}</Description>
      <Section title="Experience" contrastTitle>
        {experienceItems}
      </Section>
      <Section title="Education" contrastTitle>
        {educationItems}
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

export default Content;
