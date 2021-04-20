import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import CenteredImage from "./CenteredImage";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    border: "3px solid lightgrey",
  },
  imgContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    // backgroundColor: "white",
    // justifyItems: "center",
  },
  img: {
    width: "100%",
    height: "auto",
  },
}));

const IguanaSlide14 = ({ content }) => {
  const marine = {
    alt: "Marine Iguana",
    src: content.imgSrc.src2,
  };
  const green = {
    alt: "Green Iguana",
    src: content.imgSrc.src1,
  };

  const containerProps = {
    style: {
      backgroundColor: "white",
    },
  };

  const classes = useStyles();
  return (
    <ReactCompareSlider
      onlyHandleDraggable={true}
      itemOne={
        <CenteredImage
          id="Marine Iguana"
          imgProps={marine}
          containerProps={containerProps}
        />
      }
      itemTwo={
        <CenteredImage
          id="Green Iguana"
          imgProps={green}
          containerProps={containerProps}
        />
      }
      className={classes.root}
    />
  );
};

export default IguanaSlide14;
