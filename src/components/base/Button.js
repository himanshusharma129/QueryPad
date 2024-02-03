// Button.js
import styled from 'styled-components';

const StyledButton = styled.button`
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
  }

  &:hover {
    ${({ tooltip }) => tooltip && `
      .tooltip {
        visibility: visible;
        opacity: 1;
      }
    `}
  }

  ${({ isDisabled }) => isDisabled && `
    opacity: 0.8;
    cursor: not-allowed;
  `}
`;

const Button = ({ type, children, onClick, isDisabled=false, tooltip='' }) => (
  <StyledButton className={type} onClick={onClick} isDisabled={isDisabled} tooltip={tooltip}>
    {children}
    {/* tooltip here can be extended to a custom component rendering either text or the component */}
    {tooltip && <span className="tooltip">{tooltip}</span>}
  </StyledButton>
);

export default Button;
