import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
    button: {
      main: "#3f51b5",
    },
  },
  typography: {
    tab: {
      textTransform: "none",
      fontSize: "0.6rem",
    },
  },
});
