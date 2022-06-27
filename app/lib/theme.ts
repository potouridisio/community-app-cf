import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

let theme = createTheme();

theme = createTheme(theme, {} as ThemeOptions);

export default theme;
