import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hintButton: {
    fontSize: ".5rem",
    padding: theme.spacing(0, 0.5),
  },
  foundCount: {
    color: "khaki",
  },
}));

const Slide17Header = ({ handleShowMutations, numFound, numMutations }) => {
  const classes = useStyles();
  const [showHint, setShowHint] = useState(false);

  const hint = `Compare the Green Iguana and Marine Iguana gene sequences below
                and find positions that either have different base pairs or
                have the same base pairs with their order flipped`;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography component="h1" variant="h5">
          Find the Mutation!
        </Typography>
        <Typography variant="caption" component="h2">
          Mutations Found:{" "}
          <span className={classes.foundCount}>
            {numFound}/{numMutations}
          </span>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          size="small"
          className={classes.hintButton}
          disableTouchRipple
          onClick={() => {
            setShowHint(!showHint);
          }}
        >
          Hint
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Collapse in={showHint}>
          <Typography variant="caption" component="p">
            {hint}
          </Typography>
          <Button
            variant="contained"
            size="small"
            className={classes.hintButton}
            disableTouchRipple
            onClick={handleShowMutations}
          >
            show me the mutations
          </Button>
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default Slide17Header;
