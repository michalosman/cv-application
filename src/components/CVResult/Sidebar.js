import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import Subsection from "../Utils/Subsection";
import examplePhoto from "../../assets/example_photo.png";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Photo src={examplePhoto} alt="example" />
      <Section title="Personal Details" contrastTitle direction="column">
        <Subsection title="Address">Example street 20</Subsection>
        <Subsection title="Phone Number">123456789</Subsection>
        <Subsection title="Email">example@gmail.com</Subsection>
      </Section>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  padding: 1.5rem;
  border-bottom-right-radius: 5px;
  background-color: ${({ theme }) => theme.colors.lightSecondary};
`;

const Photo = styled.img`
  margin-bottom: 2rem;
`;
