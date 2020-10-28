import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Back, Next } from "../../assets/VolcanoModule";
import classes from "./ControlButtons";

// changed ControlButtons to use Links instead of button - they also
//  conditionally render - back button won't render on first slide
export default function ControlButtons(props) {
  return (
    <div>
      {props.hasPrev && (
        <Link to={props.prevSlide}>
          <img
            className="prev"
            src={Back}
            style={{
              width: props.width,
              height: "auto",
              position: "absolute",
              zIndex: 10,
              bottom: props.bottom,
              left: props.left,
            }}
          />
        </Link>
      )}
      {props.hasNext && (
        <Link to={props.nextSlide}>
          <img
            className="next"
            src={Next}
            style={{
              width: props.width,
              height: "auto",
              position: "absolute",
              zIndex: 10,
              bottom: props.bottom,
              right: props.right,
            }}
          />
        </Link>
      )}
    </div>
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
