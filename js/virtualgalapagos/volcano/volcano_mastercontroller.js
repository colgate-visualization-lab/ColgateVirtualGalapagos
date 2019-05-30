"use strict"

import {MasterController} from '../mastercontroller.js';
import {VolcanoAudioPlayer} from './volcano_audiocontroller.js';

class VolcanoMasterController extends MasterController {
    constructor(pageList, pageName){
      super(pageList,pageName);
    }

    static grabPageName(){
        var path = window.location.pathname;
        path = path.split("/").splice(-2);
        if (path[0] != "volcano"){
          path = path.join("/");
        }
        else{
          path = path[1];
        }
        path = path.split(".");
        return path[0];
      }
}

// initialize page list
var pageName = VolcanoMasterController.grabPageName();
var pageList = ["Volcano_TerrainMap01", "panotour/Volcano_Exploration01", "panotour/Volcano_Exploration02", "panotour/Volcano_Exploration03", "panotour/Volcano_Exploration04", "panotour/Volcano_Exploration05", "Volcano_TerrainMap02", "Volcano_TerrainMap03", "Volcano_TerrainMap04", "Volcano_TerrainMapAges01", "Volcano_TerrainMapAges02", "Volcano_OtherVolcanoes01", "Volcano_TectonicPlateWhiteboard01", "Volcano_TectonicPlates01", "Volcano_PlatesGame01", "Volcano_TectonicPlates02", "Volcano_MantlePlumesWhiteboard01", "Volcano_SouthAmerica01", "Volcano_TerrainMap06", "Volcano_PlumePlacement01", "Volcano_WhereNext01", "Volcano_MainMenu01"];


var controller = new VolcanoMasterController(pageList, pageName);
controller.init();
var audiocontroller = new VolcanoAudioPlayer(controller); 
audiocontroller.start();