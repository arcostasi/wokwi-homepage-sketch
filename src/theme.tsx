import { createMuiTheme } from '@material-ui/core/styles';

// Create light theme instance
export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#1a1a1a"
    },
    secondary: {
      main: '#f44336',
    },
    background: {
      default: "#ccc",
      paper: "#eee"
    }
  }
});

// Create dark theme instance
export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#1a1a1a"
    },
    secondary: {
      main: '#f44336',
    }
  }
});

export default lightTheme;
