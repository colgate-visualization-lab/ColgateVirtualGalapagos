import React from "react";
import { Back, Next } from "../../assets/VolcanoModule";
import classes from "./ControlButtons";

export default function ControlButtons(props) {
  return (
    <div>
      <button>
        <img
          className="prev"
          src={Back}
          onClick={props.prevSlide}
          style={{
            width: props.width,
            height: "auto",
            position: "absolute",
            zIndex: 10,
            bottom: props.bottom,
            left: props.left,
          }}
        />
      </button>
      <button>
        <img
          className="next"
          src={Next}
          onClick={props.nextSlide}
          style={{
            width: props.width,
            height: "auto",
            position: "absolute",
            zIndex: 10,
            bottom: props.bottom,
            right: props.right,
          }}
        />
      </button>
    </div>
  );
}
