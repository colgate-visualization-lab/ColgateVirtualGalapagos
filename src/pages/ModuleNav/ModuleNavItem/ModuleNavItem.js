import React from "react";
import classes from "../ModuleNav.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ModuleNavItem = (props) => {
  return (
    <div
      className={classes.col + props.animation}
      onTouchStart={() => this.classList.toggle("hover")}
    >
      <Link to={props.link}>
        <div className={classes.container}>
          <div
            className={classes.front}
            style={{ backgroundImage: props.background }}
          >
            <div className={classes.inner}>
              <p>{props.title}</p>
            </div>
          </div>
          <div className={classes.back}>
            <div className={classes.inner}>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

ModuleNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default ModuleNavItem;
