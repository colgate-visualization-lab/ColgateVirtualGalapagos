import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3F51B5",
    },
    secondary: {
      main: "#EE365D",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 12,
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

theme.dragSource = {
  neutral: {
    backgroundColor: "#fff",
    cursor: "default",
    boxShadow: "none",
    margin: 0,
  },
  hover: {
    backgroundColor: "#eee",
    cursor: "grab",
    boxShadow: "none",
    margin: 0,
  },
  clicked: {
    backgroundColor: "#fff",
    boxShadow: theme.shadows[2],
    cursor: "grabbing",
    margin: "-5px -10px 0 10px",
  },
  dragging: {
    display: "none",
    transition: "display 5s",
  },
};

theme.dropTarget = {
  hover: {
    backgroundColor: "#eee",
    border: "2px solid #aaa",
  },
  neutral: {
    backgroundColor: "#fff",
    border: "2px solid #aaa",
  },
  correct: {
    backgroundColor: "#fff",
    border: `2px solid ${theme.palette.success.main}`,
    color: theme.palette.success.main,
  },
  incorrect: {
    backgroundColor: "#fff",
    border: `2px solid ${theme.palette.error.main}`,
    color: theme.palette.error.main,
  },
};

export default theme;
