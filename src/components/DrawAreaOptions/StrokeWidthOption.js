import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "1.4rem",
  },
  input: {
    width: "100%",
    height: "1.4rem",
    fontSize: "0.6rem",
    border: "2px solid #E5E5E5",
    borderRadius: "5px",
    padding: theme.spacing(1, 1),
  },
}));

const StrokeWidthOption = ({ options, handleOptionsChange }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={6}>
        <input
          className={classes.input}
          value={options.get("strokeWidth")}
          onChange={(e) => {
            handleOptionsChange(options.set("strokeWidth", e.target.value));
          }}
          type="number"
          min="1"
          max="100"
        />
      </Grid>
    </Grid>
  );
};

export default StrokeWidthOption;
