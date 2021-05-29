import React from "react";
import ImageMapper from "react-image-mapper";
import PropTypes from "prop-types";
import Centered from "./Centered";

const MappedImage = ({ img, map, containerStyle, handleClick }) => {
  return (
    <Centered containerStyle={containerStyle}>
      <ImageMapper
        fillColor="rgb(200,0,0,0.2)"
        onClick={handleClick}
        imgWidth={img.width}
        width={1000}
        src={img.src}
        map={map}
      />
    </Centered>
  );
};

MappedImage.propTypes = {
  img: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
  }).isRequired,
  map: PropTypes.shape({
    name: PropTypes.string.isRequired,
    areas: PropTypes.array.isRequired,
  }),
  containerStyle: PropTypes.object,
};

export default MappedImage;
