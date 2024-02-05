import React from 'react';
import styled from 'styled-components';
import ActionHeader from '../components/ActionHeader';
import Editor from '../components/Editor';
import { SqlEditorProvider } from '../context/SQLEditorContext';

const StyledHomeContainer = styled.div`
    overflow: hidden;
`;

const Home: React.FC = () => {
    return (
        <StyledHomeContainer>
            <SqlEditorProvider>
                <ActionHeader />
                <Editor />
            </SqlEditorProvider>
        </StyledHomeContainer>
    );
};

export default Home;
