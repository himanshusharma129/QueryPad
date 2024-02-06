import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  type: string;
  children: React.ReactNode;
  onClick: () => void;
  $isDisabled?: boolean;
  tooltip?: string;
};

const StyledButton = styled.button<{ tooltip?: string }>`
  position: relative;

  .tooltip {
    visibility: hidden;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover {
    ${({ tooltip }: { tooltip?: string }) => tooltip && `
      .tooltip {
        visibility: visible;
        opacity: 1;
      }
    `}
  }

  ${({ disabled }: { disabled?: boolean }) => disabled && `
    opacity: 0.8;
    cursor: not-allowed;
  `}
`;

const Button = ({ type, children, onClick, $isDisabled = false, tooltip }: ButtonProps) => (
  <StyledButton className={type} onClick={onClick} disabled={$isDisabled} tooltip={tooltip}>
    {children}
    {tooltip && <span className="tooltip">{tooltip}</span>}
  </StyledButton>
);

export default Button;
