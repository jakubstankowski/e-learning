import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3a739d',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f16564',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});
