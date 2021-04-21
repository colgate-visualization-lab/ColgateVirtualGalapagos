import { slide3Data } from "../IguanaData/slide3Data";
import { slide14Data } from "../IguanaData/slide14Data";
import { slide17Data } from "../IguanaData/slide17Data";

const iguanaData = [
  {
    id: "1",
    title: "Intro Video",
    type: "video",
    url:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/VolcanoModuleIntro.mp4",
  },
  {
    id: "2",
    title: "Caldara_Endtrail",
    type: "video360",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration01.mp3",
    url:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/Caldara_Endtrail/index.htm",
  },
  {
    id: "3",
    title: "Caldara_Shotfive",
    type: "video360",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration02.mp3",
    url:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/Caldara_Shotfive/index.htm",
  },
  {
    id: "4",
    title: "Stillwater",
    type: "video360",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration03.mp3",
    url:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/Stillwater/index.htm",
  },
  {
    id: "5",
    title: "Cactus_Final",
    type: "video360",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration04.mp3",
    url:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/Cactus_Final/index.htm",
  },
  {
    id: "6",
    title: "PlazaCliff",
    type: "video360",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration05.mp3",
    url:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/PlazaCliff/index.htm",
  },
  {
    id: "7",
    title: "Magnifying",
    type: "image",
    url:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/TerrainMap-Labelled.png",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_TerrainMap02.mp3",
  },
  {
    id: "8",
    title: "Magnifying 2",
    type: "image",
    url:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/TerrainMap-Labelled.png",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_TerrainMap02.mp3",
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
    type: "video360",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide10.wav",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/LandIguana/index.htm",
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
    type: "Slide12DnDInteractive",
    backgroundUrl:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Images/IguanaSlide12DnDBackgroundGreySquare.png",
  },
  {
    id: "13",
    title: "Iguana_Evolution01",
    type: "video360",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide13.wav",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/IguanaVegetation/index.htm",
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
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/MarineGreenIguanaComparison.jpg",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/Slide15_initial.mp3",
    data: slide14Data,
  },
  {
    id: "16",
    title: "Iguana_Evolution04",
    type: "video360",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide16.wav",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/IguanaVegetation/index.htm",
  },
  {
    id: "17",
    title: "Iguana_Evolution05",
    type: "dnaInteractiveActivity",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide17.wav",
    data: slide17Data,
  },
  {
    id: "18",
    title: "Iguana_Scales02",
    type: "video360",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide18.wav",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/SantiagoBeach/index.htm", //360
  },
  {
    id: "19",
    title: "Iguana_Scales03",
    type: "video360",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide19.wav",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/Shorewaves/",
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
export default iguanaData;
