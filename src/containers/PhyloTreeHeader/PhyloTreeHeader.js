import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import PlainTabs from "./PlainTabs";

const useStyles = makeStyles((theme) => ({
  root: {
    // boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)",
    background: "rgba(228, 228, 228, 1)",
  },
  item: {
    paddingBottom: theme.spacing(1),
  },
  header: {
    fontSize: "1.2rem",
  },
}));

const PhyloTreeHeader = ({ tabIndex, handleTabChange, children }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.item}>
        <PlainTabs tabIndex={tabIndex} handleTabChange={handleTabChange} />
      </Grid>
      {/* <Grid container item xs={12} className={classes.item}>
        {children}
      </Grid> */}
    </Grid>
  );
};

export default PhyloTreeHeader;
