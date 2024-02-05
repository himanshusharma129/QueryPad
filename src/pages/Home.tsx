import React from 'react';
import styled from 'styled-components';
import ActionHeader from '../components/ActionHeader';
import Editor from '../components/Editor';
import { SqlEditorProvider } from '../context/SQLEditorContext';

const StyledHomeContainer = styled.div`

`,
    StyledEditorContainer = styled.div``;

const Home: React.FC = () => {
    return (
        <StyledHomeContainer>
            <SqlEditorProvider>
                <ActionHeader />
                <StyledEditorContainer>
                    <Editor />
                </StyledEditorContainer>
            </SqlEditorProvider>
        </StyledHomeContainer>
    );
};

export default Home;
