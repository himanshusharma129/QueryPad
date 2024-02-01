import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Button from './base/Button';
import Text from './base/Text';

const StyledActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: var(--background-color-secondary);
    color: white;
    padding: 0 12px;
    border-bottom: 1px solid var(--border-color);

`,
    StyledActions = styled.div`
        display: flex;
        gap: 8px;
    `;

const connectors = [
    {
        name: 'Github Connector 1',
        value: 'git1',
    },
    {
        name: 'Github Connector 2',
        value: 'git2',
    },
    {
        name: 'Github Connector 3',
        value: 'git3',
    },
];

const ActionHeader: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [itemName, setItemName] = useState('New Query');
    const [selectedOption, setSelectedOption] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleEditClick = () => {
        console.log('edit clicked');
        setIsEditing(true);
    };

    const handleSaveClick = useCallback(() => {
        setIsEditing(false);
        // do save logic here
    }, [setIsEditing]);

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
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
            <select value={selectedOption} onChange={handleOptionChange}>
                {connectors.map((connector) => {
                    return (<option value={connector.value}>{connector.name}</option>);
                })}
            </select>
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
                <Button type='primary' onClick={handleSaveClick}>Run</Button>
                <Button type='secondary' onClick={handleSaveClick}>Save</Button>
                <Button type='tertiary' onClick={handleSaveClick}>Share</Button>
            </StyledActions>
        </StyledActionsContainer>
    );
};

export default ActionHeader;
