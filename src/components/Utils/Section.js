import React from "react";
import styled from "styled-components";

const Section = (props) => {
  return (
    <SectionWrapper>
      <Title>{props.title}</Title>
      {props.children}
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h3`
  padding: 0.5rem;
`;

export default Section;
