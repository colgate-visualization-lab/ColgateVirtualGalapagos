import React, { useState, useEffect } from "react";
import Iframe from "react-iframe";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";

import data from "../../assets/IguanaData/IguanaData.js";
import volcanodata from "../../../assets/VolcanoData/VolcanoData.js";
// import AudioPlayerHandler from "../../../components/AudioPlayer/AudioPlayerHandler";
import ControlButtons from "../../../containers/ControlButtons/ControlButtons";
import SlideContentDrawer from "../../../containers/SlideContentDrawer";
import FieldBookDrawer from "../../../containers/FieldBookDrawer";
import ModuleSelector from "../ModuleSelector/ModuleSelector";
import AudioPlayer from "../../../components/AudioPlayer";
import {
  getModuleData,
  getSlideData,
  selectSlide,
  selectStatus,
} from "../../../slices/modulesSlice";

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
  const dispatch = useDispatch();
  let moduleData = useSelector(selectSlide);
  let status = useSelector(selectStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getModuleData("iguana"));
    }
    if (status === "moduleDataLoaded") {
      dispatch(getSlideData(slideId));
    }
  });

  // we get current slide id from and use that to find the next and prev slide ids
  const slideId = parseInt(props.match.params.slide_id || 1);
  const prevSlide = `/${props.module}/${slideId === 1 ? 1 : slideId - 1}`;
  const nextSlide = `/${props.module}/${
    slideId + 1 > data.length ? slideId : slideId + 1
  }`;
  //I guess this state is used for sidebars and fieldbook
  const [contentDrawerOpen, setContentDrawerOpen] = useState(false);
  const [fieldBookDrawerOpen, setFieldBookDrawerOpen] = useState(false);
  // Uhh not 100% sure what this is but it's important haha :)
  const content = props.data[slideId - 1];
  //Styling? Also if we declare content after styleProps this doesn't work. Order matters kids.
  const styleProps = {
    heightOffset: "audioSrc" in content ? 150 : 60,
  };
  const classes = useStyles(styleProps);
  // // const prevSlide = `/iguana/${slideId === 1 ? 1 : slideId - 1}`;
  // // const nextSlide = `/iguana/${
  // //   slideId + 1 > data.length ? slideId : slideId + 1
  // // }`;

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
        <SlideContainer className={classes.slideContainer}>
          <ModuleSelector
            content={content}
            module={props.module}
            slideId={slideId}
          />
          <ControlButtons {...controlButtonProps} />
        </SlideContainer>
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

// useEffect(() => {
//   if (status === "idle") {
//     dispatch(getModuleData("iguana"));
//   }
//   if (status === "moduleDataLoaded") {
//     dispatch(getSlideData(slideId));
//   }
// });

// const content = data[slideId - 1];
// const styleProps = {
//   heightOffset: "audioSrc" in content ? 150 : 60,
// };
// const classes = useStyles(styleProps);
// const prevSlide = `/iguana/${slideId === 1 ? 1 : slideId - 1}`;
// const nextSlide = `/iguana/${
//   slideId + 1 > data.length ? slideId : slideId + 1
// }`;
//   const [contentDrawerOpen, setContentDrawerOpen] = useState(false);
//   const [fieldBookDrawerOpen, setFieldBookDrawerOpen] = useState(false);

//   const handleContentDrawerToggle = (open) => {
//     setContentDrawerOpen(open);
//   };
//   const handleFieldBookDrawerToggle = (open) => {
//     setFieldBookDrawerOpen(open);
//   };

//   const handleSlideChange = (slideId) => {};

//   // ControlButtons component
//   const controlButtonProps = {
//     hasPrev: slideId !== 1,
//     hasNext: slideId < data.length,
//     nextSlide: nextSlide,
//     prevSlide: prevSlide,
//   };
//   return (
//     <div className={classes.root}>
//       <SlideContentDrawer
//         slideData={data}
//         contentDrawerOpen={contentDrawerOpen}
//         handleSlideChange={handleSlideChange}
//         handleContentDrawerToggle={handleContentDrawerToggle}
//       />
//       <GridContainer
//         className={clsx(classes.container, classes.content, {
//           [classes.contentShiftLeft]: contentDrawerOpen,
//           [classes.contentShiftRight]: fieldBookDrawerOpen,
//         })}
//       >
//         <SlideContainer className={classes.slideContainer}>
//           <MainContent content={content} />
//           <ControlButtons {...controlButtonProps} />
//         </SlideContainer>
//       </GridContainer>
//       <FieldBookDrawer
//         slideData={data}
//         contentDrawerOpen={fieldBookDrawerOpen}
//         handleSlideChange={handleSlideChange}
//         handleContentDrawerToggle={handleFieldBookDrawerToggle}
//       />
//     </div>
//   );
// }
// ModuleContainer.propTypes = {};

// export default ModuleContainer;
