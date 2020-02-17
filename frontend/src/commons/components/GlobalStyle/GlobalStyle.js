import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    display: flex;
    overflow: hidden;
  }

  div#root {
    flex: 1;
  }
`;
