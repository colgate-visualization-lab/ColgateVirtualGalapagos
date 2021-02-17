import React from "react";
import Iframe from "react-iframe";

function IframeComponent(props) {
  return (
    <Iframe className={props.class} src={props.src}/>
  );
}
export default IframeComponent;
