import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Back, Next } from "../../assets/VolcanoModule";
import classes from "./MainContent.css";
import ControlButtons from "../ControlButtons/ControlButtons";
import InteractiveImageComponent from "./components/InteractiveImageComponent";

function MainContent(props) {
  const [slide, setSlide] = useState(11);

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
      type: "video",
      url:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/IguanaPath.mp4", //temporary
    },
    {
      id: "7",
      title: "Iguana_Comparison03",
      type: "image",
      url:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/LandIguanaSmiling01.png", //slider
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
    //need to build
    {
      id: "15",
      title: "Iguana_Comparison05",
      type: "interactive_image",
      url:
        "https://keep.google.com/u/1/media/v2/1Qap6axeshCXiPdl0r3vhK1-K54n1_aIV_SuJiYxsbvbDNX1835Xp9qVnw7ftrA/15VVpQTnL-CD1LG4nNx4U3BHvTdJmLjfICf5GDWtoU4SucWfcTaLFmYqDv8x1BA?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=1600",
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
  if (content.type == "image") {
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
  } else if (content.type == "video") {
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
  } else if (content.type == "interactive_image") {
    return (
      <>
        <InteractiveImageComponent classes={classes} content={content} />
        <ControlButtons
          bottom="5%"
          left="5%"
          right="5%"
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </>
    );
  }
}

MainContent.propTypes = {};

export default MainContent;
