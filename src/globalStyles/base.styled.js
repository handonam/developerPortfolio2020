import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  figure {
    margin: 0;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }
`;
