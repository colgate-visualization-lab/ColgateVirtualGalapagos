import React from "react";
import PropTypes from "prop-types";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const CorrectnessMarkerIcon = ({ treeCorrectnessMarker }) => {
  return (
    <div style={{ position: "absolute", top: "5%", right: "5%" }}>
      {treeCorrectnessMarker ? (
        <CheckCircleOutlineOutlinedIcon color="inherit" />
      ) : (
        <HighlightOffIcon color="inherit" />
      )}
    </div>
  );
};

CorrectnessMarkerIcon.propTypes = {
  treeCorrectnessMarker: PropTypes.bool.isRequired,
};

export default CorrectnessMarkerIcon;
