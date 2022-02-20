import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.davysGray};
    color: ${props => props.theme.colors.gainsboro};
    font: 400 1rem Raleway, sans-serif;
  }
`;
