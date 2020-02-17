import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    overflow: hidden;
  }

  div#root {
    height: 100vh;
    max-height: 100vh;
  }
`;
