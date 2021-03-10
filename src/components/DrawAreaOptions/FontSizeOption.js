import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "1.4rem",
  },
  fontSizeInput: {
    width: "100%",
    height: "1.4rem",
    fontSize: "0.6rem",
    border: "2px solid #E5E5E5",
    borderRadius: "5px",
    padding: theme.spacing(1, 1),
  },
  fontSizeChip: {
    fontSize: "0.6rem",
  },
}));

const FontSizeOption = ({ options, handleOptionsChange }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={6}>
        <input
          className={classes.fontSizeInput}
          value={options.get("fontSize")}
          onChange={(e) => {
            handleOptionsChange(options.set("fontSize", e.target.value));
          }}
          type="number"
          min="10"
          max="100"
        />
      </Grid>
    </Grid>
  );
};

export default FontSizeOption;
