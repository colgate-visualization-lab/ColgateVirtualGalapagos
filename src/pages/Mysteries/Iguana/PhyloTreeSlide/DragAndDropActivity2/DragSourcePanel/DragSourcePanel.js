import React from "react";
import PropTypes from "prop-types";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import DragSource from "./DragSource";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    fontSize: "0.85rem",
  },
  instructions: {
    fontSize: "0.8rem",
  },
}));

const DragSourcePanel = ({ undraggedNames, completedTreeVisible }) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="center" spacing={1}>
      <Grid item>
        <Typography className={classes.title}>Instructions</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.instructions}>
          Fill out the tree by dragging the iguana species names onto it
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing={1} justify="center">
          {undraggedNames.map((name, index) => (
            <Grid item key={index}>
              <Grow in={!completedTreeVisible}>
                <DragSource name={name} />
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

DragSourcePanel.propTypes = {};

export default DragSourcePanel;
