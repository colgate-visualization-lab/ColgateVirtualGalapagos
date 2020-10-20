import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

import Slide3Selector from "./Slide3Selector";
import Slide3VideoSelector from "./Slide3VideoSelector";
import AudioPlayerHandler from "../AudioPlayer/AudioPlayerHandler";

import classes from "./Slide3.css";

export const data = [
  {
    id: "birdHypothesis",
    videoSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/ShoreWaves.mp4",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Compare360.mp3",
    cardTitle: "Bird Carrying Iguana",
    cardThumbnail:
      "https://pmdvod.nationalgeographic.com/NG_Video/993/419/66827_1_1280x720_1024x576_177585731924.jpg",
  },
  {
    id: "pumiceHypothesis",
    videoSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/VolcanoModuleIntro.mp4",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration01.mp3",
    cardTitle: "Pumice Carrying Iguana",
    cardThumbnail:
      "https://c7.alamy.com/comp/F1MGEB/closeup-of-a-land-iguana-sitting-on-lava-gravel-and-pumice-F1MGEB.jpg",
  },
  {
    id: "vegetationRaftHypothesis",
    videoSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/VolcanoPlateTectonics.mp4",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration01.mp3",
    cardTitle: "Vegetation Raft Carrying Iguana",
    cardThumbnail:
      "https://onlinelibrary.wiley.com/cms/asset/143fe60a-0897-43e3-a402-0dbf884379d9/ece35414-fig-0001-m.jpg",
  },
  {
    id: "driftwoodHypothesis",
    videoSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/IguanaPath.mp4",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration03.mp3",
    cardTitle: "Driftwood Carrying Iguana",
    cardThumbnail:
      "https://www.santacruzgalapagoscruise.com/wp-content/uploads/2017/12/christmas-iguana-resting.jpg",
  },
  {
    id: "shipHypothesis",
    videoSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/IguanaRocks.mp4",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Fernandina01.mp3",
    cardTitle: "Ship Carrying Iguana",
    cardThumbnail:
      "https://www.galapagos.org/wp-content/uploads/2012/01/LandIguana.NorineAudette.2007.jpg",
  },
];

export default function VideoSelector(props) {
  const vidSrc = {
    id: "vegetationRaftHypothesis",
    videoSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/VolcanoPlateTectonics.mp4",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration01.mp3",
    cardTitle: "Vegetation Raft Carrying Iguana",
    cardThumbnail:
      "https://onlinelibrary.wiley.com/cms/asset/143fe60a…97-43e3-a402-0dbf884379d9/ece35414-fig-0001-m.jpg",
  };
  const [src, setSrc] = useState(vidSrc);
  // const [audioIsPlaying, setAudioIsPlaying] = useState(true);

  // videoSelectionOverlay - displays hypothesis, greys out and disables the video
  const [videoSelectionOverlayVisible, setVideoSelectionOverlayVisible] = useState({});
  const [showPlayer, setShowPlayer] = useState(true);

  const handleSrcChange = (src) => {
    setSrc(src);
    setShowPlayer(false);
  };

  const handlePlaybackEnded = () => {
    setVideoSelectionOverlayVisible(true);
  };

  const handlePlaybackStarted = () => {
    setVideoSelectionOverlayVisible(false);
  };

  // this determines whether the video selection buttons
  //  are visible
  const [videoSelectorVisible, setVideoSelectorVisible] = useState(classes.videoSelectorVisible);
  
  useEffect(()=>{
    const mouseMoveTimer=setTimeout(()=>{
      setVideoSelectorVisible(classes.videoSelectorHidden)
    }, 3000);
    return () => clearTimeout(mouseMoveTimer);
  })

  return (
    <>
      {/* { showPlayer &&
      <AudioPlayerHandler  src={props.content.audioSrc} />
    } */}
      <div className={classes.slide3Style} 
      onMouseMove={()=> {
        console.log("fired")
        setVideoSelectorVisible(classes.videoSelectorVisible);
      }}
      >
        <ReactPlayer
          position="relative"
          width="100%"
          height="100%"
          controls={videoSelectionOverlayVisible ? false : true}
          url={src.videoSrc}
          playing={true}
          onEnded={handlePlaybackEnded}
          onPlay={handlePlaybackStarted}
        />
        <div
          className={
            videoSelectionOverlayVisible
              ? classes.videoOverlayActive
              : classes.videoOverlayInactive
          }
        />
        <div
          className={
            videoSelectionOverlayVisible
              ? classes.videoSelectorOverlay
              : videoSelectorVisible
          }
        >
          <Slide3VideoSelector  data={data} onSrcChange={handleSrcChange}/>
        </div>
        
        {/* {src != null ? (
          <>
          <ReactPlayer width="auto" height="100%"
            controls={selectionVisible? false: true} url={src.videoSrc} playing={true}
            onEnded={handlePlaybackEnded}
            onStart={handlePlaybackStarted}
            onPlay={handlePlaybackStarted}
          />
          {selectionVisible &&
          <div
          style={{
            width: "90%", height: "90%", position: "absolute", display: "flex",
            alignItems: "center", zIndex: 9, backgroundColor: "rgba(0,0,0,0.65)",
          }}
        >
          <VideoSelectorTabs data={data} onSrcChange={handleSrcChange} />
          </div>
        }
          </>) :
          (
          <>
            <div style={{ width: "100%", height: "auto", textAlign: "center", fontSize: "2rem", margin: "10px" }}>
              Select a hypothesis to test below
            </div>
            <VideoSelectorTabs data={data} onSrcChange={handleSrcChange} />
          </>
        )}  */}
      </div>
    </>
  );
}
