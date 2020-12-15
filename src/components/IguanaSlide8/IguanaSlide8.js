import React from "react";
import PropTypes from "prop-types";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Popup from "../../components/Popup/Popup";

const IguanaSlide8 = ({ content }) => {
  return (
    <div>
      <ReactCompareSlider
        onlyHandleDraggable={true}
        itemOne={
          <div
            id="itemOne"
            style={{ alignSelf: "center", height: "90vh", width: "100%" }}
          >
            <ReactCompareSliderImage
              src={content.url1}
              alt="adult marine iguana with baby"
            />
            <Popup
              description={content.popupText.landIguanaHead}
              top="20%"
              left="50%"
            />
            <Popup
              description={content.popupText.landIguanaBody}
              top="20%"
              left="74%"
            />
          </div>
        }
        itemTwo={
          <div
            id="itemOne"
            style={{ alignSelf: "center", height: "90vh", width: "100%" }}
          >
            <ReactCompareSliderImage
              src={content.url2}
              alt="smiling land iguana"
            />
            <Popup
              description={content.popupText.marineIguanaBody}
              top="25%"
              left="13%"
            />
            <Popup
              description={content.popupText.marineIguanaTail}
              top="35%"
              left="40%"
            />
          </div>
        }
      />
    </div>
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
    popupText: PropTypes.shape({
      landIguanaHead: PropTypes.string.isRequired,
      landIguanaBody: PropTypes.string.isRequired,
      marineIguanaBody: PropTypes.string.isRequired,
      marineIguanaTail: PropTypes.string.isRequired,
    }),
  }),
};

export default IguanaSlide8;
