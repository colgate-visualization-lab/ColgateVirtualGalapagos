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
  explore: {
    marginTop: theme.spacing(5),
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      height: "0.5rem",
      bottom: "-0.5rem",

      backgroundColor: theme.palette.secondary.light,
      margin: "0 auto",
      left: 0,
      right: 0,
      width: "98%",
    },
  },
}));

const Islands = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Paper elevation={1} square className={classes.title}> */}
      <Typography variant="h3" align="center" className={classes.explore}>
        CLICK ON AN ISLAND TO EXPLORE ITS MYSTERIES!
      </Typography>
      {/* </Paper> */}
      <Map />
    </div>
  );
};

export default Islands;
