import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

// import { Back, Next } from "../../assets/VolcanoModule";

const useStyles = makeStyles((theme) => ({
  button: {
    // background: "rgba(200, 10, 230, 0.6)",
  },
  // BUTTON STYLES
  buttonsContainer: {
    position: "relative",
    width: "90vw",
    color: "primary",
    // backgroundColor: "lawngreen",
    height: theme.typography.pxToRem(40),
    padding: "0 16px",
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
          <Button
            color="secondary"
            variant="outlined"
            size="small"
            component={Link}
            to={props.prevSlide}
            className={classes.button}
          >
            Previous
          </Button>
        )}
      </Grid>
      <Grid item>
        {props.hasNext && (
          <Button
            color="secondary"
            variant="outlined"
            size="small"
            component={Link}
            to={props.nextSlide}
            className={classes.button}
          >
            Next
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
