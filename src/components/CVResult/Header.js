import React from "react";
import styled from "styled-components";

const CVHeader = () => {
  return (
    <CVHeaderWrapper>
      <h1>John Doe</h1>
      <p>Data engineer</p>
    </CVHeaderWrapper>
  );
};

const CVHeaderWrapper = styled.header`
  grid-column: span 10;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.light};
`;

export default CVHeader;
