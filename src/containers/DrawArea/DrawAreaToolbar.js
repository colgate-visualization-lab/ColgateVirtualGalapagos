import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import toolbarIcons from "../../components/DrawAreaIcons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    justifySelf: "center",
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    // marginLeft: theme.spacing(2),
    padding: theme.spacing(1),
    backgroundColor: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  iconContainer: {
    marginRight: theme.spacing(1),
    fontSize: "1.3rem",
    height: "2rem",
    width: "2rem",
    textAlign: "center",

    padding: "0.2rem",
    border: "1px solid rgb(178,178,178)",
    borderRadius: "5px",
  },
  selected: {
    backgroundColor: "rgb(178,178,178)",
    padding: "0.1rem",
  },
}));

const DrawAreaToolbar = ({ handleToolChange, selected }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {toolbarIcons.map(({ name, component }) => (
        <SvgIcon
          key={name}
          className={`${classes.iconContainer} ${
            selected === name ? classes.selected : null
          }`}
          onClick={() => {
            handleToolChange(name);
          }}
        >
          {component}
        </SvgIcon>
      ))}
    </Paper>
  );
};

export default DrawAreaToolbar;
