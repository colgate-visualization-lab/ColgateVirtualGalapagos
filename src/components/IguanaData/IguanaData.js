import { slide13Data } from "./slide13Data";
import { slide15Data } from "./slide15Data";
import { slide17Data } from "./slide17Data";

const data = [
  {
    id: "1",
    title: "Iguana_Endemic01",
    type: "video",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Video/IguanaModuleIntro.mp4", // change to pull from server later
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
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/Slide3SplitAudio/IguanaMystery_Slide3_Intro.mp3",
    data: slide13Data,
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
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Video/IguanaPumiceCut.mp4", // will change to pull from server
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
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide7.wav",
  },
  {
    id: "8",
    title: "Iguana_Comparison03",
    type: "image_comparison",
    url1:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/LandIguanaSmiling01.png", //slider
    url2:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/MarineIguanaWithBabies.png",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide8.wav",
    popupText: {
      landIguanaHead:
        "Land iguanas are usually more yellow or brown in color to blend in with the rocks and plants found inland.",
      landIguanaBody:
        "Land iguanas are often larger and weigh more than marine iguanas.",
      marineIguanaBody: "Marine iguanas have flat tails to help them swim!",
      marineIguanaTail:
        "Marine iguanas are darker in color to match the black basaltic rocks found in near the coast.",
    },
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
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Video/IguanaPhyloTree.mp4", // will change to pull from server whiteboard
  },
  //need to build,
  {
    id: "12",
    title: "Iguana_PhyloTree05",
    not_done: true,
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
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Video/IguanaWhiteboardEvolution.mp4",
  },
  {
    id: "15",
    title: "Iguana_Evolution03",
    type: "interactive_image",
    url:
      "https://keep.google.com/u/1/media/v2/1Qap6axeshCXiPdl0r3vhK1-K54n1_aIV_SuJiYxsbvbDNX1835Xp9qVnw7ftrA/15VVpQTnL-CD1LG4nNx4U3BHvTdJmLjfICf5GDWtoU4SucWfcTaLFmYqDv8x1BA?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=1600",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/Slide15_initial.mp3",
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
    type: "dnaInteractiveActivity",
    data: slide17Data,
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
    type: "video",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Video/IguanaLastSlide%20.mp4",
  },
];
export default data;
