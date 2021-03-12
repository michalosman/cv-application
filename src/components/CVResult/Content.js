import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import Subsection from "../Utils/Subsection";

const Content = () => {
  return (
    <ContentWrapper>
      <Description>Description</Description>
      <Section title="Experience" contrastTitle>
        <Period>From - To</Period>
        <Subsection title="Position">
          <p>Company, City</p>
        </Subsection>
      </Section>
      <Section title="Education" contrastTitle>
        <Period>From - To</Period>
        <Subsection title="University name, City">
          <p>Degree: Degree</p>
          <p>Subject: Subject</p>
        </Subsection>
      </Section>
    </ContentWrapper>
  );
};

export default Content;

const ContentWrapper = styled.div`
  grid-column: span 9;
  min-height: 870px;
  padding: 2rem;
  border-bottom-left-radius: 5px;
  background-color: ${({ theme }) => theme.colors.light};
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const Period = styled.div`
  width: 20%;
`;
