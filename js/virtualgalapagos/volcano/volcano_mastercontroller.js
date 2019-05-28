"use strict"

import {MasterController} from '../mastercontroller';

class VolcanoMasterController extends MasterController {
    constructor(){
        super();
        this.pageName = grabPageName();
        this.pageList = ["Volcano_TerrainMap01", "panotour/Volcano_Exploration01", "panotour/Volcano_Exploration02", "panotour/Volcano_Exploration03", "panotour/Volcano_Exploration04", "panotour/Volcano_Exploration05", "Volcano_TerrainMap02", "Volcano_TerrainMap03", "Volcano_TerrainMap04", "Volcano_TerrainMapAges01", "Volcano_TerrainMapAges02", "Volcano_OtherVolcanoes01", "Volcano_TectonicPlateWhiteboard01", "Volcano_TectonicPlates01", "Volcano_PlatesGame01", "Volcano_TectonicPlates02", "Volcano_MantlePlumesWhiteboard01", "Volcano_SouthAmerica01", "Volcano_TerrainMap06", "Volcano_PlumePlacement01", "Volcano_WhereNext01", "Volcano_MainMenu01"];

    }
    static grabPageName(){
        var path = window.location.pathname;
        path = path.split("/").splice(-2);
        if (path[0] != "volcano"){
          return path.join('/');
        } else {
          return path[1];
        }
}

// initialize page list


var controller = new MasterController(pageList, pageName);
controller.init();
controller.start();



  }