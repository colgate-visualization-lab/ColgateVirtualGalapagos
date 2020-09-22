import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Back, Next } from "../../assets/VolcanoModule";
import classes from "./MainContent.css";
import ControlButtons from "../ControlButtons/ControlButtons";
import InteractiveImageComponent from "./components/InteractiveImageComponent";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import { iguanaAssets } from "../../assets/IguanaModule";
import Iframe from "../../components/VolcanoeIframe/VolcanoeIframe";
// import Iframe from "react-iframe";

function MainContent(props) {
  const [slide, setSlide] = useState(6);
  const [audioIsPlaying, setAudioIsPlaying] = useState(true);
  const [audioIsDone, setAudioIsDone] = useState(false);

  const data = [
    {
      id: "0",
      title: "Iguana_Endemic01",
      type: "video",
      url:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/ShoreWaves.mp4", //360
    },
    {
      id: "1",
      title: "Iguana_Carried01",
      type: "image",
      url:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/SouthAmericaCoast.png",
    },
    {
      id: "2",
      title: "Iguana_Carried02",
      type: "image",
      url:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/SouthAmericaCoast.png", //temporary
    },
    {
      id: "3",
      title: "Iguana_Pumice01",
      type: "video",
      url:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/IguanaPath.mp4", //360
    },
    {
      id: "4",
      title: "Iguana_Pumice02",
      type: "image",
      url:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/SouthAmericaCoast.png", //nothing in storyboard
    },
    {
      id: "5",
      title: "Iguana_Comparison01",
      type: "video",
      url:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/ShoreWaves.mp4", //360
    },
    {
      id: "6",
      title: "Iguana_Comparison02",
      type: "360_comparison",
      url1:
        "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/Caldara_Endtrail/index.htm", //temporary
      url2:
        "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/Cactus_Final/index.htm",
      audioSrc: iguanaAssets.iguanaMysterySlide7,
    },
    {
      id: "7",
      title: "Iguana_Comparison03",
      type: "image_comparison",
      url1:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/LandIguanaSmiling01.png", //slider
      url2:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/MarineIguanaWithBabies.png",
      audioSrc: iguanaAssets.iguanaMysterySlide8,
    },
    {
      id: "8",
      title: "Iguana_Comparison04",
      type: "image",
      url:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/LandIguanaOnRocks.png", //slider
    },
    {
      id: "9",
      title: "Iguana_PhyloTree01",
      type: "video",
      url:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/ShoreWaves.mp4", //360
    },
    {
      id: "10",
      title: "Iguana_PhyloTree02",
      type: "video",
      url:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/ShoreWaves.mp4", //whiteboard
    },
    //need to build,
    {
      id: "14",
      title: "Iguana_Evolution03",
      type: "interactive_image",
      url:
        "https://keep.google.com/u/1/media/v2/1Qap6axeshCXiPdl0r3vhK1-K54n1_aIV_SuJiYxsbvbDNX1835Xp9qVnw7ftrA/15VVpQTnL-CD1LG4nNx4U3BHvTdJmLjfICf5GDWtoU4SucWfcTaLFmYqDv8x1BA?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=1600",
      audioSrc: {},
    },
  ];

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
          bottom="20%"
          left="20%"
          right="20%"
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
          bottom="20%"
          left="20%"
          right="20%"
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
        <AudioPlayer
          src={content.audioSrc}
          onEnded={() => {
            setAudioIsDone(true);
          }}
          stopAudio={() => {
            setAudioIsPlaying(false);
          }}
          toggleAudio={() => {
            setAudioIsPlaying(!audioIsPlaying);
          }}
          playing={audioIsPlaying}
        />
        {/* <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}> */}
        {/* <ImageSlider image1={content.url1} image2={content.url2} /> */}
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={content.url1}
              alt="adult marine iguana with baby"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={content.url2}
              alt="smiling land iguana"
            />
          }
          // style={{ width: "100%", flexGrow: 1 }}
        />
        {/* </div> */}
        <ControlButtons
          bottom="5%"
          left="5%"
          right="5%"
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </div>
    );
  } else if (content.type === "360_comparison") {
    return (
      <Fragment>
        <AudioPlayer
          src={content.audioSrc}
          onEnded={() => {
            setAudioIsDone(false);
            setAudioIsPlaying(false);
          }}
          stopAudio={() => setAudioIsPlaying(false)}
          toggleAudio={() => setAudioIsPlaying(!audioIsPlaying)}
          playing={audioIsPlaying}
        />
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
          bottom="5%"
          left="5%"
          right="5%"
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </Fragment>
    );
  }
}

MainContent.propTypes = {};

export default MainContent;
