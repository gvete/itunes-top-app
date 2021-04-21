/*
 * Theme provider
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import {
  MuiThemeProvider,
  createMuiTheme as createLegacyModeTheme,
  unstable_createMuiStrictModeTheme as createStrictModeTheme,
} from '@material-ui/core/styles';

let createMuiTheme;
if (process.env.REACT_MODE === 'legacy') {
  createMuiTheme = createLegacyModeTheme;
} else {
  createMuiTheme = createStrictModeTheme;
}

export function ThemeProvider(props) {
  const { children } = props;

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: [
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        },
      }),
    [],
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
