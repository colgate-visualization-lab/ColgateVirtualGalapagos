import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { video } from "../../assets/Misc";
import classes from "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <Fragment>
      <video autoPlay muted loop className={classes.SplashScreen}>
        <source src={video} type="video/mp4" />
      </video>
      <Link className={classes.fixLink} to="/home">
        <div className={classes.Arrow}>
          <div className={classes.ArrowTop}></div>
          <div className={classes.ArrowBottom}></div>
        </div>
      </Link>
    </Fragment>
  );
};

export default SplashScreen;
