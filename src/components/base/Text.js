import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span`
    ${({ color }) => color && `
        color: ${color} !important;
    `}

    ${({ fontSize }) => fontSize && `
        font-size: ${fontSize} !important;
    `}

    ${({ weight }) => weight && `
        font-weight: ${weight} !important;
    `}
`;

const Text = ({ onClick=()=>{}, type='secondary', children, color='', fontSize='', weight='' }) => (
  <StyledText onClick={onClick} className={type} color={color} fontSize={fontSize} weight={weight}>
    {children}
  </StyledText>
);

export default Text;
