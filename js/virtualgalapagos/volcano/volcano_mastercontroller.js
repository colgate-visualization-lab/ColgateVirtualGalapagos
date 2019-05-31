"use strict"
// 
// Entry point of all pages in Volcano module
// 
// Initializes all controllers in a page in the Volcano module and subsequent submodules
// 
// Create and import any additional controllers
// 
// 
// 
// 
// 
// 


import {MasterController} from '../mastercontroller.js';
import {VolcanoAudioPlayer} from './volcano_audiocontroller.js';
import {VolcanoDragDrop} from './volcano_dragdrop.js'

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

var pageName = VolcanoMasterController.grabPageName();
// initialize page list
var pageList = ["Volcano_TerrainMap01", "panotour/Volcano_Exploration01", "panotour/Volcano_Exploration02", "panotour/Volcano_Exploration03", "panotour/Volcano_Exploration04", "panotour/Volcano_Exploration05", "Volcano_TerrainMap02", "Volcano_TerrainMap03", "Volcano_TerrainMap04", "Volcano_TerrainMapAges01", "Volcano_TerrainMapAges02", "Volcano_OtherVolcanoes01", "Volcano_TectonicPlateWhiteboard01", "Volcano_TectonicPlates01", "Volcano_PlatesGame01", "Volcano_TectonicPlates02", "Volcano_MantlePlumesWhiteboard01", "Volcano_SouthAmerica01", "Volcano_TerrainMap06", "Volcano_PlumePlacement01", "Volcano_WhereNext01", "Volcano_MainMenu01"];


var controller = new VolcanoMasterController(pageList, pageName);
controller.init();
var audiocontroller = new VolcanoAudioPlayer(controller); 
audiocontroller.start();

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
var ddObj = ddList.filter(ddList => (ddList.Name === pageName));
if (ddObj) {
  var dragdrop = new VolcanoDragDrop(ddObj[0].ddDict, controller);
  dragdrop.initDrops();
  dragdrop.initDrags();
}

