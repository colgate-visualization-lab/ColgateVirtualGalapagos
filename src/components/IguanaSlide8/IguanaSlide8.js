import React from "react";
import PropTypes from "prop-types";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Popup from "../../components/Popup/Popup";

const IguanaSlide8 = ({ content }) => {
  return (
    <div style={{ alignSelf: "center" }}>
      <ReactCompareSlider
        onlyHandleDraggable={true}
        itemOne={
          <div>
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
          <div>
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

IguanaSlide8.propTypes = {};

export default IguanaSlide8;
