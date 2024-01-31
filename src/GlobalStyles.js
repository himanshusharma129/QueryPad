import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  button {
    // basic button styles
    padding: 10px 15px;
    border: none;
    cursor: pointer;

    /* Button type styles */
    &.primary {
      background-color: var(--primary-color);
      color: var(--secondary-color);
      border-radius: 4px;
    }

    &.secondary {
      background-color: var(--secondary-color);
      color: var(--primary-color);
      border-color: var(--primary-color);
      border-radius: 4px;
    }

    &.link-primary {
        cursor: pointer;
        color: #2026d2;
        font-size: 1.2rem;
        position: relative;
        font-family: "Raleway",sans-serif;
        text-decoration: none;
    }

  }
`;

export default GlobalStyles;
