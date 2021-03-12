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
  grid-column: span 2;
  padding: 2rem;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.light};
`;

export default CVHeader;
