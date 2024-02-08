import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#1E22AA'
    },
    secondary: {
      main: '#49A197'
    },
    error: {
      main: red.A400
    }
  }
});
