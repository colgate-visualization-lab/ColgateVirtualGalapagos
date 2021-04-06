import { slide3Data } from "../../assets/IguanaData/slide3Data";
import { slide15Data } from "../../assets/IguanaData/slide15Data";
import { slide17Data } from "../../assets/IguanaData/slide17Data";

const iguanaData = [
  {
    id: "1",
    title: "Intro Video",
    videoSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/VolcanoModuleIntro.mp4", 
  },
  {
    id: "2",
    title: "Caldara_Endtrail",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration01.mp3",
    videoSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/Caldara_Endtrail/index.htm",
  },
  {
    id: "3",
    title: "Caldara_Shotfive",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration02.mp3",
    videoSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/Caldara_Shotfive/index.htm",
  },
  {
    id: "4",
    title: "Stillwater",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration03.mp3",
    videoSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/Stillwater/index.htm",
  },
  {
    id: "5",
    title: "Cactus_Final",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration04.mp3",
    videoSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/Cactus_Final/index.htm",
  },
  {
    id: "6",
    title: "PlazaCliff",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration05.mp3",
    videoSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/PlazaCliff/index.htm",
  },
  {
    id: "7",
    title: "Magnifying",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_TerrainMap02.mp3",
    imageSrc1:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/TerrainMap-Labelled.png",
    imageSrc2:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/magnifying-glass-1010537_1920.png",
  },
  {
    id: "8",
    title: "360 Compare",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Compare360.mp3",
    videoSrc1:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/Caldara_Endtrail/index.htm",
    videoSrc2:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/Cactus_Final/index.htm",
  },
  // {
  //   id: "9",
  //   title: "Iguana_Comparison04",
  //   type: "image",
  //   url:
  //     "http://virtualgalapagos.colgate.edu/assets/IguanaModule/LandIguanaOnRocks.png", //slider
  // },
  {
    id: "9",
    title: "Terrain Map 3",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_TerrainMap03.mp3",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/TerrainMap-Labelled.png",
  },
  {
    id: "10",
    title: "Iguana_PhyloTree02",
    audioSrc: "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_TerrainMap04.mp3",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/TerrainMap-Labelled.png", 
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
    data: slide15Data,
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
