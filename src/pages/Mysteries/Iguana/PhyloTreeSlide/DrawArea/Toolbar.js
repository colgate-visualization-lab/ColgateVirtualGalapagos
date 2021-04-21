import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import toolbarIcons from "./toolbarIcons";

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: theme.spacing(2),
  },
  root: {
    padding: theme.spacing(1),
  },
  iconContainer: {
    fontSize: "2rem",
    textAlign: "center",

    border: "1px solid rgb(178,178,178)",
    borderRadius: "5px",
  },
  selected: {
    backgroundColor: "rgb(178,178,178)",
    padding: "0.1rem",
  },
}));

const Toolbar = ({ handleToolChange, selected }) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.container}>
      <Paper className={classes.root}>
        <Grid container spacing={2} justify="space-evenly" alignItems="stretch">
          {toolbarIcons.map(({ name, component }) => (
            <Grid key={name} item xs={4}>
              <SvgIcon
                className={`${classes.iconContainer} ${
                  selected === name ? classes.selected : null
                }`}
                onClick={() => {
                  handleToolChange(name);
                }}
              >
                {component}
              </SvgIcon>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Toolbar;
