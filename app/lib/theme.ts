import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

import { blue, brightTeal, darkGrey } from './colors';

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
  palette: {
    primary: {
      main: brightTeal[200],
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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: darkGrey[800],
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
      styleOverrides: {
        root: {
          '&:before': {
            bottom: 0,
            left: 0,
            position: 'absolute',
            top: 0,
            width: 4,
            zIndex: -1,
          },
          '&:hover, &.Mui-focusVisible, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected.Mui-focusVisible':
            {
              backgroundColor: 'transparent',
            },
          '&:hover:before': {
            backgroundColor: darkGrey[200],
          },
          '&:hover:before, &.Mui-selected:before': {
            content: '""',
          },
          '&.Mui-focusVisible': {
            outline: `2px solid ${blue[700]}`,
            outlineOffset: 0,
          },
          '&.Mui-selected:before': {
            backgroundColor: theme.palette.primary.main,
          },
          flexGrow: 0,
          minHeight: 56,
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
          zIndex: 0,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 48,
        },
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
