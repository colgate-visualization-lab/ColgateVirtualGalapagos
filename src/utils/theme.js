import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#3949ab",
    },
  },
  typography: {
    link: {
      textTransform: "none",
      textDecoration: "none",
      textTransform: "uppercase",
      color: "inherit",
      "&:hover, &:focus, &:visited, &:link, &:active": {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },
});
