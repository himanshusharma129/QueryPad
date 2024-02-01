import React from 'react';
import styled from 'styled-components';

const StyledLeftSidebar = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(background-color-secondary);
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  flex: 1;
  padding: 20px;
  border-bottom: 1px solid #555;
  overflow: auto;

  &:last-child {
    border-bottom: none;
  }
`;

const LeftPane: React.FC = () => {
  return (
    <StyledLeftSidebar>
      <Section>
        <h2>Section 1</h2>
        <p>This is the content for the first section.</p>
      </Section>
      <Section>
        <h2>Section 2</h2>
        <p>This is the content for the second section.</p>
      </Section>
    </StyledLeftSidebar>
  );
};

export default LeftPane;
