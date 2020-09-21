import ImageMapper from "react-image-mapper";
import AudioPlayer from "../../../components/AudioPlayer/AudioPlayer";
import React, { useEffect, useState } from "react";
import {
  plumePlacement1,
  terrainMap2,
  tectonicPlates2,
  southAmerica1,
  plumeYes1,
  Exploration01,
} from "../../../assets/VolcanoModule";
import { iguanaAssets } from "../../../assets/IguanaModule";
import slide15_initial from "../../../assets/slide15Assets/slide15_initial.mp3";
import slide15_head from "../../../assets/slide15Assets/slide15_head.mp3";
import slide15_face from "../../../assets/slide15Assets/slide15_face.mp3";
import slide15_spikes from "../../../assets/slide15Assets/slide15_backSpikes.mp3";
import slide15_stomach from "../../../assets/slide15Assets/slide15_stomach.mp3";
import slide15_tail from "../../../assets/slide15Assets/slide15_tail.mp3";
// import iguanaMysterySlide7 from "../../../assets/IguanaMystery_Slide8.mp3";

const InteractiveImageComponent = (props) => {
  const [audioSrc, setAudioSrc] = useState(slide15_initial);
  const [audioIsPlaying, setAudioIsPlaying] = useState(true);
  const [audioIsDone, setAudioIsDone] = useState(false);
  // const toggleAudio = () => {};

  // resets audioIsPlaying when user selects different iguana part
  useEffect(() => {
    console.log(audioIsPlaying);
    setAudioIsPlaying(true);
  }, [audioSrc]);

  // prettier-ignore
  const map = {
        name: "IGUANA COMPARISON MAP",
        areas: [
          {
            _id: "1", name: "top_of_head", shape: "poly", 
            coords: [
                1468,363,1487,366,1499,369,1521,374,1538,391,
                1544,414,1535,436,1518,453,1496,459,1468,465,
                1442,465,1420,462,1403,450,1386,436,1383,414,
                1397,391,1420,377,1439,366,1454,363,1460,363,
            ],
            // audioSrc: iguanaAssets.iguanaMystery_Slide15Head,
            audioSrc: slide15_head,
          },
          {
            _id: "2", name: "face", shape: "poly", 
            coords: [
                1585,439,1597,449,1597,504,1591,533,1586,562,
                1574,613,1553,625,1535,618,1516,610,1509,587,
                1506,570,1506,543,1515,518,1525,498,1535,470,
                1543,451,1563,437,1571,436,1574,436,1577,437
            ],
            // audioSrc: iguanaAssets.iguanaMystery_Slide15Face,
            audioSrc: slide15_face,
          },
            {
            _id: "3", name: "tail", shape: "poly", 
            coords: [
                206,668,186,695,181,722,193,746,234,766,285,
                774,342,774,391,768,432,761,466,747,496,726,
                528,702,545,681,551,645,551,620,517,596,479,
                595,435,592,359,597,282,626,234,643
            ],
            // audioSrc: iguanaAssets.iguanaMystery_Slide15Tail,
            audioSrc: slide15_tail,
          },
          {
            _id: "4", name: "back_spikes", shape: "poly", 
            coords: [
                491,547,539,516,571,499,618,474,676,447,734,428,
                761,420,807,411,872,406,906,401,960,394,985,393,
                1019,393,1050,393,1101,394,1147,394,1182,393,
                1209,396,1250,400,1299,400,1343,401,1376,401,
                1378,416,1378,430,1350,447,1231,451,1168,441,
                1096,440,1026,444,978,447,920,447,872,445,
                809,455,741,465,677,488,632,510,580,541,
                536,564,490,589,462,591,421,592,370,592,
                446,560,477,547
            ],
            // audioSrc: iguanaAssets.iguanaMystery_Slide15Spikes,
            audioSrc: slide15_spikes,
          },
          {
            _id: "5", name: "stomach_general", shape: "poly", 
            coords: [
                514,711,551,670,551,643,550,611,538,604,528,
                598,515,592,507,591,499,581,510,572,543,563,
                570,548,628,513,684,489,731,471,776,461,826,
                454,867,451,908,448,961,448,1027,444,1079,445,
                1115,444,1162,441,1219,449,1264,455,1317,456,
                1357,448,1391,441,1418,462,1465,469,1523,449,
                1542,455,1522,500,1499,548,1506,599,1450,612,
                1355,616,1315,660,1314,684,1314,721,1303,756,
                1269,758,1241,720,1207,697,1144,700,1102,759,
                1068,773,1038,759,964,742,930,744,882,751,851,
                773,828,803,800,796,771,766,738,765,704,766,
                688,790,677,809,664,810,644,782,626,758,602,
                722,557,710,528,717],
            // audioSrc: iguanaAssets.iguanaMystery_Slide15Stomach,
            audioSrc: slide15_stomach,
          },
        ],
        
      };

  return (
    <>
      <AudioPlayer
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
      />
      <ImageMapper
        src={props.content.url}
        map={map}
        onClick={(a) => {
          console.log(a.audioSrc);
          setAudioSrc(a.audioSrc);
        }}
        lineWidth={4}
        strokeColor="rgba(255, 255, 255, 0.5)"
      />
    </>
  );
};

export default InteractiveImageComponent;
