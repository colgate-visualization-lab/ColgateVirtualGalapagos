import React from "react";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "1.2rem",
  },

  fontSizeInput: {
    width: "100%",
    height: "1.4rem",
    fontSize: "0.6rem",
    border: "2px solid #E5E5E5",
    borderRadius: "5px",
    padding: theme.spacing(1, 1),
  },
  chip: {
    fontSize: "0.7rem",
    textAlign: "center",

    width: "100%",
  },
}));

const TextAlignOption = ({ options, handleOptionsChange }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="space-between"
      alignItems="center"
      spacing={1}
    >
      <Grid item xs={4}>
        <Chip
          size="small"
          label="Left"
          onClick={() => {
            handleOptionsChange(options.set("textAlign", "left"));
          }}
          className={classes.chip}
        />
      </Grid>
      <Grid item xs={4}>
        <Chip
          size="small"
          label="Center"
          onClick={() => {
            handleOptionsChange(options.set("textAlign", "center"));
          }}
          className={classes.chip}
        />
      </Grid>
      <Grid item xs={4}>
        <Chip
          size="small"
          label="Right"
          onClick={() => {
            handleOptionsChange(options.set("textAlign", "right"));
          }}
          className={classes.chip}
        />
      </Grid>
    </Grid>
  );
};

export default TextAlignOption;
