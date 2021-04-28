import React, { useEffect, useState } from "react";
import ImageMapper from "react-image-mapper";
import PropTypes from "prop-types";

import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import AudioPlayerHandler from "../../components/AudioPlayer/AudioPlayerHandler";

const IguanaSlide15 = ({ content }) => {
  const [audioSrc, setAudioSrc] = useState(content.audioSrc);
  const [audioIsPlaying, setAudioIsPlaying] = useState(true);
  const [audioIsDone, setAudioIsDone] = useState(false);

  // resets audioIsPlaying when user selects different iguana part
  useEffect(() => {
    console.log(content);
    setAudioIsPlaying(true);
  }, [audioSrc]);

  // We need to get the current window size in order to scale the image map

  // we initialize initial width of the image - we want to scale it using the
  //  window height though - hence the calculation
  let initialWidth = 1600 / (1219 / (window.innerHeight - 200));

  // We define a state object for width of the window
  const [width, setWidth] = useState(initialWidth);

  // Next, we use the useEffect hook to add event listeners to that will call resize image
  //   when the height changes
  useEffect(() => {
    window.addEventListener("resize", resizeImage);
    return () => {
      window.removeEventListener("resize", resizeImage);
    };
  }, [window.innerHeight]);

  // callback function to set new width, hence resizing the image.
  const resizeImage = () => {
    let ratio = 1219 / (window.innerHeight - 200);
    setWidth(1600 / ratio);
  };
  console.log(content.data);
  return (
    <>
      {/* <AudioPlayerHandler src={audioSrc} playing={audioIsPlaying}/> */}
      {/* <AudioPlayer
        src={audioSrc}
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
      /> */}
      <ImageMapper
        width={width}
        imgWidth={1600}
        src={content.url}
        map={content.data}
        onClick={(a) => {
          console.log(a);
          setAudioSrc(a.audioSrc);
          setAudioIsPlaying(true);
        }}
        lineWidth={4}
        strokeColor="rgba(255, 255, 255, 0.5)"
      />
    </>
  );
};

IguanaSlide15.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string.isRequired,
    audioSrc: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default IguanaSlide15;
