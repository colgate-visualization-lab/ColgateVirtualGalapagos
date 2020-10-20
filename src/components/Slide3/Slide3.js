import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

import Slide3Selector from "./Slide3Selector";
import Slide3BottomVideoSelector from "./Slide3BottomVideoSelector";
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
  const [selectionVisible, setSelectionVisible] = useState({});
  const [showPlayer, setShowPlayer] = useState(true);
  

  useEffect(() => {
    console.log(ref);
    // console.log(playerRef.current.width);
    // console.log(playerRef.current.getActivePlayer());
    // console.log(console.log(playerRef.player.getInternalPlayer));
  });

  // optional playing prop to pass to audio handler
  // let audioPlaying = {}

  const handleSrcChange = (src) => {
    // audioPlaying = {playing: false};
    // console.log("video selector", audioPlaying)
    setSrc(src);
    console.log(src);
    // setAudioIsPlaying({playing: false})
    setShowPlayer(false);
  };

  const handlePlaybackEnded = () => {
    setSelectionVisible(true);
  };

  const handlePlaybackStarted = () => {
    setSelectionVisible(false);
  };

  // this determines whether the video selection buttons
  //  are visible
  const [selectionClass, setSelectionClass] = useState(classes.videoSelectorBottomHidden);
  
  useEffect(()=>{
    const mouseMoveTimer=setTimeout(()=>{
      setSelectionClass(classes.videoSelectorBottomHidden)
    }, 3000);
    return () => clearTimeout(mouseMoveTimer);
  })

  const ref = useRef();

  // return <Slide3BottomVideoSelector data={data} />;

  return (
    <>
      {/* { showPlayer &&
      <AudioPlayerHandler  src={props.content.audioSrc} />
    } */}
      <div ref={ref} className={classes.slide3Style} 
      onMouseMove={()=> {
        console.log("fired")
        setSelectionClass(classes.videoSelectorBottomVisible);
      }}
      >
        <ReactPlayer
          position="relative"
          width="100%"
          height="100%"
          controls={selectionVisible ? false : true}
          url={src.videoSrc}
          playing={true}
          onEnded={handlePlaybackEnded}
          onStart={handlePlaybackStarted}
          onPlay={handlePlaybackStarted}
        />
        <div
          className={
            selectionVisible
              ? classes.videoOverlayActive
              : classes.videoOverlayInactive
          }
        />
        {/* <Slide3BottomVideoSelector data={data}/> */}
        <div
          className={
            selectionVisible
              ? classes.videoSelectorOverlay
              : selectionClass
          }
        >
          <Slide3BottomVideoSelector data={data} onSrcChange={handleSrcChange}/>
          {/* <Slide3Selector data={data} onSrcChange={handleSrcChange} /> */}
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
