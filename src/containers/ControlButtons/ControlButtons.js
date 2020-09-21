import React from "react";
import { Back, Next } from "../../assets/VolcanoModule";
import classes from "./ControlButtons";

export default function ControlButtons(props) {
  return (
    <div>
      <button>
        <img
          src={Back}
          onClick={props.prevSlide}
          style={{
            width: 200,
            height: "auto",
            position: "absolute",
            zIndex: 1,
            bottom: props.bottom,
            left: props.left,
          }}
        />
      </button>
      <button>
        <img
          src={Next}
          onClick={props.nextSlide}
          style={{
            width: 200,
            height: "auto",
            position: "absolute",
            zIndex: 1,
            bottom: props.bottom,
            right: props.right,
          }}
        />
      </button>
    </div>
  );
}
