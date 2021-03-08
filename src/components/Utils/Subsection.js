import React from "react";
import styled from "styled-components";

const Subsection = (props) => {
  return (
    <SubsectionWrapper>
      <Title>{props.title}</Title>
      {props.children}
    </SubsectionWrapper>
  );
};

const SubsectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h4`
  padding: 0.5rem;
`;

export default Subsection;
