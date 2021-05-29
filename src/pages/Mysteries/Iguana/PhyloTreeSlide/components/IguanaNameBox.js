import React, { forwardRef } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  ...theme.dragSource,

  root: {
    padding: theme.spacing(1.5, 1),
    width: ({ width }) => width,
    height: "3em",
    cursor: "grabbing",
  },

  text: {
    display: "flex",
    alignItems: "center",
    fontWeight: theme.typography.fontWeightMedium,
    pointerEvents: "none",
  },

  iguanaName: {
    paddingLeft: theme.spacing(1),
  },
}));

const IguanaNameBox = forwardRef(({ iguana, width, ...paperProps }, ref) => {
  const classes = useStyles({ width });

  return (
    <Paper
      ref={ref}
      className={clsx(classes.root, classes.clicked)}
      elevation={1}
      variant="outlined"
      role="drag-source"
      {...paperProps}
    >
      <Typography variant="subtitle2" className={classes.text}>
        <DragIndicatorIcon fontSize="small" />
        <span className={classes.iguanaName}>{iguana}</span>
      </Typography>
    </Paper>
  );
});

IguanaNameBox.defaultProps = {
  width: "100%",
};

IguanaNameBox.propTypes = {
  iguana: PropTypes.string.isRequired,
};

export default IguanaNameBox;
