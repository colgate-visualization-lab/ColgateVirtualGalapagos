import React from "react";
import Iframe from "react-iframe";
import classes from "./IframeComponent.css";

function IframeComponent(props) {
  return (
    <Iframe
      position="absolute"
      width="100%"
      height="100%"
      styles={{ top: 0 }}
      src={props.src}
      autoplay
    />
  );
}
export default IframeComponent;
