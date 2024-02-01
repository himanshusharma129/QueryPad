import React from 'react';
import styled from 'styled-components';
import Button from './base/Button';

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: #2026d2;
    color: white;
    padding: 0 12px;
`;

const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <h3>QueryPads</h3>
            <a href='https://www.atlan.com'>atlan</a>
            <Button type='secondary' isDisabled tooltip={'coming soon...'}>Login</Button>
        </NavbarContainer>
    );
};

export default Navbar;
