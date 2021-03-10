import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "70%",
    width: "20em",
  },
}));

const Options = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div>Here I be</div>
    </Paper>
  );
};

export default Options;
