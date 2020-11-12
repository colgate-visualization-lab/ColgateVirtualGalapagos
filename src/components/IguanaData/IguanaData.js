import React from "react";
import { iguanaAssets } from "../../assets/IguanaModule";

// data for slide 3 - to be included in  data array below
const slide12data = [
  {
    id:"0",
    imgsrc:"http://virtualgalapagos.colgate.edu/assets/IguanaModule/LandIguanaCactus.png",
  },
  {
    id:"1",
    imgsrc:"http://virtualgalapagos.colgate.edu/assets/IguanaModule/LandIguanaOnRocks.png",
  }
]
const slide3InteractiveData = [
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

// data for slide 15 - to be included in  data array below
// image map data as well as audio sources

const slide15Data = {
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
      audioSrc: "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/Slide15_head.mp3",
    },
    {
      _id: "2", name: "face", shape: "poly",
      coords: [
          1585,439,1597,449,1597,504,1591,533,1586,562,
          1574,613,1553,625,1535,618,1516,610,1509,587,
          1506,570,1506,543,1515,518,1525,498,1535,470,
          1543,451,1563,437,1571,436,1574,436,1577,437
      ],
      audioSrc: "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/Slide15_face.mp3",
    },
    {
      _id: "3", name: "tail", shape: "poly",
      coords: [
          206,668,186,695,181,722,193,746,234,766,285,
          774,342,774,391,768,432,761,466,747,496,726,
          528,702,545,681,551,645,551,620,517,596,479,
          595,435,592,359,597,282,626,234,643
      ],
      audioSrc: "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/Slide15_tail..mp3",
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
      audioSrc: "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/Slide15_backSpikes.mp3",
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
          audioSrc: "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/Slide15_stomach.mp3",
        },
  ],
}

const data = [
  {
    id: "1",
    title: "Iguana_Endemic01",
    type: "video",
    youtube: true,
    url:
      "https://www.youtube.com/embed/sacvf3WD7Dk", // change to pull from server later
  },
  {
    id: "2",
    title: "Iguana_Carried01",
    type: "image",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/SouthAmericaCoast.png",
  },
  {
    id: "3",
    title: "Iguana_Carried02",
    type: "slide3InteractiveVideo",
    audioSrc: iguanaAssets["IguanaMystery_Slide3_Intro"],
    data: slide3InteractiveData,
  },
  {
    id: "4",
    title: "Iguana_Pumice01",
    type: "video",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/IguanaPath.mp4", //360
  },
  {
    id: "5",
    title: "Iguana_Pumice02",
    type: "video",
    youtube: true,
    url:
      "https://www.youtube.com/embed/tuMVz_kICEw", // will change to pull from server
  },
  {
    id: "6",
    title: "Iguana_Comparison01",
    type: "video",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/ShoreWaves.mp4", //360
  },
  {
    id: "7",
    title: "Iguana_Comparison02",
    type: "360_comparison",
    url1:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/Caldara_Endtrail/index.htm", //temporary
    url2:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/Cactus_Final/index.htm",
    audioSrc: "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide7.wav",
  },
  {
    id: "8",
    title: "Iguana_Comparison03",
    type: "image_comparison",
    url1:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/LandIguanaSmiling01.png", //slider
    url2:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/MarineIguanaWithBabies.png",
    audioSrc: "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide8.wav",
    popupText: {
      landIguanaHead: "Land iguanas are usually more yellow or brown in color to blend in with the rocks and plants found inland.",
      landIguanaBody: "Land iguanas are often larger and weigh more than marine iguanas.",
      marineIguanaBody: "Marine iguanas have flat tails to help them swim!",
      marineIguanaTail: "Marine iguanas are darker in color to match the black basaltic rocks found in near the coast."
    }
  },
  // {
  //   id: "9",
  //   title: "Iguana_Comparison04",
  //   type: "image",
  //   url:
  //     "http://virtualgalapagos.colgate.edu/assets/IguanaModule/LandIguanaOnRocks.png", //slider
  // },
  {
    id: "10",
    title: "Iguana_PhyloTree01",
    type: "video",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/ShoreWaves.mp4", //360
  },
  {
    id: "11",
    title: "Iguana_PhyloTree02",
    type: "video",
    youtube: true,
    url:
      "https://www.youtube.com/embed/7fNOGGIDZ_E", // will change to pull from server whiteboard
  },
  //need to build,
  {
    id: "12",
    title: "Iguana_PhyloTree05",
    type:"slide12interactive",
    data:slide12data,
  },
  {
    id: "13",
    title: "Iguana_Evolution01",
    not_done: true,
  },
  {
    id: "14",
    title: "Iguana_Evolution02",
    type: "video",
    youtube: true,
    url: "https://www.youtube.com/embed/Oq-Ev8WWp8k"
  },
  {
    id: "15",
    title: "Iguana_Evolution03",
    type: "interactive_image",
    url:
      "https://keep.google.com/u/1/media/v2/1Qap6axeshCXiPdl0r3vhK1-K54n1_aIV_SuJiYxsbvbDNX1835Xp9qVnw7ftrA/15VVpQTnL-CD1LG4nNx4U3BHvTdJmLjfICf5GDWtoU4SucWfcTaLFmYqDv8x1BA?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=1600",
    audioSrc: "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/Slide15_initial.mp3",
    data: slide15Data,
  },
  {
    id: "16",
    title: "Iguana_Evolution04",
    type: "video",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/ShoreWaves.mp4", //360
  },
  {
    id: "17",
    title: "Iguana_Evolution05",
    not_done: true,
  },
  {
    id: "18",
    title: "Iguana_Scales02",
    type: "video",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/ShoreWaves.mp4", //360
  },
  {
    id: "19",
    title: "Iguana_Scales03",
    type: "video",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/ShoreWaves.mp4", //360
  },
  {
    id: "20",
    title: "Iguana_PhyloTree06",
    not_done: true,
  },
  {
    id: "21",
    title: "Iguana_PinkIggy01",
    not_done: true,
  },
];
export default data;
