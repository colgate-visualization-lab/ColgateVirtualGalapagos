import React from "react";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  geneName: {
    fontSize: "0.5rem",
    fontWeight: "bold",
  },
  geneDescription: {
    fontSize: "0.6rem",
  },
}));

const MutationDetailsPopover = ({ show, coords, details }) => {
  const classes = useStyles();
  return (
    <Grow in={show} className={classes.root}>
      <Paper
        style={{
          position: "absolute",
          top: coords.y ? coords.y - 60 : 0,
          left: coords.x ? coords.x + 12 : 0,
        }}
      >
        <Typography
          variant="button"
          component="h5"
          className={classes.geneName}
        >
          {details && details.geneName}
        </Typography>
        <Divider />
        <Typography variant="body2" className={classes.geneDescription}>
          {details && details.geneDescription}
        </Typography>
      </Paper>
    </Grow>
  );
};

export default MutationDetailsPopover;
