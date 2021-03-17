import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
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
      <Section title="Description" contrastTitle>
        {personalInfo.description}
      </Section>
      <Section title="Experience" direction="column" contrastTitle>
        {experienceItems}
      </Section>
      <Section title="Education" direction="column" contrastTitle>
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

export default Content;
