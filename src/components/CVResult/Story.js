import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";

const Story = () => {
  return (
    <StoryWrapper>
      <Description>Some description</Description>
      <Section title="Experience" contrastTitle direction="column">
        <Period>2012-10 - today</Period>
        <Position>Data engineer</Position>
        <Company>Some company</Company>
        <Responsibilities>
          <li>Responsibility 1</li>
          <li>Responsibility 2</li>
          <li>Responsibility 3</li>
          <li>Responsibility 4</li>
        </Responsibilities>
      </Section>
      <Section title="Education" contrastTitle direction="column">
        <Period>2012-10 - today</Period>
        <Position>Data engineer</Position>
        <Company>Some company</Company>
        <Responsibilities>
          <li>Responsibility 1</li>
          <li>Responsibility 2</li>
          <li>Responsibility 3</li>
          <li>Responsibility 4</li>
        </Responsibilities>
      </Section>
    </StoryWrapper>
  );
};

export default Story;

const StoryWrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.light};
  flex: 3;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const StyledSection = styled(Section)``;

const Period = styled.div``;

const Position = styled.div``;

const Company = styled.div``;

const Responsibilities = styled.ul``;
