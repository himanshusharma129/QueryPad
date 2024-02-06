import React, { useEffect } from 'react';
import styled from 'styled-components';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import LeftPane from './LeftPane';
import SQLInputAndOutput from './SQLInputAndOutput';

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
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      )}
    </StyledApp>
  );
};

export default Editor;
