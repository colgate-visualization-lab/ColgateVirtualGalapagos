import React, { useState, Fragment, useEffect } from "react";
import classes from "./MainContent.css";
import ControlButtons from "../ControlButtons/ControlButtons";
import IguanaSlide15 from "../IguanaSlide15/IguanaSlide15";
import Iframe from "react-iframe";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

import data from "../../components/IguanaData/IguanaData.js";
import AudioPlayerHandler from "../../components/AudioPlayer/AudioPlayerHandler";
import IguanaSlide3 from "../IguanaSlide3/IguanaSlide3";
import IguanaSlide8 from "../../components/IguanaSlide8/IguanaSlide8";
import IguanaSlide17 from "../IguanaSlide17";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "100%",
    boxSizing: "border-box",
    overflow: "visible",
    // backgroundColor: "tomato",
  },

  // VIDEO & IMAGE SLIDES - CONTAINER STYLING
  videoContainer: {
    width: "100vw",
    height: `calc(100%  -  ${theme.typography.pxToRem(35)})`,
    // padding: 0,
    // backgroundColor: "lavender",
  },
  video: {
    minHeight: "400px",
    minWidth: "400px",
    maxWidth: "100%",
    maxHeight: "100%",
  },

  // IMAGE CONTENT SLIDES
  img: {
    objectFit: "contain",
    maxHeight: "100%",
    maxWidth: "100%",
    minWidth: "360px",
  },

  // BUTTON STYLES
  buttonsContainer: {
    position: "relative",
    width: "90vw",
    color: "primary",
    // backgroundColor: "lawngreen",
    height: theme.typography.pxToRem(30),
  },
}));

function MainContent(props) {
  // const [audioIsPlaying, setAudioIsPlaying] = useState(true);
  // const [audioIsDone, setAudioIsDone] = useState(false);
  // we get current slide id from and use that to find the next and prev slide ids
  const classes = useStyles();
  const slideId = parseInt(props.match.params.slide_id || 1);
  const prevSlide = `/iguana/${slideId === 1 ? 1 : slideId - 1}`;
  const nextSlide = `/iguana/${
    slideId + 1 > data.length ? slideId : slideId + 1
  }`;

  // ControlButtons component
  const controlButtonProps = {
    width: "100px",
    bottom: "2%",
    left: "0%",
    right: "0%",
    hasPrev: slideId !== 1,
    hasNext: slideId < data.length,
    nextSlide: nextSlide,
    prevSlide: prevSlide,
  };

  const content = data[slideId - 1];

  if (content.type === "image") {
    return (
      <Grid
        className={classes.container}
        container
        spacing={0}
        direction="row"
        // alignItems="stretch"
        justify="space-between"
      >
        <Grid
          item
          xs={12}
          container
          justify="center"
          // alignItems="flex-start"
          className={classes.videoContainer}
        >
          <img src={content.url} className={`iguana ${classes.img}`} />
        </Grid>
        <Grid
          item
          xs={12}
          container
          justify="space-between"
          className={classes.buttonsContainer}
        >
          <ControlButtons {...controlButtonProps} />
        </Grid>
      </Grid>
    );
  } else if (content.type === "video") {
    return (
      <Grid
        className={classes.container}
        container
        spacing={0}
        direction="row"
        // alignItems="stretch"
        justify="space-between"
      >
        <Grid
          item
          xs={12}
          container
          justify="center"
          // alignItems="flex-start"
          className={classes.videoContainer}
        >
          <video src={content.url} className={classes.video} controls />
        </Grid>
        <Grid
          item
          xs={12}
          container
          justify="space-between"
          className={classes.buttonsContainer}
        >
          <ControlButtons {...controlButtonProps} />
        </Grid>
      </Grid>
    );
  } else if (content.type === "video360") {
    return (
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <Grid item xs={12} className={classes.iframe360}>
          <AudioPlayerHandler src={content.audioSrc} />
          <Iframe
            // position="absolute"
            width="100%"
            height="100%"
            src={content.url}
          />
        </Grid>
        <Grid item xs={12} container justify="space-between">
          <ControlButtons {...controlButtonProps} />
        </Grid>
      </Grid>
    );
  } else if (content.type === "interactive_image") {
    return (
      <>
        <IguanaSlide15 classes={classes} content={content} />
        <ControlButtons {...controlButtonProps} />
      </>
    );
  } else if (content.type === "image_comparison") {
    return (
      <div
        style={{
          width: "90%",
          height: "90%",
          margin: "0 auto",
          display: "flex",
        }}
      >
        <AudioPlayerHandler src={content.audioSrc} />
        <IguanaSlide8 content={content} />
        <ControlButtons {...controlButtonProps} />
      </div>
    );
  } else if (content.type === "360_comparison") {
    return (
      <Fragment>
        <AudioPlayerHandler src={content.audioSrc} />
        {/* <div className={classes.comparison360Left}> */}
        <Iframe className={classes.comparison360Left} src={content.url1} />
        {/* </div> */}
        {/* <div className={classes.comparison360Right}> */}
        <Iframe className={classes.comparison360Right} src={content.url2} />
        {/* </div> */}
        <ControlButtons {...controlButtonProps} />
      </Fragment>
    );
  } else if (content.type === "slide3InteractiveVideo") {
    return (
      <Grid
        className={classes.container}
        container
        spacing={0}
        direction="row"
        // alignItems="stretch"
        justify="space-between"
      >
        {/* <AudioPlayerHandler src={content.audioSrc} /> */}
        <Grid
          item
          xs={12}
          container
          justify="center"
          // alignItems="flex-start"
          className={classes.videoContainer}
        >
          <IguanaSlide3 content={content} />
        </Grid>
        <Grid
          item
          xs={12}
          container
          justify="space-between"
          className={classes.buttonsContainer}
        >
          <ControlButtons {...controlButtonProps} />
        </Grid>
      </Grid>
    );
  } else if (content.type === "dnaInteractiveActivity") {
    return (
      <>
        <AudioPlayerHandler src={content.audioSrc} />
        <IguanaSlide17 content={content} />
        <ControlButtons {...controlButtonProps} />
      </>
    );
  } else {
    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "80vh",
          }}
        >
          <h1>THIS SLIDE HASN'T BEEN CREATED YET</h1>
        </div>
        <ControlButtons {...controlButtonProps} />
      </>
    );
  }
}

MainContent.propTypes = {};

export default MainContent;
