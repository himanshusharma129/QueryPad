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

    ${({ fontStyle }) => fontStyle && `
        font-style: ${fontStyle} !important;
    `}
`;

const Text = ({ onClick=()=>{}, type='secondary', children, color='', fontSize='', weight='', fontStyle=''}) => (
  <StyledText onClick={onClick} className={type} color={color} fontSize={fontSize} weight={weight} fontStyle={fontStyle}>
    {children}
  </StyledText>
);

export default Text;
