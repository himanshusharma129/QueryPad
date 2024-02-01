import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span`
    ${({ color }) => color && `
        color: ${color}
    `}

    ${({ fontSize }) => fontSize && `
        font-size: ${fontSize}
    `}

    ${({ weight }) => weight && `
        font-weight: ${weight}
    `}
`;

const Text = ({ onClick, type, children, color='', fontSize='', weight='' }) => (
  <StyledText onClick={onClick} className={type} color={color} fontSize={fontSize} weight={weight}>
    {children}
  </StyledText>
);

export default Text;
