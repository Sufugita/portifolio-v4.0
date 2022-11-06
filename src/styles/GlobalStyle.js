import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
   }
   body {
      background-color: ${(props) => props.theme.BodyColor};
      color: ${(props) => props.theme.TextColor};
      transition: 0.5s;
      font-size: 14px;
      font-family: serif, sans-serif;
   }
`
