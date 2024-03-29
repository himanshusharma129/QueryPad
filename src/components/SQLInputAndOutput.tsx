import React from 'react';
import SQLQueryEditor from './SQLQueryEditor';
import styled from 'styled-components';
import Text from './base/Text';
import QueryOutput from './QueryOutput';
import { useSqlEditor } from '../context/SQLEditorContext';
import { ITable } from '../types/TableTypes';

const StyledSQLEditorContainer = styled.div`
    padding: 16px 10px 10px 10px;
    background-color: var(--background-color-primary);
    border-radius: var(--border-radius);
`;

const StyledInformation = styled.div`
    margin-top: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 12px;
    min-width: 600px;
`;

const SQLInputAndOutput: React.FC = () => {
    const { outputData } = useSqlEditor();
    const mockedData: ITable = outputData;

    return (
        <StyledWrapper>
            <StyledSQLEditorContainer>
                <SQLQueryEditor />
                <StyledInformation>
                    <Text type='tertiary'>Tips: Click on saved query to prefill the editor</Text>
                </StyledInformation>
            </StyledSQLEditorContainer>
            <QueryOutput data={mockedData} />            
        </StyledWrapper>
    );
};

export default SQLInputAndOutput;
