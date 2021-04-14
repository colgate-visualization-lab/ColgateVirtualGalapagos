import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 100,
  },
  title: {
    fontSize: "0.85rem",
    fontWeight: "bold",
  },
}));

const PhyloTreeMenu = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container justify="flex-start" spacing={1} className={classes.root}>
      <Grid item xs={12}>
        <Typography className={classes.title}>Actions</Typography>
      </Grid>
      {children}
    </Grid>
  );
};

export default PhyloTreeMenu;
