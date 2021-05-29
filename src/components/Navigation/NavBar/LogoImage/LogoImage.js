import React from "react";
import { logo } from "../../../../assets/Misc";
import PropTypes from "prop-types";

const LogoImage = (props) => (
  <img src={logo} alt="Logo Image" className={props.className} />
);

LogoImage.propTypes = {
  className: PropTypes.string.isRequired,
};

export default LogoImage;
