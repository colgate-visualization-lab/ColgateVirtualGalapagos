import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import PlainTabs from "./PlainTabs";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "rgba(248, 248, 248, 1)",
    padding: theme.spacing(0, 2),
  },
  item: {
    paddingBottom: theme.spacing(1),
  },
  header: {
    fontSize: "1.2rem",
  },
}));

const Slide12Header = ({ tabIndex, handleTabChange, header, children }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.item}>
        <PlainTabs tabIndex={tabIndex} handleTabChange={handleTabChange} />
      </Grid>
      <Grid item xs={12} className={classes.item}>
        <Typography variant="subtitle2" className={classes.header}>
          {header}
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.item}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Slide12Header;
