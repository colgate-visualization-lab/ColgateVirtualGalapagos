"use strict"
// 
// Entry point of all pages in Volcano module
// 
// Initializes all controllers in a page in the Volcano module and subsequent submodules
// 
// Create and import any additional controllers
// 

import {MasterController} from '../mastercontroller.js';
import {VolcanoAVController} from './volcano_avcontroller.js';
import {VolcanoDragDrop} from './volcano_dragdrop.js'
import {VolcanoFieldbook} from './volcano_fieldbook.js'
import {VolcanoToolbar} from './volcano_toolbar.js'
import {plumeplacement} from './Volcano_PlumePlacement01.js'
import {terrainmap} from './Volcano_TerrainMap03.js'

class VolcanoMasterController extends MasterController {
    constructor(pageList, pageName){
      super(pageList,pageName);
    }

    static grabPageName(){
        var path = window.location.pathname;
        path = path.split("/").splice(-2);
        if (path[0] != "volcano"){ //submodules in the volcano module
          path = path.join("/");
        }
        else{
          path = path[1];
        }
        path = path.split(".");
        return path[0];
      }
}

// Mastercontroller
var pageName = VolcanoMasterController.grabPageName();

// List of pages in module in order 
var pageList = ["Volcano_TerrainMap01", "panotour/Volcano_Exploration01", "panotour/Volcano_Exploration02", "panotour/Volcano_Exploration03", "panotour/Volcano_Exploration04", "panotour/Volcano_Exploration05", "Volcano_TerrainMap02", "Volcano_TerrainMap03", "Volcano_TerrainMap04", "Volcano_TerrainMapAges01", "Volcano_TerrainMapAges02", "Volcano_OtherVolcanoes01", "Volcano_TectonicPlateWhiteboard01", "Volcano_TectonicPlates01", "Volcano_PlatesGame01", "Volcano_TectonicPlates02", "Volcano_MantlePlumesWhiteboard01", "Volcano_SouthAmerica01", "Volcano_TerrainMap06", "Volcano_PlumePlacement01", "Volcano_WhereNext01", "Volcano_MainMenu01"];

// Pages and associated fieldbook pages
var fbpages = {
  "Volcano_Compare360": 7,
  "panotour/Volcano_Exploration01": 2,
  "panotour/Volcano_Exploration02": 2,
  "panotour/Volcano_Exploration03": 3,
  "panotour/Volcano_Exploration04": 4,
  "panotour/Volcano_Exploration05": 5,
  "Volcano_OtherVolcanoes01": 9,
  "Volcano_PlatesGame01": 10,
  "Volcano_Slider01": 7,
  "Volcano_TectonicPlates01": 10,
  "Volcano_TectonicPlates02": 10,
  "Volcano_TectonicPlateWhiteboard01": 10,
  "Volcano_TerrainMap02": 6,
  "Volcano_TerrainMap03": 7,
  "Volcano_TerrainMap04": 8,
}

// Drag and drop pages and associated dictionaries
var ddList = [
  {
    Name : "Volcano_TerrainMapAges01",
    ddDict : {
    "7000001": ["Fernandina", "Isabela"],
    "7000002": ["Fernandina", "Isabela"],
    "1700000": ["Santa Fe"],
    "2300000": ["Santa Cruz"],
    "3300000": ["Espanola"],
    "4000000": ["San Cristobal"],
    }
  },
  { 
    Name : "Volcano_PlatesGame01",
    ddDict : {
    "convergent1": ["img_convergent1", "img_convergent2"],
    "convergent2": ["img_convergent1", "img_convergent2"],
    "divergent1": ["img_divergent1"],
    "transform1": ["img_transform1"],
    }
  }
];

//whiteboard videos
var videolist = [ "Volcano_MantlePlumesWhiteboard01", "Volcano_TectonicPlateWhiteboard01"];

var mastercontroller = new VolcanoMasterController(pageList, pageName);
mastercontroller.init();

// Toolbar for side navigation
var toolbar = new VolcanoToolbar();
toolbar.initToolbar();


// AVcontroller
var player = document.getElementById("player");
if (player !== null) { //page has av set up
  var av_type;
  if (videolist.includes(pageName)){
    av_type = "video";
  } else {
    av_type = "audio";
  }
  var avcontroller = new VolcanoAVController(player, av_type, mastercontroller); 
  avcontroller.start();
  avcontroller.setBGTrack();
}

// Fieldbook
var currentPage = fbpages[pageName];
if (currentPage == null){
  currentPage = 1;
}

var fbcontroller = new VolcanoFieldbook(fbpages, 11, mastercontroller);
fbcontroller.init();
fbcontroller.populateDivs();
fbcontroller.start(currentPage);


// Dragdrop controller
var ddObj = ddList.filter(ddList => (ddList.Name === pageName));
if (ddObj.length !== 0) {
  var dragdrop = new VolcanoDragDrop(ddObj[0].ddDict, mastercontroller);
  dragdrop.initDrops();
  dragdrop.initDrags();
}

// Plumeplacement
if (pageName==="Volcano_PlumePlacement01"){
  plumeplacement(mastercontroller, avcontroller);
}

// TerrainMap03
if (pageName==="Volcano_TerrainMapo3"){
  terrainmap(mastercontroller, avcontroller);
}