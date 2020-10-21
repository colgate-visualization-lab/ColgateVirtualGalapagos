import React from "react";
import { Back, Next } from "../../assets/VolcanoModule";
import classes from "./ControlButtons";

export default function ControlButtons(props) {
  return (
    <div>
      <div >
        <img className="prev"
          src={Back}
          onClick={props.prevSlide}
          style={{
            width: props.width,
            height: "auto",
            position: "absolute",
            zIndex: 1,
            bottom: props.bottom,
            left: props.left,
            cursor:'pointer',
          }}
        />
      </div>
      <div >
        <img className="next"
          src={Next}
          onClick={props.nextSlide}
          style={{
            width: props.width,
            height: "auto",
            position: "absolute",
            zIndex: 1,
            bottom: props.bottom,
            right: props.right,
            cursor:'pointer',
          }}
        />
      </div>
    </div>
  );
}
