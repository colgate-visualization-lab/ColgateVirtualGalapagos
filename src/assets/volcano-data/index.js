const volcanoData = [
  {
    id: "1",
    hasPrev: false,
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
    hasOptional: true,
    nextSlideId: "9",
    title: "Magnifying",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_TerrainMap02.mp3",
    imageSrc1:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/TerrainMap-Labelled.png",
    imageSrc2:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/magnifying-glass-1010537_1920.png",
  },
  {
    //Optional slide
    id: "8",
    title: "Slider Comparison",
    hasNext: false,
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Slider01.mp3",
    imageSrc1:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/SantaCruz_Color.png",
    imageSrc2:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/ferd.png",
  },
  {
    id: "9",
    followingOptional: true,
    prevSlideId: "7",
    title: "360 Compare",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Compare360.mp3",
    videoSrc1:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/Caldara_Endtrail/index.htm",
    videoSrc2:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/360Videos/Cactus_Final/index.htm",
  },
  {
    id: "10",
    hasOptional: true,
    nextSlideId: "13",
    title: "Terrain Map 3",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_TerrainMap03.mp3",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/TerrainMap-Labelled.png",
  },
  {
    id: "11",
    title: "Ferd",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Fernandina01.mp3",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/ferd.png",
  },
  {
    id: "12",
    title: "Santa Cruz",
    hasNext: false,
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_SantaCruz01.mp3",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/SantaCruz_Color.png",
  },
  {
    id: "13",
    followingOptional: true,
    prevSlideId: "10",
    title: "Terrain Map 4",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_TerrainMap04.mp3",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/TerrainMap-Labelled.png",
  },
  {
    id: "14",
    title: "DND 1",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_TerrainMapAges01.mp3",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/TerrainMap-Labelled.png",
  },
  {
    id: "15",
    title: "Terrain Ages 2",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_TerrainMapAges02.mp3",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/DragandDropAnswers.png",
  },
  {
    id: "16",
    title: "Other Volcanoes 01",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_OtherVolcanoes01.mp3",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/VolcanoCompare.png",
  },
  {
    id: "17",
    title: "Plate Tectonics Video",
    videoSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/VolcanoPlateTectonics.mp4",
  },
  {
    id: "18",
    title: "Tectonic Plates 1",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_TectonicPlates01.mp3",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/tectonicplatesmap.png",
  },
  {
    id: "19",
    title: "DND 2",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/Audio/IguanaMystery_Slide17.wav",
    // data: slide17Data,
  },
  {
    id: "20",
    title: "Tectonic Plates 2",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_TectonicPlates02.mp",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/tectonicplatesmap.png",
  },
  {
    id: "21",
    title: "Mantle Plumes Video",
    videoSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/VolcanoMantlePlumes.mp4",
  },
  {
    id: "22",
    title: "South America",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_SouthAmerica01Fix.mp3",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/GalapagosSAmerica.png",
  },
  {
    id: "23",
    title: "Terrain Map 6",
    hasNext: false,
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_TerrainMap06.mp3",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/TerrainMap-Labelled.png",
  },
  {
    id: "24",
    title: "Eruption Dates",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_TerrainMapEruptionDatesFix.mp3",
    imageSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/Eruption%20Dates.png",
  },
  {
    id: "25",
    title: "Plume Placement",
    hasNext: false,
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_PlumePlacement01.mp3",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/TerrainMapOvals.png",
  },
  {
    id: "26",
    title: "Plume No",
    hasNext: false,
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_PlumeYes01Fix.mp3",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/TerrainMapWrongOval.png",
  },
  {
    id: "27",
    title: "Plume Yes",
    followingOptional: true,
    prevSlideId: "25",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_PlumeYes01Fix.mp3",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/TerrainMapRightOval.png",
  },
  {
    id: "28",
    title: "Where Next",
    audioSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_WhereNext01.mp3",
    imageSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/TerrainMap-Labelled.png",
  },
  {
    id: "29",
    title: "Summary Video",
    hasNext: false,
    videoSrc:
      "https://virtualgalapagos.colgate.edu/assets/VolcanoModule/VolcanoSummary.mp4",
  },
];
export default volcanoData;