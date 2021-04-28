import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import Paper from "@material-ui/core/Paper";

import DragIndicatorIcon from "@material-ui/icons/DragIndicator";

import { makeStyles } from "@material-ui/core/styles";
import { useDrag } from "react-dnd";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0.5, 1),
    backgroundColor: "rgb(239,239,239)",
    color: "#000",
    "&:hover": {
      backgroundColor: "rgb(220,220,220)",
    },

    borderRadius: 5,
  },

  dragIndicator: {
    fontSize: "1.7rem",
    textTransform: "none",
  },

  srcName: {
    fontWeight: "bold",
    fontSize: "0.8rem",
    padding: theme.spacing(1),
  },
}));

const DragSource = ({ name, validNames }) => {
  console.log(name);
  const [, drag] = useDrag(() => ({
    type: "iguana",
    item: { name },
  }));

  const classes = useStyles(styleProps);

  return (
    <Paper ref={drag} elevation={0} className={classes.root}>
      <div>
        <DragIndicatorIcon className={classes.dragIndicator} />
        <Typography className={classes.srcName}>{name}</Typography>
      </div>
    </Paper>
  );
};

DragSource.propTypes = {};

export default DragSource;
