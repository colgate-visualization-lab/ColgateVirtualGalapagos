import React from "react";
import Iframe from "react-iframe";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

import IguanaSlide3 from "../IguanaSlide3";
import IguanaSlide8 from "../../components/IguanaSlide8";
import PhyloTreeSlide from "../PhyloTreeSlide";
import IguanaSlide15 from "../IguanaSlide15/IguanaSlide15";
import IguanaSlide17 from "../IguanaSlide17";
import AudioPlayer from "../AudioPlayer";

const useStyles = makeStyles((theme) => ({
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

  iframe360Comparison: {
    width: "50%",
  },
}));

function MainContent({ content }) {
  const classes = useStyles();
  if (content.type === "image") {
    return <img src={content.url} className={`iguana ${classes.img}`} />;
  } else if (content.type === "video") {
    return <video src={content.url} className={classes.video} controls />;
  } else if (content.type === "video360") {
    return (
      <>
        <Iframe className={classes.iframe360} src={content.url} />
        <AudioPlayer src={content.audioSrc} />
      </>
    );
  } else if (content.type === "interactive_image") {
    return <IguanaSlide15 classes={classes} content={content} />;
  } else if (content.type === "image_comparison") {
    return (
      <>
        <IguanaSlide8 content={content} />
        <AudioPlayer src={content.audioSrc} />
      </>
    );
  } else if (content.type === "360_comparison") {
    return (
      <>
        <Grid item xs={6} style={{ height: "100%" }}>
          <Iframe src={content.url1} className={classes.iframe360} />
        </Grid>
        <Grid item xs={6} style={{ height: "100%" }}>
          <Iframe src={content.url2} className={classes.iframe360} />
        </Grid>
        <AudioPlayer src={content.audioSrc} />
      </>
    );
  } else if (content.type === "slide3InteractiveVideo") {
    return <IguanaSlide3 content={content} imgClass={classes.img} />;
  } else if (content.type === "dnaInteractiveActivity") {
    return (
      <>
        <IguanaSlide17 content={content} />
        <AudioPlayer src={content.audioSrc} />
      </>
    );
  } else if (content.type === "PhyloTreeDrawingSlide") {
    return (
      <>
        <PhyloTreeSlide content={content} />
        <AudioPlayer src={content.audioSrc.part1} />
      </>
    );
  } else {
    return <h1>THIS SLIDE HASN'T BEEN CREATED YET</h1>;
  }
}

MainContent.propTypes = {};

export default MainContent;
