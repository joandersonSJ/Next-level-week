import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import light from './styles/themes/light';


const App: React.FC = () => (
  <ThemeProvider theme={light}>
    <h1>Hello World</h1>
    <GlobalStyle />
  </ThemeProvider>
);


export default App;
