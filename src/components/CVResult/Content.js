import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";

const Content = () => {
  return (
    <ContentWrapper>
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
    </ContentWrapper>
  );
};

export default Content;

const ContentWrapper = styled.div`
  grid-column: span 9;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.light};
  flex: 3;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const Period = styled.div``;

const Position = styled.div``;

const Company = styled.div``;

const Responsibilities = styled.ul``;