import { slide3Data } from "./slide3Data";
import { slide14Data } from "./slide14Data";
import { slide17Data } from "./slide17Data";
import { slide11DrawAreaData, slide11PhyloTreeData } from "./slide11Data";
import { slide19DrawAreaData, slide19PhyloTreeData } from "./slide19Data";

const iguanaData = [
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
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Images/SouthAmericaCoast.png",
  },
  {
    id: "3",
    title: "Iguana_Carried02",
    type: "slide3InteractiveVideo",
    src:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Video/IguanaSlide3Intro.mp4",
    imageSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Images/IguanaSlide3Intro.JPG",
    interSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Images/IguanaSlide3Intro.JPG",
    data: slide3Data,
  },
  {
    id: "4",
    title: "Iguana_Pumice01",
    type: "video360",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide4.wav",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/IguanaPath/", //360
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
    type: "video360",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide6.wav",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/Shorewaves/",
  },
  {
    id: "7",
    title: "Iguana_Comparison02",
    type: "360_comparison",
    url1:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/IguanaLoop/",
    url2:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/IguanaPath/",
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
    landIguanaText: {
      landIguanaHead:
        "Land iguanas are usually more yellow or brown in color to blend in with the rocks and plants found inland.",
      landIguanaBody:
        "Land iguanas are often larger and weigh more than marine iguanas.",
    },
    marineIguanaText: {
      marineIguanaBody: "Marine iguanas have flat tails to help them swim!",
      marineIguanaTail:
        "Marine iguanas are darker in color to match the black basaltic rocks found in near the coast.",
    },
  },
  {
    id: "9",
    title: "Iguana_PhyloTree01",
    type: "video360",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide10.wav",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/LandIguana/index.htm",
  },
  {
    id: "10",
    title: "Iguana_PhyloTree02",
    type: "video",

    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Video/IguanaPhyloTree.mp4", // will change to pull from server whiteboard
  },
  //need to build,
  {
    id: "11",
    title: "Iguana_PhyloTree05",
    type: "IguanaSlide11",
    audioSrc: {
      part1:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide12_1.m4a",
      part2:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide12_2.m4a",
    },
    backgroundUrl:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Images/IguanaSlide11DnDBackgroundSquare.png",
    phyloTreeData: slide11PhyloTreeData,
    drawAreaData: slide11DrawAreaData,
  },
  {
    id: "12",
    title: "Iguana_Evolution01",
    type: "video360",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide13.wav",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/IguanaVegetation/index.htm",
  },
  {
    id: "13",
    title: "Iguana_Evolution02",
    type: "video",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Video/IguanaWhiteboardEvolution.mp4",
  },
  {
    id: "14",
    title: "Iguana_Evolution03",
    type: "interactive_image",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/MarineGreenIguanaComparison.jpg",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/Slide15_initial.mp3",
    data: slide14Data,
  },
  {
    id: "15",
    title: "Iguana_Evolution04",
    type: "video360",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide16.wav",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/IguanaVegetation/index.htm",
  },
  {
    id: "16",
    title: "Iguana_Evolution05",
    type: "dnaInteractiveActivity",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide17.wav",
    data: slide17Data,
  },
  {
    id: "17",
    title: "Iguana_Scales02",
    type: "video360",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide18.wav",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/SantiagoBeach/index.htm", //360
  },
  {
    id: "18",
    title: "Iguana_Scales03",
    type: "video360",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide19.wav",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/Shorewaves/",
  },
  {
    id: "19",
    title: "Iguana_PhyloTree06",
    type: "IguanaSlide19",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide20.wav",
    backgroundUrl:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Images/IguanaSlide19DnDBackgroundWithText.png",
    phyloTreeData: slide19PhyloTreeData,
    drawAreaData: slide19DrawAreaData,
  },
  {
    id: "20",
    title: "Iguana_PinkIggy01",
    type: "video",
    url:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Video/IguanaLastSlide%20.mp4",
  },
];
export default iguanaData;