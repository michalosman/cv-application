import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import Subsection from "../Utils/Subsection";
import examplePhoto from "../../assets/example_photo.png";

const CVMain = () => {
  return (
    <CVMainWrapper>
      <Content>
        <Description>Some description</Description>
        <Section title="Experience" contrastTitle></Section>
        <Section title="Education" contrastTitle></Section>
      </Content>
      <Sidebar>
        <Photo src={examplePhoto} alt="example" />
        <Section title="Personal Info" contrastTitle>
          <Subsection title="Address">Example street 20</Subsection>
          <Subsection title="Phone Number">123456789</Subsection>
          <Subsection title="Email">mail@gmail.com</Subsection>
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

const Description = styled.p`
  margin-bottom: 1rem;
`;

const Photo = styled.img`
  margin-bottom: 2rem;
`;

export default CVMain;
