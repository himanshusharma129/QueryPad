import React from 'react';
import styled from 'styled-components';

interface TextProps {
    onClick?: () => void;
    type?: string;
    children: React.ReactNode;
    color?: string;
    fontSize?: string;
    weight?: string;
    fontStyle?: string;
}

const StyledText = styled.span<TextProps>`
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

const Text = ({ onClick, type = 'secondary', children, color, fontSize, weight, fontStyle}: TextProps) => (
    <StyledText onClick={onClick} className={type} color={color} fontSize={fontSize} weight={weight} fontStyle={fontStyle}>
        {children}
    </StyledText>
);

export default Text;
