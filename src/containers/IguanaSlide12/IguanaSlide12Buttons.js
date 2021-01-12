import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import classes from "./IguanaSlide12Buttons.css";

export default function IguanaSlide12Buttons(props) {
  // useEffect(()=>{console.log(props)})
  return (
    <div>
      <button className={classes.premade} onClick={props.changepremade}>
        Pre-Made Tree
      </button>
      <button className={classes.draw} onClick={props.changedraw}>
        Draw Your Own Tree
      </button>
    </div>
  );
}
