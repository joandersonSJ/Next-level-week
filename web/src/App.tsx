import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import Router from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={light}>
    <Router />
  </ThemeProvider>
);


export default App;
