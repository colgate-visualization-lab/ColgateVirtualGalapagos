import React, { useState } from "react";
import Iframe from "react-iframe";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

import IguanaSlide3 from "../IguanaSlide3";
import IguanaSlide8 from "../../components/IguanaSlide8";
import IguanaSlide12 from "../IguanaSlide12";
import IguanaSlide15 from "../IguanaSlide15/IguanaSlide15";
import IguanaSlide17 from "../IguanaSlide17";
// import classes from "./MainContent.css";
import data from "../../components/IguanaData/IguanaData.js";
import AudioPlayerHandler from "../../components/AudioPlayer/AudioPlayerHandler";
import ControlButtons from "../ControlButtons/ControlButtons";
import SlideContentDrawer from "../SlideContentDrawer";

const useStyles = makeStyles((theme) => ({
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

// Slide Content Container Component - i.e. everything above the
//  PREV/NEXT buttons and below the navbar
const SlideContainer = (props) => (
  <Grid
    item
    xs={10}
    container
    justify="center"
    alignItems="center"
    {...props}
  />
);

function MainContent({ content }) {
  const classes = useStyles();
  if (content.type === "image") {
    return (
      <SlideContainer className={classes.contentContainer}>
        <img src={content.url} className={`iguana ${classes.img}`} />
      </SlideContainer>
    );
  } else if (content.type === "video") {
    return (
      <SlideContainer className={classes.contentContainer}>
        <video src={content.url} className={classes.video} controls />
      </SlideContainer>
    );
  } else if (content.type === "video360") {
    return (
      <>
        <AudioPlayerHandler src={content.audioSrc} />

        <SlideContainer className={classes.contentContainer}>
          <Iframe className={classes.iframe360} src={content.url} />
        </SlideContainer>
      </>
    );
  } else if (content.type === "interactive_image") {
    return (
      <>
        <SlideContainer className={classes.contentContainer}>
          <IguanaSlide15 classes={classes} content={content} />
        </SlideContainer>
      </>
    );
  } else if (content.type === "image_comparison") {
    return (
      <>
        <AudioPlayerHandler src={content.audioSrc} />

        <SlideContainer className={classes.contentContainer}>
          <IguanaSlide8 content={content} />
        </SlideContainer>
        {/* <SlideContainer xs={6} className={classes.contentContainer}>
          <IguanaSlide8 url={content.url1} popupText={content.landIguanaText} />
        </SlideContainer>
        <SlideContainer xs={6} className={classes.contentContainer}>
          <IguanaSlide8
            url={content.url2}
            popupText={content.marineIguanaText}
          />
        </SlideContainer> */}
      </>
    );
  } else if (content.type === "360_comparison") {
    return (
      <>
        <AudioPlayerHandler src={content.audioSrc} />

        <SlideContainer xs={5} className={classes.contentContainer}>
          <Iframe src={content.url1} className={classes.iframe360} />
        </SlideContainer>

        <SlideContainer xs={5} className={classes.contentContainer}>
          <Iframe src={content.url2} className={classes.iframe360} />
        </SlideContainer>
      </>
    );
  } else if (content.type === "slide3InteractiveVideo") {
    return (
      <>
        <SlideContainer className={classes.contentContainer}>
          <IguanaSlide3 content={content} imgClass={classes.img} />
        </SlideContainer>
      </>
    );
  } else if (content.type === "dnaInteractiveActivity") {
    return (
      <>
        <AudioPlayerHandler src={content.audioSrc} />

        <SlideContainer className={classes.contentContainer}>
          <IguanaSlide17 content={content} />
        </SlideContainer>
      </>
    );
  } else if (content.type === "Slide12DnDInteractive") {
    return (
      <>
        {/* <AudioPlayerHandler src={content.audioSrc} /> */}

        <SlideContainer className={classes.contentContainer}>
          <IguanaSlide12 content={content} />
        </SlideContainer>
      </>
    );
  } else {
    return (
      <>
        <SlideContainer className={classes.contentContainer}>
          <h1>THIS SLIDE HASN'T BEEN CREATED YET</h1>
        </SlideContainer>
      </>
    );
  }
}

MainContent.propTypes = {};

export default MainContent;
