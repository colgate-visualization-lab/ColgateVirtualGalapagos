import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { useParams } from "react-router";
import { CSSTransition } from "react-transition-group";
import ControlButtons from "../ControlButtons/ControlButtons";
import SlideContentDrawer from "../SlideContentDrawer";
import FieldBookDrawer from "../FieldBookDrawer";
import ModuleSelector from "../ModuleSelector/ModuleSelector";
import { module } from "../../utils/const";
import { useHistory } from "react-router-dom";
import cssclasses from "./ModuleContainer.css";

//Needed for something lol
const contentDrawerWidth = 240;
const fieldBookDrawerWidth = 400;
const baseContentMargin = 48;

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 50,
    display: "flex",
    position: "relative",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
  },
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    minHeight: "500px",
    minWidth: "500px",
    maxWidth: "1280px",
  },
  // to accomodate drawer
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -contentDrawerWidth + baseContentMargin,
    marginRight: -fieldBookDrawerWidth + baseContentMargin,
  },
  slideContainer: {
    position: "relative",
    width: "100%",
    zIndex: 1,
    // height is 100% of parent container minus the total height of the
    //  PREV and NEXT buttons and audio player(plus a little space)
    height: ({ heightOffset }) =>
      `calc(100%  -  ${theme.typography.pxToRem(heightOffset)})`,
  },
  contentShiftLeft: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: baseContentMargin,
  },
  contentShiftRight: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: baseContentMargin,
  },
}));
// Grid Outer Container Component
const GridContainer = (props) => (
  <Grid {...props} container spacing={1} direction="row" justify="center" />
);
// Slide Content Container Component - holds slide-specific content
// the videos, images, 360s, and any other content
const SlideContainer = (props) => (
  <Grid
    item
    xs={12}
    container
    justify="center"
    alignItems="center"
    {...props}
  />
);

// Actual function being exported
function ModuleContainer(props) {
  const history = useHistory();

  let id = useParams(); //This is kind of the same thing as slideId, uhh but that wasn't working for me in useeffect so I used this
  // we get current slide id from and use that to find the next and prev slide ids
  const slideId = parseInt(props.match.params.slide_id || 1);

  const prevSlide = `/${props.module}/${slideId === 1 ? 1 : slideId - 1}`;
  const nextSlide = `/${props.module}/${
    slideId + 1 > props.data.length ? slideId : slideId + 1
  }`;

  // so content is the very virst {} in the data array. This is what connects the data with the URL.
  const content = props.data[slideId - 1];

  //State
  const [contentDrawerOpen, setContentDrawerOpen] = useState(false);
  const [fieldBookDrawerOpen, setFieldBookDrawerOpen] = useState(false);
  const [animationState, setAnimationState] = useState(false); //Used for CSSTransitions component
  //Styling? Also if we declare content after styleProps this doesn't work. Order matters kids.
  const styleProps = {
    heightOffset: "audioSrc" in content ? 150 : 60,
  };
  const classes = useStyles(styleProps);
  //I guess these are used for opening it and stuff
  const handleContentDrawerToggle = (open) => {
    setContentDrawerOpen(open);
  };
  const handleFieldBookDrawerToggle = (open) => {
    setFieldBookDrawerOpen(open);
  };
  //IDK what this is
  const handleSlideChange = (slideId) => {};
  //Functions passed to control buttons to handle slide change. Also passed to the module.
  const changeSlide = (x) => {
    setAnimationState(false);
    setTimeout(() => history.push(x), 500);
  };
  //Lifecycles
  useEffect(() => {
    setAnimationState(true); //Triggers fade in at the same time as changing the route.
  }, [id]);
  //Fires once, at mount.
  useEffect(() => {
    setTimeout(() => setAnimationState(true), 500);
    return () => {
      // cleaning up the listeners here, none right now
    };
  }, []);

  // ControlButtons component props
  const controlButtonProps = {
    hasPrev: content.hasPrev,
    hasNext: content.hasNext,
    nextSlide: `${content.hasOptional ? content.nextSlideId : nextSlide}`,
    prevSlide: `${content.followingOptional ? content.prevSlideId : prevSlide}`,
    changeSlide: changeSlide,
  };
  // Module Props
  const moduleProps = {
    nextSlide: nextSlide,
    prevSlide: prevSlide,
    slideId: slideId,
    content: content,
    module: props.module,
    changeSlide: changeSlide,
  };
  // SlideContentDrawer props
  const SlideContentDrawerProps = {
    slideData: props.data,
    contentDrawerOpen: contentDrawerOpen,
    handSlideChange: handleSlideChange,
    handleContentDrawerToggle: handleContentDrawerToggle,
    changeSlide: changeSlide,
  };

  return (
    <div className={classes.root}>
      <SlideContentDrawer {...SlideContentDrawerProps} />
      <GridContainer
        className={clsx(classes.container, classes.content, {
          [classes.contentShiftLeft]: contentDrawerOpen,
          [classes.contentShiftRight]: fieldBookDrawerOpen,
        })}
      >
        <SlideContainer className={classes.slideContainer}>
          <CSSTransition
            in={animationState}
            timeout={500}
            classNames={{
              enter: `${cssclasses.testenter}`,
              enterActive: `${cssclasses.testenteractive}`,
              exit: `${cssclasses.testexit}`,
              exitActive: `${cssclasses.testexitactive}`,
            }}
            unmountOnExit
          >
            <ModuleSelector {...moduleProps} />
          </CSSTransition>
          <ControlButtons {...controlButtonProps} />
        </SlideContainer>
      </GridContainer>
      <FieldBookDrawer
        moduleName={module.IGUANA}
        slideId={slideId}
        contentDrawerOpen={fieldBookDrawerOpen}
        handleSlideChange={handleSlideChange}
        handleContentDrawerToggle={handleFieldBookDrawerToggle}
      />
    </div>
  );
}
ModuleContainer.propTypes = {};

export default ModuleContainer;
