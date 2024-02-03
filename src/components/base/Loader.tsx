import React from 'react';
import styled from 'styled-components';
import { MoonLoader } from 'react-spinners';

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Loader = () => {
    return (
        <LoaderContainer>
            <MoonLoader color="#2026d2" size={60} aria-label="Loading spinner"/>
        </LoaderContainer>
    );
};

export default Loader;


