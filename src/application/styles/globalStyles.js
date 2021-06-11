import { createGlobalStyle } from 'styled-components';
import antdGlobalStyles from './antdGlobalStyles';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Verdana, 'sans-serif';
    font-size:1rem;
  }
  ${antdGlobalStyles}
`;
export default GlobalStyles;
