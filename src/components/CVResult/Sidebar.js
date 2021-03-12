import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import Subsection from "../Utils/Subsection";
import examplePhoto from "../../assets/example_photo.png";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Photo src={examplePhoto} alt="example" />
      <Section title="Personal Info" contrastTitle direction="column">
        <Subsection title="Address">Example street 20</Subsection>
        <Subsection title="Phone Number">123456789</Subsection>
        <Subsection title="Email">mail@gmail.com</Subsection>
      </Section>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  grid-column: span 1;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.lightSecondary};
  flex: 1;
`;

const Photo = styled.img`
  margin-bottom: 2rem;
`;
