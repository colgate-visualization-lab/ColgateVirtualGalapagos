import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(0.5, 1),
    // margin: theme.spacing(0, 1),
    fontSize: "0.8rem",
    fontWeight: "bold",
    borderRadius: 5,
    textTransform: "none",
    backgroundColor: "rgb(239,239,239)",
    color: "#000",
    "&:hover": {
      backgroundColor: "rgb(220,220,220)",
    },
  },
}));

const PhyloTreeMenuButton = ({ handleClick, label, children }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Button
        fullWidth
        variant="text"
        size="small"
        className={classes.button}
        onClick={handleClick}
      >
        {label}
      </Button>
      {children}
    </Grid>
  );
};

PhyloTreeMenuButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default PhyloTreeMenuButton;
