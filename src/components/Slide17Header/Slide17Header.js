import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { getThemeProps } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  button: {
    fontSize: "0.9rem",
    fontWeight: "bold",
    margin: theme.spacing(1, 0),
    padding: theme.spacing(0, 1),
  },

  hint: {
    fontSize: "1rem",
  },

  foundCount: {
    fontSize: "1rem",
  },

  collapsed: {
    padding: theme.spacing(1, 0),
  },
}));

const Slide17Header = ({ handleShowMutations, numFound, numMutations }) => {
  const classes = useStyles();
  const [showHint, setShowHint] = useState(false);

  const hint = `Compare the Green Iguana and Marine Iguana gene sequences below
                and find positions that either have different base pairs or
                have the same base pairs with their order flipped`;

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Typography className={classes.header}>Find the Mutation!</Typography>
        <Typography className={classes.foundCount}>
          Mutations Found: {numFound}/{numMutations}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          className={classes.button}
          disableTouchRipple
          onClick={() => {
            setShowHint(!showHint);
          }}
        >
          Hint
        </Button>
      </Grid>
      <Grid container item xs={12} className={classes.collapsed}>
        <Collapse in={showHint}>
          <Grid item xs={12}>
            <Typography className={classes.hint}>{hint}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              size="small"
              color="secondary"
              className={classes.button}
              disableTouchRipple
              onClick={handleShowMutations}
            >
              Show All Mutations
            </Button>
          </Grid>
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default Slide17Header;
