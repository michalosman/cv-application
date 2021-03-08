import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import Subsection from "../Utils/Subsection";

const CVMain = () => {
  return (
    <CVMainWrapper>
      <Content>
        <Description></Description>
        <Section title="Experience"></Section>
        <Section title="Education"></Section>
      </Content>
      <Sidebar>
        <Photo></Photo>
        <Section title="Personal Info">
          <Subsection title="Address"></Subsection>
          <Subsection title="Phone Number"></Subsection>
          <Subsection title="Email"></Subsection>
        </Section>
      </Sidebar>
    </CVMainWrapper>
  );
};

const CVMainWrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.light};
  flex: 3;
`;

const Sidebar = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.lightSecondary};
  flex: 1;
`;

const Description = styled.p``;

const Photo = styled.img``;

export default CVMain;
