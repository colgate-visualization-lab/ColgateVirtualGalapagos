import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import DoubleHelix from "./DoubleHelix";
import Sequence from "./DnaSequence";

const useStyles = makeStyles((theme) => ({
  dnaContainer: {
    marginBottom: theme.spacing(2),
  },

  label: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
}));

const DnaActivity = ({ label, basePairs }) => {
  const classes = useStyles();
  const numGroups = 6;

  const viewBox = [10, 0, 282.32, 32.56];

  return (
    <Grid container spacing={2} className={classes.dnaContainer}>
      <Grid item xs={12}>
        <Typography className={classes.label}>{label}</Typography>
      </Grid>
      <Grid item xs={12}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="100%"
        >
          <g
            id="dna"
            // transform={`translate(0,${yTranslateDistance})`}
          >
            <DoubleHelix numGroups={numGroups + 1} />
            <Sequence
              classes={classes}
              numGroups={numGroups}
              basePairs={basePairs}
            />
          </g>
        </svg>
      </Grid>
    </Grid>
  );
};

export default DnaActivity;
