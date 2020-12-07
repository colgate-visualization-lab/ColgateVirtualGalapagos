import React, { useEffect } from "react";
import PropTypes from "prop-types";

import classes from "./IguanaSlide3.css";

const Slide3VideoSelector = ({
  data,
  onSrcChange,
  watched,
  videoInteractionDisabled,
}) => {
  useEffect(() => {
    console.log(data[0].cardTitle);
  });

  return (
    <div className={classes.videoSelector}>
      {videoInteractionDisabled && (
        <p className={classes.title}>Choose a Hypothesis to Test</p>
      )}

      <div className={classes.videoSelectorButtonGroup}>
        {data.map((datum) => (
          <div key={datum.id}>
            <button
              className={`${classes.videoSelectorButton} ${classes.button} `}
              onClick={() => {
                onSrcChange(datum);
                console.log(datum.cardTitle);
              }}
              type="button"
            >
              {datum.cardTitle}
            </button>

            {videoInteractionDisabled && watched.has(datum.id) && (
              <div className={classes.watchedDiv}>
                <p className={classes.watchedIndicator}>Watched</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

Slide3VideoSelector.propTypes = {
  data: PropTypes.array.isRequired,
  onSrcChange: PropTypes.func.isRequired,
};

export default Slide3VideoSelector;
