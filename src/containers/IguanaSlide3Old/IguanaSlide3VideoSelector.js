import React, { useEffect } from "react";
import PropTypes from "prop-types";

import classes from "./IguanaSlide3.css";

const Slide3VideoSelector = (props) => {
  // prettier-ignore
  const { data, onSrcChange, watched, videoInteractionDisabled, imgSrc, imgClass } = props;

  const buttonSizeClass = videoInteractionDisabled
    ? classes.buttonSizeOnEnd
    : classes.buttonSizeOnPlay;

  return (
    <div className={classes.videoSelector}>
      {videoInteractionDisabled && (
        <p className={classes.title}>Choose a Hypothesis to Test</p>
      )}

      <div className={classes.videoSelectorButtonGroup}>
        {data.map((datum) => (
          <div key={datum.id}>
            <button
              className={`${classes.buttonShared} ${buttonSizeClass} `}
              onClick={() => {
                onSrcChange(datum);
              }}
              type="button"
            >
              {datum.description}
            </button>

            {videoInteractionDisabled && watched.has(datum.id) && (
              <div className={classes.watchedDiv}>
                <p className={classes.watchedIndicator}>Watched</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* <img src={imgSrc} className={imgClass} /> */}
    </div>
  );
};

Slide3VideoSelector.propTypes = {
  data: PropTypes.array.isRequired,
  onSrcChange: PropTypes.func.isRequired,
};

export default Slide3VideoSelector;
