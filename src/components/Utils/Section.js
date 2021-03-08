import React from "react";
import styled, { css } from "styled-components";

const Section = ({ padding, title, children, titlePadding, contrastTitle }) => {
  return (
    <SectionWrapper padding={padding}>
      <Title padding={titlePadding} contrast={contrastTitle}>
        {title}
      </Title>
      {children}
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: ${(props) => props.padding};
`;

const Title = styled.h3`
  padding: ${(props) => props.padding};

  ${(props) =>
    props.contrast &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorder};
      color: ${({ theme }) => theme.colors.blue};
    `}
`;

export default Section;
