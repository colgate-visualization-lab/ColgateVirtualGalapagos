import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "2rem",
    padding: 0,
  },
  colorDiv: {
    background: ({ color }) => color,
    height: "2rem",
    width: "100%",
    borderRadius: "5px",
  },
  inputDiv: {
    display: "flex",
    position: "relative",
    width: "100%",
    border: "2px solid #E5E5E5",
    borderRadius: "5px",
  },
  colorInput: {
    display: "inline-block",
    height: "2rem",
    padding: theme.spacing(0, 1),
    width: "100%",
    fontSize: "0.95rem",
    border: "none",
    outline: "none",
  },
  inputArdonment: {
    flexGrow: 1,
    height: "2rem",
    fontSize: "0.95rem",
    marginRight: "0.1rem",
    padding: theme.spacing(0.5, 1, 0, 1),
    backgroundColor: "#E5E5E5",
  },
}));

const StrokeColorOption = ({ options, handleOptionsChange }) => {
  const styleProps = {
    color: options.get("strokeColor"),
  };
  const classes = useStyles(styleProps);
  return (
    <Grid container alignItems="center" spacing={1} className={classes.root}>
      <Grid item xs={3}>
        <div className={classes.colorDiv} />
      </Grid>
      <Grid item xs={9}>
        <div className={classes.inputDiv}>
          <span className={classes.inputArdonment}>#</span>
          <input
            type="text"
            value={styleProps.color}
            className={classes.colorInput}
            onChange={(e) => {
              handleOptionsChange(
                options.set("strokeColor", e.target.value),
                true
              );
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default StrokeColorOption;
