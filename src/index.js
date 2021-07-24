import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes'

import { ThemeContextProvider } from './providers/themeProvider'

ReactDOM.render(
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>,
  document.getElementById('root')
);