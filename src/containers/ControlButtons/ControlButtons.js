import React, { useEffect } from "react";
import { Back, Next } from "../../assets/VolcanoModule";
import classes from "./ControlButtons";
import { Link } from "react-router-dom";

export default function ControlButtons(props) {
  useEffect(()=>{console.log(props)})
  return (
    <div>
      { props.hasPrev && 
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
}
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
    </div>
  );
}
