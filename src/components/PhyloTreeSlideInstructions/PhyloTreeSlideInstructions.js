import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: "bold",
    fontSize: "0.85rem",
  },
  instructions: {
    fontSize: "0.8rem",
  },
}));

const PhyloTreeSlideInstructions = ({ instructions }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item>
        <Typography className={classes.title}>Instructions</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.instructions}>{instructions}</Typography>
      </Grid>
    </>
  );
};

export default PhyloTreeSlideInstructions;
