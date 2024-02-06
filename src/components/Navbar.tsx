import React from 'react';
import styled from 'styled-components';
import Button from './base/Button';

// @ts-ignore
import dayModeImage from '../assets/day-mode.png';

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color:var(--brand-color);
    color: white;
    padding: 0 12px;
`;

const StyledRightContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

const StyledThemeButton = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.2);
    }
`;

const toggleTheme = () => {
    const body = document.querySelector('body');
    body?.classList.toggle('dark-theme');
};

const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <h3>QueryPad</h3>
            <a href='https://www.atlan.com'>atlan</a>
            <StyledRightContainer>
                <StyledThemeButton onClick={toggleTheme} src={dayModeImage} alt='day-mode' />
                <Button onClick={() => {}}type='secondary' $isDisabled tooltip={'coming soon...'}>Login</Button>
            </StyledRightContainer>
        </NavbarContainer>
    );
};

export default Navbar;
