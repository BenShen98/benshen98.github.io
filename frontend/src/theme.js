import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ffffff',
    },
  },

  typography: {
    h1:{
      fontSize: "2rem",
      fontWeight: 300
    },
    h2:{
      fontSize: "1.5rem"
    },
    h3:{
      fontSize: "1rem"
    },
  }
});
export default theme;
