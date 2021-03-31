import React, { useState } from "react";
import Iframe from "react-iframe";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

// import classes from "./MainContent.css";
import data from "../../components/IguanaData/IguanaData.js";
import volcanodata from "../../components/VolcanoData/VolcanoData.js"
import AudioPlayerHandler from "../../components/AudioPlayer/AudioPlayerHandler";
import ControlButtons from "../ControlButtons/ControlButtons";
import SlideContentDrawer from "../SlideContentDrawer";
import FieldBookDrawer from "../FieldBookDrawer";
import MainContent from "./MainContent";
import VolcanoSlides from "../../components/VolcanoSlides/VolcanoSlides"
import ModuleSelector from "../ModuleSelector/ModuleSelector"

//Needed for something lol
const contentDrawerWidth = 240;
const fieldBookDrawerWidth = 400;
//Custom Styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    height: "100%",
    width: "100%",
  },

  container: {
    position: "relative",
    height: "100%",
    width: "100%",
    // alignSelf: "center",
    boxSizing: "border-box",
    overflow: "hidden",
    minHeight: "500px",
    minWidth: "500px",
    // backgroundColor: "tomato",
  },
  // to accomodate drawer
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -contentDrawerWidth,
    marginRight: -fieldBookDrawerWidth,
  },
  contentShiftLeft: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  contentShiftRight: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));
// Grid Outer Container Component
const GridContainer = (props) => (
  <Grid {...props} container spacing={0} direction="row" justify="center" />
);
// Actual function being exported
function ModuleContainer(props) {
  // const [audioIsPlaying, setAudioIsPlaying] = useState(true);
  // const [audioIsDone, setAudioIsDone] = useState(false);
  // we get current slide id from and use that to find the next and prev slide ids
  const classes = useStyles();
  const slideId = parseInt(props.match.params.slide_id || 1);
  const prevSlide = `/${props.module}/${slideId === 1 ? 1 : slideId - 1}`;
  const nextSlide = `/${props.module}/${slideId + 1 > data.length ? slideId : slideId + 1}`;
  //I guess this state is used for sidebars and fieldbook
  const [contentDrawerOpen, setContentDrawerOpen] = useState(false);
  const [fieldBookDrawerOpen, setFieldBookDrawerOpen] = useState(false);
  //I guess these are used for opening it and stuff
  const handleContentDrawerToggle = (open) => {
    setContentDrawerOpen(open);
  };
  const handleFieldBookDrawerToggle = (open) => {
    setFieldBookDrawerOpen(open);
  };
  //IDK what this is
  const handleSlideChange = (slideId) => {};

  // ControlButtons component props
  const controlButtonProps = {
    hasPrev: slideId !== 1,
    hasNext: slideId < data.length,
    nextSlide: nextSlide,
    prevSlide: prevSlide,
  };
  // Uhh not 100% sure what this is but it's important haha :)
  const content = props.data[slideId - 1];

  return (
    <div className={classes.root}>
      <SlideContentDrawer
        slideData={props.data}
        contentDrawerOpen={contentDrawerOpen}
        handleSlideChange={handleSlideChange}
        handleContentDrawerToggle={handleContentDrawerToggle}
      />
      <GridContainer
        className={clsx(classes.container, classes.content, {
          [classes.contentShiftLeft]: contentDrawerOpen,
          [classes.contentShiftRight]: fieldBookDrawerOpen,
        })}
      >
        <ModuleSelector content={content} module={props.module} />
        <ControlButtons {...controlButtonProps} />
      </GridContainer>
      <FieldBookDrawer
        slideData={data}
        contentDrawerOpen={fieldBookDrawerOpen}
        handleSlideChange={handleSlideChange}
        handleContentDrawerToggle={handleFieldBookDrawerToggle}
      />
    </div>
  );
}
ModuleContainer.propTypes = {};

export default ModuleContainer;
