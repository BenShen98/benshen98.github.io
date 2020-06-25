import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import theme from './theme';

// own components
import CoverSection from './sections/Cover';
import Portfolio from './sections/Portfolio';



ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />

    <Container maxWidth="sm">
      {/* Cover Page */}
      <CoverSection />

      {/* Projects */}
      <Portfolio />

    </Container>

  </ThemeProvider>,
  document.querySelector('#root'),
);
