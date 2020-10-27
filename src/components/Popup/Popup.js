import React from "react";
import Popup from "reactjs-popup";
import classes from "./Popup.css";

export default function RoundPopup(props) {
  return (
    <Popup
      trigger={
        <button
          className={`${classes.dot}`}
          style={{
            position: "absolute",
            // zIndex: 1,
            top: props.top,
            left: props.left,
          }}
        ></button>
      }
      contentStyle={{
        margin: "auto",
        padding: "20px",
        background: "rgba(0, 0, 0, 0.762)",
        borderRadius: "5px",
        zIndex: "2",
        width: "auto",
        position: "absolute",
      }}
      arrow={false}
      position="right center"
    >
      <div>{props.description}</div>
    </Popup>
  );
}
