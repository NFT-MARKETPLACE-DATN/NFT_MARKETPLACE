import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    // font-family: 'M PLUS 1p', 'Nunito', Arial, ;
    font-family: sans-serif,Noto Sans JP ;
    font-size: 1rem;
    height: 100%;
    width: 100vw;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    // color: #858796;
    color: #000;
  }

  #app {
    // min-height: 100%;
    min-width: 100%;
  }
  img.close-dialog-ic {
    width:15px;
    height:15px;
    @media screen and (max-width: 600px) {
        width:14px;
        height:14px;
    }
  }
 .MuiDialog-paperFullWidth{
    max-width:300px !important;
  }
`;

export default GlobalStyle;
