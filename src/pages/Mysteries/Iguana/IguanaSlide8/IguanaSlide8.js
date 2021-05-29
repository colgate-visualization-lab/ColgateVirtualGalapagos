import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { makeStyles } from "@material-ui/styles";

import Popup from "components/Popup/Popup";

const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    width: "100%",
    // height is 100% of parent container minus the total height of the PREV and NEXT buttons (plus a little space)
    height: `calc(100%  -  ${theme.typography.pxToRem(40)})`,
  },
  sliderImage: {
    width: "100%",
    height: "100%",
  },
}));

const IguanaSlide8 = ({ content }) => {
  const classes = useStyles();

  return (
    <>
      <ReactCompareSlider
        id="parent"
        className={classes.sliderContainer}
        onlyHandleDraggable={true}
        itemOne={
          <div id="itemOne" className={classes.sliderImage}>
            <ReactCompareSliderImage
              src={content.url1}
              alt="adult marine iguana with baby"
            />
            <Popup
              description={content.landIguanaText.landIguanaHead}
              top="20%"
              left="50%"
            />
            <Popup
              description={content.landIguanaText.landIguanaBody}
              top="20%"
              left="74%"
            />
          </div>
        }
        itemTwo={
          <div id="itemTwo" className={classes.sliderImage}>
            <ReactCompareSliderImage
              src={content.url2}
              alt="smiling land iguana"
            />
            <Popup
              description={content.marineIguanaText.marineIguanaBody}
              top="25%"
              left="13%"
            />
            <Popup
              description={content.marineIguanaText.marineIguanaTail}
              top="35%"
              left="40%"
            />
          </div>
        }
      />
    </>
  );
};

IguanaSlide8.propTypes = {
  // content: PropTypes.object.isRequired,
  content: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    url1: PropTypes.string.isRequired,
    url2: PropTypes.string.isRequired,
    audioSrc: PropTypes.string.isRequired,
    // popupText: PropTypes.shape({
    //   landIguanaHead: PropTypes.string.isRequired,
    //   landIguanaBody: PropTypes.string.isRequired,
    //   marineIguanaBody: PropTypes.string.isRequired,
    //   marineIguanaTail: PropTypes.string.isRequired,
    // }),
  }),
};

export default IguanaSlide8;
