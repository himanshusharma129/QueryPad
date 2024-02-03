import React from 'react';
import styled from 'styled-components';
import ActionHeader from '../components/ActionHeader';
import Editor from '../components/Editor';

const StyledHomeContainer = styled.div`

`,
    StyledEditorContainer = styled.div``;

const Home: React.FC = () => {
    return (
        <StyledHomeContainer>
            <ActionHeader />
            <StyledEditorContainer>
                <Editor />
            </StyledEditorContainer>
        </StyledHomeContainer>
    );
};

export default Home;
