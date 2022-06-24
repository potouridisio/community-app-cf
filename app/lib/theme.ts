import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

import { blue, darkGrey } from './colors';

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
    MuiDrawer: {
      defaultProps: {
        disableScrollLock: true,
        keepMounted: true,
      },
      styleOverrides: {
        modal: {
          '& > .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
        },
        paper: {
          boxShadow: 'none',
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        edgeEnd: {
          marginRight: theme.spacing(-0.5),
        },
        root: {
          '&:hover, &.Mui-focusVisible:hover': {
            backgroundColor: darkGrey[50],
          },
          '&.Mui-focusVisible': {
            backgroundColor: darkGrey[100],
            outline: `2px solid ${blue[700]}`,
            outlineOffset: -2,
          },
          borderRadius: theme.shape.borderRadius,
          color: 'inherit',
        },
        sizeSmall: {
          padding: theme.spacing(0.5),
        },
      },
    },
    MuiList: {
      styleOverrides: {
        padding: {
          paddingBottom: theme.spacing(2),
          paddingTop: theme.spacing(2),
        },
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        square: true,
      },
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
    },
    MuiToolbar: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          minHeight: 64,
        },
      },
    },
  },
} as ThemeOptions);

export default theme;
