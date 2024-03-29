import React from 'react';
import styled from 'styled-components';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import LeftPane from './LeftPane';
import SQLInputAndOutput from './SQLInputAndOutput';
import { useSqlEditor } from '../context/SQLEditorContext';

const StyledApp = styled.div`
  // splitter layout adds height of 100% by default, to avoid full page scroll we need to subtract the height of headers
  .splitter-layout {
    height: calc(100% - 110px);
  }
`;

const RightPane = styled.div`
  overflow: auto;
  padding: 20px;
  height: 100%;
`;

const Editor: React.FC = () => {
  const { isMobile } = useSqlEditor();

  return (
    <StyledApp>
      {isMobile ? (
        <SplitterLayout
          vertical={true}
          customClassName="custom-splitter-layout"
          primaryIndex={1}
          primaryMinSize={80}
          secondaryInitialSize={15}
          secondaryMinSize={15}
          percentage={true}
        >
          <LeftPane />
          <RightPane>
            <SQLInputAndOutput />
          </RightPane>
        </SplitterLayout>
      ): (
          <SplitterLayout
            customClassName="custom-splitter-layout"
            primaryIndex={1}
            primaryMinSize={60}
            secondaryInitialSize={22}
            secondaryMinSize={22}
            percentage={true}
          >
            <LeftPane />
            <RightPane>
              <SQLInputAndOutput />
            </RightPane>
          </SplitterLayout>
      )}
    </StyledApp>
  );
};

export default Editor;
