import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { makeStyles } from "@material-ui/styles";

import Popup from "../Popup/Popup";

const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    width: "100%",
    // height is 100% of parent container minus the total height of the PREV and NEXT buttons (plus a little space)
    height: `calc(100%  -  ${theme.typography.pxToRem(40)})`,
  },
  sliderImage: {
    maxWidth: "100%",
    // height: "100%",
  },
}));

const IguanaSlide8Side = ({ url, popupText }) => {
  const classes = useStyles();

  return (
    <div className={classes.sliderContainer}>
      <img src={url} className={classes.sliderImage} />
      <Popup description={popupText.landIguanaHead} top="20%" left="50%" />
      <Popup description={popupText.landIguanaBody} top="20%" left="74%" />
    </div>
  );
};

export default IguanaSlide8Side;
