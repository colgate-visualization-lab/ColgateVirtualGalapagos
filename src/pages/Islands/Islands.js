import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Map from "./Map";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    background: theme.palette.grey[50],
  },
}));

const Islands = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={1} square className={classes.title}>
        <Typography variant="h3" align="center">
          CLICK ON AN ISLAND TO EXPLORE ITS MYSTERIES!
        </Typography>
      </Paper>
      <Map />
    </div>
  );
};

export default Islands;
