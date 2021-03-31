import { slide3Data } from "./slide3Data";
import { slide15Data } from "./slide15Data";
import { slide17Data } from "./slide17Data";
import { slide12DrawAreaData, slide12PhyloTreeData } from "./slide12Data";
import { slide20DrawAreaData, slide20PhyloTreeData } from "./slide19Data";

export const iguanaSlides = [
  {
    id: "1",
    title: "Iguana_Endemic01",
    type: "video",
    notes: [],
    isCompleted: false,
    data: {
      videoSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Video/IguanaModuleIntro.mp4",
    },
  },
  {
    id: "2",
    title: "Iguana_Carried01",
    type: "image",
    notes: [],
    isCompleted: false,
    data: {
      imageSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Images/SouthAmericaCoast.png",
    },
  },
  {
    id: "3",
    title: "Iguana_Carried02",
    type: "slide3InteractiveVideo",
    notes: [],
    isCompleted: false,
    data: {
      src:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Video/IguanaSlide3Intro.mp4",
      imageSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Images/IguanaSlide3Intro.JPG",
      interSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Images/IguanaSlide3Intro.JPG",
      hypotheses: [...slide3Data],
    },
  },
  {
    id: "4",
    title: "Iguana_Pumice01",
    type: "video360",
    notes: [],
    isCompleted: false,
    data: {
      audioSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide4.wav",
      videoSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/IguanaPath/", //360
    },
  },
  {
    id: "5",
    title: "Iguana_Pumice02",
    type: "video",
    notes: [],
    isCompleted: false,
    data: {
      videoSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Video/IguanaPumiceCut.mp4", // will change to pull from server
    },
  },
  {
    id: "6",
    title: "Iguana_Comparison01",
    type: "video360",
    notes: [],
    isCompleted: false,
    data: {
      audioSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide6.wav",
      videoSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/Shorewaves/",
    },
  },
  {
    id: "7",
    title: "Iguana_Comparison02",
    type: "360_comparison",
    notes: [],
    isCompleted: false,
    data: {
      videoSrc1:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/IguanaLoop/",
      videoSrc2:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/IguanaPath/",
      audioSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide7.wav",
    },
  },
  {
    id: "8",
    title: "Iguana_Comparison03",
    type: "image_comparison",
    notes: [],
    isCompleted: false,
    data: {
      imageSrc1:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/LandIguanaSmiling01.png", //slider
      imageSrc2:
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
  },
  {
    id: "9",
    title: "Iguana_PhyloTree01",
    type: "video360",
    notes: [],
    isCompleted: false,
    data: {
      audioSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide10.wav",
      videoSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/LandIguana/index.htm",
    },
  },
  {
    id: "10",
    title: "Iguana_PhyloTree02",
    type: "video",
    notes: [],
    isCompleted: false,
    data: {
      videoSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Video/IguanaPhyloTree.mp4", // will change to pull from server whiteboard
    },
  },
  {
    id: "11",
    title: "Iguana_PhyloTree05",
    type: "PhyloTreeDrawingSlide",
    notes: [],
    isCompleted: false,

    data: {
      audioSrc1:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide12_1.m4a",
      audioSrc2:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide12_2.m4a",
      backgroundSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Images/IguanaSlide12DnDBackgroundSquare.png",
      phyloTreeData: slide12PhyloTreeData,
      drawAreaData: slide12DrawAreaData,
    },
    savedData: {},
  },
  {
    id: "12",
    title: "Iguana_Evolution01",
    type: "video360",
    notes: [],
    isCompleted: false,
    data: {
      audioSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide13.wav",
      videoSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/IguanaVegetation/index.htm",
    },
  },
  {
    id: "13",
    title: "Iguana_Evolution02",
    type: "video",
    notes: [],
    isCompleted: false,
    data: {
      videoSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Video/IguanaWhiteboardEvolution.mp4",
    },
  },
  {
    id: "14",
    title: "Iguana_Evolution03",
    type: "interactive_image",
    notes: [],
    isCompleted: false,
    data: {
      imageSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/MarineGreenIguanaComparison.jpg",
      audioSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/Slide15_initial.mp3",
      imageMap: slide15Data,
    },
  },
  {
    id: "15",
    title: "Iguana_Evolution04",
    type: "video360",
    notes: [],
    isCompleted: false,
    data: {
      audioSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide16.wav",
      videoSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/IguanaVegetation/index.htm",
    },
  },
  {
    id: "16",
    title: "Iguana_Evolution05",
    type: "dnaInteractiveActivity",
    notes: [],
    isCompleted: false,
    data: {
      audioSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide17.wav",
      ...slide17Data,
    },
  },
  {
    id: "17",
    title: "Iguana_Scales02",
    type: "video360",
    notes: [],
    isCompleted: false,
    data: {
      audioSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide18.wav",
      videoSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/SantiagoBeach/index.htm", //360
    },
  },
  {
    id: "18",
    title: "Iguana_Scales03",
    type: "video360",
    notes: [],
    isCompleted: false,
    data: {
      audioSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide19.wav",
      videoSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/360Videos/Shorewaves/",
    },
  },
  {
    id: "19",
    title: "Iguana_PhyloTree06",
    type: "PhyloTreeDrawingSlide",
    notes: [],
    isCompleted: false,
    data: {
      audioSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide20.wav",
      backgroundSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Images/IguanaSlide20DnDBackgroundWithText.png",
      phyloTreeData: slide20PhyloTreeData,
      drawAreaData: slide20DrawAreaData,
    },
  },
  {
    id: "20",
    title: "Iguana_PinkIggy01",
    type: "video",
    notes: [],
    isCompleted: false,
    data: {
      videoSrc:
        "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Video/IguanaLastSlide%20.mp4",
    },
  },
];

export const modules = [
  {
    id: 1,
    name: "volcano",
    slides: [],
    progressData: {
      completedSlideIds: [1, 2, 3],
      lastSeenId: 4,
      isCompleted: false,
    },
  },
  {
    id: 2,
    name: "iguana",
    slides: iguanaSlides,
    progressData: {
      completedSlideIds: [1, 2, 3, 4, 5],
      lastSeenId: 5,
      isCompleted: false,
    },
  },
];
