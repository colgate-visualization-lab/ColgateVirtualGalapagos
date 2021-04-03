import React, { Fragment, useState, useEffect } from "react";
// import classes from "./Homepage.css";
import ImageMapper from "react-image-mapper";
import imageMap from "./imageMap";
import { Redirect } from "react-router";
import { MapPinzon } from "../../assets/Homepage";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mapheader: {
    position: "absolute",
    textAlign: "center",
    height: "100px",
    margin: "auto",
    top: "10px",
    right: "0px",
    left: "0px",
    zIndex: 1,
    overflow: "hidden",
    textShadow: "2px 2px 8px #000000",
  },
  ".containerFix div": {
    position: "absolute",
    width: "100%",
    height: "100%",
    margin: "auto",
    opacity: 0.9,
  },
  videoSubstitute: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  "@media only screen and (min-width: 992px)": {
    videoSubstitute: {
      display: "none",
    },
  },
}));

const HomePage2 = ({ mapImage, lockValue }) => {
  const classes = useStyles();
  const [msg, setMsg] = useState(
    "Click on the highlighted island to travel to the next module!"
  );
  const [route, setRoute] = useState(false);
  const [link, setLink] = useState("");
  const [width, setWidth] = useState(0);

  // same function as componentDidMount and componentWillUnmount
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  });

  // update width of image map
  const updateDimensions = () => {
    let windowWidth = window.innerWidth;
    if (windowWidth > 1500) {
      setWidth(windowWidth - 500);
    } else if (windowWidth > 1300) {
      setWidth(windowWidth - 400);
    } else if (windowWidth > 1100) {
      setWidth(windowWidth - 300);
    } else {
      setWidth(windowWidth - 50);
    }
    if (window.innerHeight < 515 && windowWidth > 1000) {
      setWidth(windowWidth - 500);
    } else if (window.innerHeight < 515) {
      setWidth(windowWidth - 300);
    }
  };

  // image map states and handlers
  const enterArea = (area) => {
    let unlock = `${area._id}`;
    let lockValue = lockValue;

    if (unlock <= lockValue) {
      setMsg(area.name);
      setLink(area.link);
    } else {
      setMsg("Currently Locked");
    }
  };

  const leaveArea = () => {
    setMsg("Click on the highlighted island to travel to the next module!");
  };

  const enterModule = (area) => {
    let unlock = `${area._id}`;
    let lockValue = lockValue;
    if (unlock <= lockValue) {
      setRoute(true);
    }
  };

  const animation = "animated slideInRight";

  return route ? (
    <Redirect to={link} />
  ) : (
    <Fragment>
      <img src={MapPinzon} className={classes.videoSubstitute} alt="" />
      <div className={`${animation} ${classes.containerFix}`}>
        <ImageMapper
          src={mapImage}
          width={width}
          imgWidth={1920}
          map={imageMap}
          fillColor={"rgba(0, 246, 255, 0.33)"}
          onMouseEnter={(area) => enterArea(area)}
          onMouseLeave={() => leaveArea()}
          onClick={(area) => enterModule(area)}
        />
      </div>
      <h1 className={classes.mapheader} style={{ width: `${width}px` }}>
        {msg}
      </h1>
    </Fragment>
  );
};

export default HomePage2;
