import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: ['"Open Sans"', 'sans-serif'].join(),
  },
});

theme = createTheme(theme, {} as ThemeOptions);

export default theme;
