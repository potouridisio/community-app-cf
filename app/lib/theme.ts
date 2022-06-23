import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    '2xl': true;
  }
}

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1440,
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', 'sans-serif'].join(),
  },
});

theme = createTheme(theme, {
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'inherit',
        position: 'sticky',
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: '2xl',
      },
      styleOverrides: {
        root: {
          [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
          },
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
        },
      },
    },
  },
} as ThemeOptions);

export default theme;
