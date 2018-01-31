import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MUIComp from './MUIComp';

const materialUIMock = () => (
  <MuiThemeProvider>
    <MUIComp />
  </MuiThemeProvider>
);

export default materialUIMock;
