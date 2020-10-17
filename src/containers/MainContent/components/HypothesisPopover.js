import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";

export default function HypothesisPopover(props) {
  return (
    <>
      <ReactPlayer
        width="80vw"
        height="auto"
        controls
        url={props.videoSrc}
        playing={true}
      />
    </>
  );
}
