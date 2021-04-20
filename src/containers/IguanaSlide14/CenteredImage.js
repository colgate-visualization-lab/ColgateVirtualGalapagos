import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    // backgroundColor: "white",
    // justifyItems: "center",
  },
  img: {
    width: "100%",
    height: "auto",
  },
}));

const CenteredImage = ({ id, imgProps, containerProps }) => {
  const classes = useStyles();

  return (
    <div id={id} className={classes.imgContainer} {...containerProps}>
      <img className={classes.img} {...imgProps} />
    </div>
  );
};

CenteredImage.propTypes = {
  id: PropTypes.string.isRequired,
  imgProps: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }),
  containerProps: PropTypes.object,
};

CenteredImage.defaultProps = {
  containerProps: {},
};

export default CenteredImage;
