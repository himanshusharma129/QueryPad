import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Button from './base/Button';
import Text from './base/Text';
import { useSqlEditor } from '../context/SQLEditorContext';
import { getMockedTableData, getConnectors } from '../utils/Utils';
import { ITable } from '../types/TableTypes';

const StyledActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: var(--background-color-secondary);
    color: white;
    padding: 0 12px;
    border-bottom: 1px solid var(--border-color);

`,
    StyledActions = styled.div`
        display: flex;
        gap: 8px;
    `,
    StyledConnectionContainer = styled.div<{ isMobile: boolean }>`
        display: flex;
        ${({ isMobile }) => (isMobile ?
            'flex-direction: column; align-items: flex-start; gap: 2px;' :
            'align-items: center; gap: 8px;')}
    `;

const ActionHeader: React.FC = () => {
    const { addSavedQuery, activeQuery, setNewOutputData, isMobile } = useSqlEditor();
    const [isEditing, setIsEditing] = useState(false);
    const [itemName, setItemName] = useState('New Query');
    const [selectedOption, setSelectedOption] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const connectors = getConnectors();

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleRunClick = () => {
        const data: ITable = getMockedTableData(activeQuery);
        setNewOutputData(data);
    }

    const handleSaveClick = useCallback(() => {
        setIsEditing(false);
        addSavedQuery();

    }, [setIsEditing, addSavedQuery]);

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
        // Update the data from the selected connector
    };

    const handleClickOutside = useCallback((e: MouseEvent) => {
        if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
          // Clicked outside the input field, save logic
          handleSaveClick();
        }
      }, [handleSaveClick, inputRef]);

    useEffect(() => {
        if (isEditing) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isEditing, handleClickOutside]);


    return (
        <StyledActionsContainer>
            <StyledConnectionContainer isMobile={isMobile}>
                <label htmlFor="connections"><Text type='primary'>Source</Text></label>
                    <select id='connections' value={selectedOption} onChange={handleOptionChange}>
                        {connectors.map((connector) => {
                            return (<option key={connector.value} value={connector.value}>{connector.name}</option>);
                        })}
                    </select>
            </StyledConnectionContainer>
            {isEditing ? (
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Query Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
            ) : (
                <Text type='primary' onClick={handleEditClick}>{itemName || 'Click to enter name'}</Text>
            )}
            <StyledActions>
                <Button type='primary' onClick={handleRunClick}>Run</Button>
                <Button type='secondary' onClick={handleSaveClick}>Save</Button>
            </StyledActions>
        </StyledActionsContainer>
    );
};

export default ActionHeader;
