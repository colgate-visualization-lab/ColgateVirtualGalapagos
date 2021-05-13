import React from "react";
import { backgroundVideo } from "assets/Homepage";
import classes from "./BackgroundVideo.css";

function BackgroundVideo() {
  return (
    <video autoPlay loop muted className={classes.bgvid}>
      <source src={backgroundVideo} />
    </video>
  );
}

export default BackgroundVideo;
