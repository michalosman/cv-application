import React from "react";
import styled from "styled-components";

const FormSection = (props) => {
  return (
    <FormSectionWrapper>
      <Title>{props.title}</Title>
      {props.children}
    </FormSectionWrapper>
  );
};

const FormSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h2`
  padding: 0.5rem;
`;

export default FormSection;
