import React, { useState } from 'react';
import styled from 'styled-components';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import LeftPane from './LeftPane.tsx';

const StyledApp = styled.div`
  height: 100vh;
`;

const RightPane = styled.div`
  overflow: auto;
  padding: 20px;
`;

const Editor: React.FC = () => {

  return (
    <StyledApp>
      <SplitterLayout
        customClassName="custom-splitter-layout"
        primaryIndex={1}
        primaryMinSize={60}
        primaryMaxSize={90}
        secondaryInitialSize={30}
        secondaryMinSize={20}
        percentage={true}
      >
        <LeftPane />
        <RightPane>
          <h1>Main Content</h1>
          <p>This is the main content area.</p>
        </RightPane>
      </SplitterLayout>
    </StyledApp>
  );
};

export default Editor;
