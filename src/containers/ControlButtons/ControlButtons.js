import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    fontFamily: "inherit",
    fontWeight: "bold",
  },
  // BUTTON STYLES
  buttonsContainer: {
    zIndex: 100,
    position: "relative",
    width: "90vw",
    color: "black",
    height: theme.typography.pxToRem(40),
    padding: theme.spacing(2, 0),
  },
  link: {
    ...theme.typography.link,
  },
}));

// changed ControlButtons to use Links instead of button - they also
//  conditionally render - back button won't render on first slide
export default function ControlButtons(props) {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      container
      justify="space-between"
      alignItems="center"
      className={classes.buttonsContainer}
    >
      <Grid item>
        {props.hasPrev && (
          <Button variant="outlined" size="medium" className={classes.button}>
            <Link className={classes.link} to={props.prevSlide}>
              PREVIOUS
            </Link>
          </Button>
        )}
      </Grid>
      <Grid item>
        {props.hasNext && (
          <Button variant="outlined" size="medium" className={classes.button}>
            <Link className={classes.link} to={props.nextSlide}>
              NEXT
            </Link>
          </Button>
        )}
      </Grid>
    </Grid>
  );
}

ControlButtons.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  width: PropTypes.string,
  hasNext: PropTypes.bool,
  hasPrev: PropTypes.bool,
  nextSlide: PropTypes.string.isRequired,
  prevSlide: PropTypes.string.isRequired,
};

ControlButtons.defaultProps = {
  left: "0%",
  right: "0%",
  bottom: "5%",
  hasNext: true,
  hasPrev: true,
  width: "120px",
};
