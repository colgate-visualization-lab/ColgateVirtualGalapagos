import React, { useState } from "react";
import ReactPlayer from "react-player";
import Grow from "@material-ui/core/Grow";
import { makeStyles } from "@material-ui/styles";

import IntermissionScreen from "./IguanaSlide3VideoSelector";

const useStyles = makeStyles((theme) => ({
  intermissionScreenContainer: {
    // position intermission div
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",

    // center the buttons
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
  },
  intermissionScreen: {},
}));

const IguanaSlide3 = ({ content }) => {
  const [src, setSrc] = useState(content.introVidSrc);
  const [intermission, setIntermission] = useState(false);

  const classes = useStyles();

  const handlePlaybackEnded = () => {
    setIntermission(true);
  };

  return (
    <>
      <ReactPlayer
        // position="relative"
        width="100%"
        height="100%"
        controls={!intermission}
        playing={false}
        url={src}
        onEnded={() => {
          //   setSrc(content.interSrc);
          setIntermission(true);
        }}
      />
      <Grow in={intermission} timeout={500}>
        <div className={classes.intermissionScreenContainer}>
          <IntermissionScreen
            watched={new Set()}
            data={content.data}
            onSrcChange={(src) => {
              setIntermission(false);
              setTimeout(() => {
                setSrc(src.videoSrc);
              }, 500);
            }}
            videoInteractionDisabled={true}
          />
        </div>
      </Grow>{" "}
    </>
  );
};

export default IguanaSlide3;
