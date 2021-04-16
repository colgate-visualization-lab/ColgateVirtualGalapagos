import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import PlainTabs from "./PlainTabs";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(228, 228, 228, 1)",
  },

  header: {
    fontSize: "1.2rem",
  },
}));

const PhyloTreeHeader = ({ tabIndex, handleTabChange }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <PlainTabs tabIndex={tabIndex} handleTabChange={handleTabChange} />
      </Grid>
    </Grid>
  );
};

export default PhyloTreeHeader;
