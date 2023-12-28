import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
      margin:auto;
      text-align : center; 
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;

  }

  li {
  list-style-type: none;
}`;