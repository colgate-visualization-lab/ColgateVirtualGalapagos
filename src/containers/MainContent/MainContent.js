import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./MainContent.css";
import ControlButtons from "../ControlButtons/ControlButtons";
import InteractiveImageComponent from "./components/InteractiveImageComponent";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { iguanaAssets } from "../../assets/IguanaModule";
import Iframe from "../../components/VolcanoeIframe/VolcanoeIframe";
import data from "../../components/IguanaData/IguanaData.js";
import AudioPlayerHandler from "../../components/AudioPlayer/AudioPlayerHandler";
import VideoSelector from "../../components/Slide3InteractiveVideo/VideoSelector";
import Popup from "../../components/Popup/Popup";
// import Iframe from "react-iframe";

function MainContent(props) {
  const [slide, setSlide] = useState(11);
  // const [audioIsPlaying, setAudioIsPlaying] = useState(true);
  // const [audioIsDone, setAudioIsDone] = useState(false);

  const nextSlide = () => {
    setSlide(slide + 1);
  };

  const prevSlide = () => {
    if (slide != 0) {
      setSlide(slide - 1);
    } else return null;
  };

  const content = data[slide];
  if (content.type === "image") {
    return (
      <div>
        <img src={content.url} className={`iguana ${classes.img}`} />
        <ControlButtons
          width="150px"
          bottom="5%"
          left="0%"
          right="0%"
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </div>
    );
  } else if (content.type === "video") {
    return (
      <div>
        <video src={content.url} className={classes.vid} controls />
        <ControlButtons
          width="120px"
          bottom="5%"
          left="0%"
          right="0%"
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </div>
    );
  } else if (content.type === "interactive_image") {
    return (
      <>
        <InteractiveImageComponent
          classes={classes}
          content={content}
          iguanaAssets={iguanaAssets}
        />
        <ControlButtons
          width="200px"
          bottom="5%"
          left="5%"
          right="5%"
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </>
    );
  } else if (content.type === "image_comparison") {
    return (
      <div
        style={{
          width: "80%",
          height: "100%",
          margin: "0 auto",
        }}
      >
        <AudioPlayerHandler src={content.audioSrc} />
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
        <ControlButtons
          width="150px"
          bottom="5%"
          left="0%"
          right="0%"
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </div>
    );
  } else if (content.type === "360_comparison") {
    return (
      <Fragment>
        <AudioPlayerHandler src={content.audioSrc} />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "50%",
            left: "0",
          }}
        >
          <Iframe src={content.url1} />
          {/* <h1
            style={{
              position: "absolute",
              left: "4%",
              bottom: "2%",
              width: "10%",
              textAlign: "center",
              fontSize: "16px",
            }}
          ></h1> */}
        </div>
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "50%",
            right: "0",
          }}
        >
          <Iframe src={content.url1} />
        </div>
        <ControlButtons
          width="120px"
          bottom="5%"
          left="0%"
          right="0%"
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </Fragment>
    );
  } else if (content.type === "slide3InteractiveVideo") {
    return (
      <>
        {/* <AudioPlayerHandler src={content.audioSrc} /> */}
        <VideoSelector content={content}/>
        <ControlButtons
          width="120px"
          bottom="5%"
          left="0%"
          right="0%"
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </>
    );
  }
}

MainContent.propTypes = {};

export default MainContent;
