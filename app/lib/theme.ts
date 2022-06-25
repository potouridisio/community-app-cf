import ArrowIcon from '~/components/arrow-icon';

import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

import { aegean, blue, brightTeal, crimson, darkGrey } from './colors';

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
    error: {
      main: crimson[600],
    },
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
    MuiDivider: {
      defaultProps: {
        variant: 'middle',
      },
      styleOverrides: {
        middle: {
          marginLeft: theme.spacing(3),
          marginRight: theme.spacing(3),
        },
        root: {
          borderColor: darkGrey[200],
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
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          fontWeight: 600,
          lineHeight: 1.5,
          marginLeft: 0,
          marginRight: 0,
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
    MuiInputAdornment: {
      styleOverrides: {
        positionEnd: {
          '&.MuiInputAdornment-sizeMedium': {
            right: theme.spacing(1),
          },
          '&.MuiInputAdornment-sizeSmall': {
            right: theme.spacing(1.5),
          },
        },
        root: {
          color: darkGrey[400],
          position: 'absolute',
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        error: false,
      },
      styleOverrides: {
        root: {
          '&, &.Mui-focused': {
            color: darkGrey[500],
          },
          lineHeight: '1.5em',
          transform: 'translate(16px, 12px) scale(1)',
        },
        shrink: {
          transform: 'translate(16px, -10.5px) scale(0.875)',
        },
        sizeSmall: {
          transform: 'translate(16px, 8px) scale(1)',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            outline: `2px solid ${blue[700]}`,
            outlineOffset: 0,
          },
          color: blue[700],
          textDecoration: 'none',
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
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          noWrap: true,
        },
      },
      styleOverrides: {
        root: {
          '&:not(:last-child)': {
            paddingRight: theme.spacing(2),
          },
          marginBottom: 0,
          marginTop: 0,
        },
        primary: {
          fontWeight: 600,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          paddingBottom: theme.spacing(1),
          paddingTop: theme.spacing(1),
        },
        root: {
          '& .MuiMenu-paper': {
            boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiMenuItem: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&:hover, &.Mui-focusVisible:hover, &.Mui-selected:hover, &.Mui-selected.Mui-focusVisible:hover':
            {
              backgroundColor: aegean[200],
            },
          '&.Mui-focusVisible': {
            outline: `2px solid ${blue[700]}`,
            outlineOffset: -2,
          },
          '&.Mui-focusVisible, &.Mui-selected, &.Mui-selected.Mui-focusVisible':
            {
              backgroundColor: 'transparent',
            },
          minHeight: 'auto',
          paddingBottom: theme.spacing(1),
          paddingTop: theme.spacing(1),
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        error: false,
      },
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            boxShadow: `0 0 0 100px ${theme.palette.background.paper} inset`,
            fontSize: '1rem',
            WebkitTextFillColor: darkGrey[800],
          },
          '&::placeholder': {
            color: darkGrey[400],
            opacity: 1,
          },
          height: '1.5em',
          padding: theme.spacing(1.5, 2),
        },
        inputSizeSmall: {
          padding: theme.spacing(1, 2),
        },
        notchedOutline: {
          borderColor: darkGrey[400],
          padding: '0 11px',
          top: -6,
        },
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: darkGrey[800],
          },
          // label !== undefined
          '&:not(:only-child) > .MuiOutlinedInput-notchedOutline > legend': {
            '& > span': {
              paddingLeft: theme.spacing(0.5),
              paddingRight: theme.spacing(0.5),
            },
            fontSize: '0.875em',
            height: 13,
          },
          // label === undefined
          '&:only-child > .MuiOutlinedInput-notchedOutline > legend': {
            lineHeight: '13px',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: blue[700],
            padding: '0 10px',
          },
          color: 'inherit',
          lineHeight: 1.5,
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
    MuiSelect: {
      defaultProps: {
        IconComponent: ArrowIcon,
      },
      styleOverrides: {
        icon: {
          fill: darkGrey[400],
          right: theme.spacing(1.5),
        },
        select: {
          '&.MuiInputBase-input.MuiOutlinedInput-input': {
            paddingRight: theme.spacing(6),
          },
          minHeight: '1.5em',
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
  typography: {
    body2: {
      lineHeight: 1.5,
    },
    caption: {
      lineHeight: 1.5,
    },
    h1: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.25,
    },
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
  },
} as ThemeOptions);

export default theme;
