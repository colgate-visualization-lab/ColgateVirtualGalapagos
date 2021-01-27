import React, { useState, Fragment, useEffect } from "react";
import classes from "./MainContent.css";
import ControlButtons from "../ControlButtons/ControlButtons";
import IguanaSlide15 from "../IguanaSlide15/IguanaSlide15";
import Iframe from "react-iframe";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

import data from "../../components/IguanaData/IguanaData.js";
import AudioPlayerHandler from "../../components/AudioPlayer/AudioPlayerHandler";
import IguanaSlide3 from "../IguanaSlide3";
import IguanaSlide8 from "../../components/IguanaSlide8/IguanaSlide8";
import IguanaSlide17 from "../IguanaSlide17";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "100%",
    boxSizing: "border-box",
    overflow: "hidden",
    minHeight: "500px",
    minWidth: "500px",
    // backgroundColor: "tomato",
  },

  //  CONTENT CONTAINER STYLING  - container that surrounds
  //   main content of the page - basically whatever's above the
  //   PREV and NEXT buttons
  contentContainer: {
    position: "relative",
    width: "100%",

    // height is 100% of parent container minus the total height of the PREV and NEXT buttons (plus a little space)
    height: `calc(100%  -  ${theme.typography.pxToRem(40)})`,
    // backgroundColor: "lavender",
  },

  // VIDEO STYLING
  video: {
    minHeight: "400px",
    minWidth: "400px",
    width: "100%",
    maxHeight: "100%",
  },

  // IMAGE STYLING
  img: {
    objectFit: "contain",
    maxHeight: "100%",
    maxWidth: "100%",
    minWidth: "360px",
  },

  // 360 VIDEO STYLING
  iframe360: {
    width: "100%",
    height: "100%",
  },
}));

// Grid Outer Container Component
const GridContainer = (props) => (
  <Grid
    {...props}
    container
    spacing={0}
    direction="row"
    justify="space-between"
  />
);

// Slide Content Container Component - i.e. everything above the
//  PREV/NEXT buttons and below the navbar
const SlideContent = (props) => (
  <Grid
    item
    xs={12}
    container
    justify="center"
    alignItems="center"
    {...props}
  />
);

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
    hasPrev: slideId !== 1,
    hasNext: slideId < data.length,
    nextSlide: nextSlide,
    prevSlide: prevSlide,
  };

  const content = data[slideId - 1];

  if (content.type === "image") {
    return (
      <GridContainer className={classes.container}>
        <SlideContent className={classes.contentContainer}>
          <img src={content.url} className={`iguana ${classes.img}`} />
        </SlideContent>

        <ControlButtons {...controlButtonProps} />
      </GridContainer>
    );
  } else if (content.type === "video") {
    return (
      <GridContainer className={classes.container}>
        <SlideContent className={classes.contentContainer}>
          <video src={content.url} className={classes.video} controls />
        </SlideContent>

        <ControlButtons {...controlButtonProps} />
      </GridContainer>
    );
  } else if (content.type === "video360") {
    return (
      <GridContainer className={classes.container}>
        <AudioPlayerHandler src={content.audioSrc} />

        <SlideContent className={classes.contentContainer}>
          <Iframe className={classes.iframe360} src={content.url} />
        </SlideContent>

        <ControlButtons {...controlButtonProps} />
      </GridContainer>
    );
  } else if (content.type === "interactive_image") {
    return (
      <GridContainer className={classes.container}>
        <SlideContent className={classes.contentContainer}>
          <IguanaSlide15 classes={classes} content={content} />
        </SlideContent>

        <ControlButtons {...controlButtonProps} />
      </GridContainer>
    );
  } else if (content.type === "image_comparison") {
    return (
      <GridContainer className={classes.container}>
        <AudioPlayerHandler src={content.audioSrc} />

        <SlideContent className={classes.contentContainer}>
          <IguanaSlide8 content={content} />
        </SlideContent>

        <ControlButtons {...controlButtonProps} />
      </GridContainer>
    );
  } else if (content.type === "360_comparison") {
    return (
      <GridContainer className={classes.container}>
        <AudioPlayerHandler src={content.audioSrc} />

        <SlideContent xs={6} className={classes.contentContainer}>
          <Iframe src={content.url1} className={classes.iframe360} />
        </SlideContent>

        <SlideContent xs={6} className={classes.contentContainer}>
          <Iframe src={content.url2} className={classes.iframe360} />
        </SlideContent>

        <ControlButtons {...controlButtonProps} />
      </GridContainer>
    );
  } else if (content.type === "slide3InteractiveVideo") {
    return (
      <GridContainer className={classes.container}>
        <SlideContent className={classes.contentContainer}>
          <IguanaSlide3 content={content} imgClass={classes.img} />
        </SlideContent>

        <ControlButtons {...controlButtonProps} />
      </GridContainer>
    );
  } else if (content.type === "dnaInteractiveActivity") {
    return (
      <GridContainer className={classes.container}>
        <AudioPlayerHandler src={content.audioSrc} />

        <SlideContent className={classes.contentContainer}>
          <IguanaSlide17 content={content} />
        </SlideContent>

        <ControlButtons {...controlButtonProps} />
      </GridContainer>
    );
  } else {
    return (
      <GridContainer className={classes.container}>
        <SlideContent className={classes.contentContainer}>
          <h1>THIS SLIDE HASN'T BEEN CREATED YET</h1>
        </SlideContent>

        <ControlButtons {...controlButtonProps} />
      </GridContainer>
    );
  }
}

MainContent.propTypes = {};

export default MainContent;
