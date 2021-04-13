import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 100,
    padding: theme.spacing(1),
    backgroundColor: "#FFF",
  },
  container: {
    marginLeft: theme.spacing(2),
  },
}));

const PhyloTreeMenu = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container justify="flex-start" className={classes.container}>
      <Paper className={classes.root}>{children}</Paper>
    </Grid>
  );
};

export default PhyloTreeMenu;
