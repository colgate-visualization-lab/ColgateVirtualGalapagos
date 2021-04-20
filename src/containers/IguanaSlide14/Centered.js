import React from "react";
import PropTypes from "prop-types";

const Centered = ({ children, containerStyle }) => {
  return (
    <div
      style={{
        zIndex: 0,
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
    >
      {children}
    </div>
  );
};

Centered.propTypes = {
  containerStyle: PropTypes.object,
};

export default Centered;
