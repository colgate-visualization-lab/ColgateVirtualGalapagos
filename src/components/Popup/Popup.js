import React from "react";
import { propTypes } from "react-player-circle-controls";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";
import classes from "./Popup.css";

export default function RoundPopup({ top, left, description }) {
  return (
    <Popup
      trigger={
        <button
          className={`${classes.dot}`}
          style={{
            position: "absolute",
            // zIndex: 1,
            top: top,
            left: left,
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
      <div>{description}</div>
    </Popup>
  );
}

RoundPopup.propTypes = {
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
