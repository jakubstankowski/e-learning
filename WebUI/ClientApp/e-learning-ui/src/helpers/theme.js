import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fff',
            main: '#3a739d',
            dark: '#3f4446',
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
