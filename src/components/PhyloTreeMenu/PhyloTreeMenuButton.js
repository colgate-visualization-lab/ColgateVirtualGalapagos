import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(1, 2),
    margin: theme.spacing(0, 1),
    fontSize: "0.7rem",
    fontWeight: "bold",
    backgroundColor: "rgb(249,249,249)",
    color: "#000",
    "&:hover": {
      backgroundColor: "rgb(220,220,220)",
    },
  },
}));

const PhyloTreeMenuButton = ({ handleClick, label }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      size="small"
      className={classes.button}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};

PhyloTreeMenuButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default PhyloTreeMenuButton;
