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
      border: 1px solid var(--primary-color);
      border-radius: 4px;
    }

    &.tertiary {
        border-radius: 4px;
    }

    &.link-primary {
        cursor: pointer;
        color: var(--color-primary);
        font-size: 1.2rem;
        position: relative;
        font-family: "Raleway",sans-serif;
        text-decoration: none;
    }

  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-size: 1.2rem;
    font-family: "Raleway",sans-serif;
    &:hover {
        text-decoration: underline;
    }
  }



  span {

    &.primary {
        color: var(--primary-color);
    }
      
    &.secondary {
        color: black;
    }
      
    &.link {
        color: blue;
        text-decoration: underline;
    }

    &.tertiary {
      color: #3e4c59;
    }
  }

  .ReactVirtualized__Table__rowColumn {
    margin-right: 0 !important;
  }

  .ReactVirtualized__Table__headerColumn {
    margin-right: 0 !important;
  }
`;

export default GlobalStyles;
