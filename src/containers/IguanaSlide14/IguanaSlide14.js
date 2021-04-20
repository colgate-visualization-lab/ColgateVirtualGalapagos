import React from "react";
import { makeStyles } from "@material-ui/core";
import { ReactCompareSlider } from "react-compare-slider";

import MappedImage from "./MappedImage";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    border: "3px solid lightgrey",
  },
}));

const IguanaSlide14 = ({ content }) => {
  const marine = {
    alt: "Marine Iguana",
    src: content.imgSrc.src2,
    width: 4029,
    height: 1716,
  };
  const green = {
    alt: "Green Iguana",
    src: content.imgSrc.src1,
    width: 4178,
    height: 1627,
  };

  const containerStyle = {
    backgroundColor: "white",
  };

  const classes = useStyles();
  return (
    <ReactCompareSlider
      onlyHandleDraggable={true}
      itemOne={
        <MappedImage
          img={green}
          map={content.data.greenIguanaMap}
          containerStyle={containerStyle}
        />
      }
      itemTwo={
        <MappedImage
          img={marine}
          map={content.data.marineIguanaMap}
          containerStyle={containerStyle}
        />
      }
      className={classes.root}
    />
  );
};

export default IguanaSlide14;
