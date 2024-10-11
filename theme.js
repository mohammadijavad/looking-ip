import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    typography: {
        fontFamily: '"Vazir", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    palette: {
        primary: {
            main: '#0C317C',
            dark: '#0C317C',
            light: '#1043A6',
            contrastText: '#fff',
        },
    },

});

export default theme;
