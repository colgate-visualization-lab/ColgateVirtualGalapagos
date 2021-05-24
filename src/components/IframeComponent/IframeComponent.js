import React from "react";
import Iframe from "react-iframe";
import classes from "./IframeComponent.css";

function IframeComponent(props) {
  return <Iframe width="100%" height="100%" src={props.src} />;
}
export default IframeComponent;
