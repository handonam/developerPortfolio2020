import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    touch-action: pan-x pan-y;
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
