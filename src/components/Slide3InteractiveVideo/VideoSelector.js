import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

import VideoSelectorTabs from "./VideoSelectorTabs";
import AudioPlayerHandler from "../AudioPlayer/AudioPlayerHandler"

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
  const [src, setSrc] = useState();
  const [selectionVisible, setSelectionVisible] = useState(true);

  const handleSrcChange = (src) => {
    setSrc(src);
    console.log(audioPlayerRef);
  };

  const handlePlaybackEnded = () => {
    setSelectionVisible(true);
  }

  const handlePlaybackStarted = () => {
    setSelectionVisible(false);
  }


  return (
    <>
    <AudioPlayerHandler src={props.content.audioSrc} />
    <div
    
      style={{
        width: "100%",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "100vw",
          height: "70vh",
          flexDirection: "column"
        }}
      >
        {src != null ? (
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
        )} 
          
        
      </div>

      {/* <VideoSelectorTabs data={data} onSrcChange={handleSrcChange} /> */}
    </div>
    </>
  );
}
