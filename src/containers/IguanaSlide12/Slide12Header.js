import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/tab";
import Typography from "@material-ui/core/Typography";

import PlainTabs from "./PlainTabs";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "rgba(248, 248, 248, 1)",
  },
}));

const Slide12Header = ({ tabIndex, handleTabChange, headerText }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12}>
        <PlainTabs tabIndex={tabIndex} handleTabChange={handleTabChange} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">{headerText}</Typography>
      </Grid>
      <Grid item xs={12}>
        {/* {children} */}
      </Grid>
    </Grid>
  );
};

export default Slide12Header;
