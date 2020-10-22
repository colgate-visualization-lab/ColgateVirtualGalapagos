import React, { useState, Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import classes from "./MainContent.css";
import ControlButtons from "../ControlButtons/ControlButtons";
import IguanaSlide15 from "../IguanaSlide15/IguanaSlide15";

import Iframe from "../../components/VolcanoeIframe/VolcanoeIframe";
import data from "../../components/IguanaData/IguanaData.js";
import AudioPlayerHandler from "../../components/AudioPlayer/AudioPlayerHandler";
import IguanaSlide3 from "../IguanaSlide3/IguanaSlide3";
import IguanaSlide8 from "../../components/IguanaSlide8/IguanaSlide8";
// import Iframe from "react-iframe";

function MainContent(props) {
  // const [audioIsPlaying, setAudioIsPlaying] = useState(true);
  // const [audioIsDone, setAudioIsDone] = useState(false);

  useEffect(() => console.log(content));

  // we get current slide id from and use that to find the next and prev slide ids
  const slideId = parseInt(props.match.params.slide_id || 1);
  const prevSlide = `/iguana/${slideId === 1 ? 1 : slideId - 1}`;
  const nextSlide = `/iguana/${
    slideId + 1 > data.length ? slideId : slideId + 1
  }`;

  const content = data[slideId - 1];

  if (content.type === "image") {
    return (
      <div>
        <img src={content.url} className={`iguana ${classes.img}`} />
        <ControlButtons
          width="120px"
          bottom="5%"
          left="0%"
          right="0%"
          hasPrev={slideId !== 1}
          hasNext={slideId < data.length}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </div>
    );
  } else if (content.type === "video") {
    return (
      <div>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/sacvf3WD7Dk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

        {content.youtube ? (
          <iframe className={classes.vid} src={content.url}></iframe>
        ) : (
          <video src={content.url} className={classes.vid} controls />
        )}
        <ControlButtons
          width="120px"
          bottom="5%"
          left="0%"
          right="0%"
          hasPrev={slideId !== 1}
          hasNext={slideId < data.length}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </div>
    );
  } else if (content.type === "interactive_image") {
    return (
      <>
        <IguanaSlide15 classes={classes} content={content} />
        <ControlButtons
          width="120px"
          bottom="5%"
          left="0%"
          right="0%"
          hasPrev={slideId !== 1}
          hasNext={slideId < data.length}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </>
    );
  } else if (content.type === "image_comparison") {
    return (
      <div
        style={{
          width: "90%",
          height: "90%",
          margin: "0 auto",
          display: "flex",
        }}
      >
        <AudioPlayerHandler src={content.audioSrc} />
        <IguanaSlide8 content={content} />
        <ControlButtons
          width="120px"
          bottom="5%"
          left="0%"
          right="0%"
          hasPrev={slideId !== 1}
          hasNext={slideId < data.length}
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
          hasPrev={slideId !== 1}
          hasNext={slideId < data.length}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </Fragment>
    );
  } else if (content.type === "slide3InteractiveVideo") {
    return (
      <>
        {/* <AudioPlayerHandler src={content.audioSrc} /> */}
        <IguanaSlide3 content={content} />
        <ControlButtons
          width="120px"
          bottom="5%"
          left="0%"
          right="0%"
          hasPrev={slideId !== 1}
          hasNext={slideId < data.length}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </>
    );
  } else {
    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "80vh",
          }}
        >
          <h1>THIS SLIDE HASN'T BEEN CREATED YET</h1>
        </div>
        <ControlButtons
          width="120px"
          bottom="5%"
          left="0%"
          right="0%"
          hasPrev={slideId !== 1}
          hasNext={slideId < data.length}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </>
    );
  }
}

MainContent.propTypes = {};

export default MainContent;
