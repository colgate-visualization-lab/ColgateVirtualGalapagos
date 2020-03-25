'use strict'
//
// Entry point of all pages in Volcano module
//
// Initializes all controllers in a page in the Volcano module and subsequent submodules
//
// Create and import any additional controllers
//

import { MasterController } from '../mastercontroller.js'
import { overlay } from '../overlay.js'
import { VolcanoAVController } from './volcano_avcontroller.js'
import { VolcanoDragDrop } from './volcano_dragdrop.js'
import { VolcanoFieldbook } from './volcano_fieldbook.js'
import { VolcanoToolbar } from './volcano_toolbar.js'
import { plumeplacement } from './Volcano_PlumePlacement01.js'
import { terrainmap } from './Volcano_TerrainMap03.js'
import { VolcanoNavigationBar } from './volcano_navbar.js'

class VolcanoMasterController extends MasterController {
  constructor (pageList, pageName) {
    super(pageList, pageName, 'volcano')
  }
  init () {
    super.init()
    // special cases
    // MasterController.storeItem('TerrainMap03', 'false')
    MasterController.storeItem('PlumePlacement01', 'false')
    MasterController.storeItem('initProgress', 'true')
  }

  static grabPageName () {
    var path = window.location.pathname
    path = path.split('/').splice(-2)
    if (path[0] !== 'volcano') { // submodules in the volcano module
      path = path.join('/')
    } else {
      path = path[1]
    }
    path = path.split('.')
    return path[0]
  }
}

// Mastercontroller
var pageName = VolcanoMasterController.grabPageName()

// List of pages in module in order
var pageList = ['Volcano_TerrainMap01', 'panotour/Volcano_Exploration01', 'panotour/Volcano_Exploration02', 'panotour/Volcano_Exploration03', 'panotour/Volcano_Exploration04', 'panotour/Volcano_Exploration05', 'Volcano_TerrainMap02', 'Volcano_TerrainMap03', 'Volcano_TerrainMap04', 'Volcano_TerrainMapAges01', 'Volcano_TerrainMapAges02', 'Volcano_OtherVolcanoes01', 'Volcano_TectonicPlateWhiteboard01', 'Volcano_TectonicPlates01', 'Volcano_PlatesGame01', 'Volcano_TectonicPlates02', 'Volcano_MantlePlumesWhiteboard01', 'Volcano_SouthAmerica01', 'Volcano_TerrainMap06', 'Volcano_TerrainMapEruptionDates01', 'Volcano_PlumePlacement01', 'Volcano_WhereNext01']

// Pages and associated fieldbook pages
var fbPages = {
  'Volcano_Compare360': 6,
  'panotour/Volcano_Exploration01': 1,
  'panotour/Volcano_Exploration02': 1,
  'panotour/Volcano_Exploration03': 2,
  'panotour/Volcano_Exploration04': 3,
  'panotour/Volcano_Exploration05': 4,
  'Volcano_OtherVolcanoes01': 8,
  'Volcano_PlatesGame01': 9,
  'Volcano_Slider01': 6,
  'Volcano_TectonicPlates01': 9,
  'Volcano_TectonicPlates02': 9,
  'Volcano_TectonicPlateWhiteboard01': 9,
  'Volcano_TerrainMap02': 5,
  'Volcano_TerrainMap03': 6,
  'Volcano_TerrainMap04': 7
}

// Drag and drop pages and associated dictionaries
var ddList = [
  {
    name: 'Volcano_TerrainMapAges01',
    ddDict: {
      '7000001': ['Fernandina', 'Isabela'],
      '7000002': ['Fernandina', 'Isabela'],
      '1700000': ['Santiago'],
      '2300000': ['Santa Cruz'],
      '3300000': ['Espanola'],
      '4000000': ['San Cristobal']
    }
  },
  {
    name: 'Volcano_PlatesGame01',
    ddDict: {
      'convergent1': ['Image 1', 'Image 2'],
      'convergent2': ['Image 1', 'Image 2'],
      'divergent1': ['Image 3'],
      'transform1': ['Image 4']
    }
  }
]

// sidebar navigation
var toolbarLinks = []
for (var i = 0; i < pageList.length; i++) {
  var url = '/volcano/' + pageList[i] + '.html'
  var text = pageList[i].split(/[_/]/)
  toolbarLinks.push({ text: text[text.length - 1], url: url })
}

// whiteboard videos
var videolist = ['Volcano_MantlePlumesWhiteboard01', 'Volcano_TectonicPlateWhiteboard01']

// init controllers
var masterController = new VolcanoMasterController(pageList, pageName)
masterController.init()

// overlay
overlay()

// Toolbar for side navigation
var toolbar = new VolcanoToolbar(toolbarLinks, masterController)
toolbar.initToolbar()

// AVcontroller
var player = document.getElementById('player')
if (player !== null) { // page has av set up
  var avType
  if (videolist.includes(pageName)) {
    avType = 'video'
  } else {
    avType = 'audio'
  }

  var avController = new VolcanoAVController(player, avType, masterController)
  avController.start()
  avController.setBGTrack()
}

// Fieldbook
var currentPage = fbPages[pageName]
if (currentPage == null) {
  currentPage = 0
}

var fbController = new VolcanoFieldbook(fbPages, 10, masterController)
fbController.init()
fbController.populateDivs()
fbController.start(currentPage)

// Dragdrop controller
var ddObj = ddList.filter(ddList => (ddList.name === pageName))
if (ddObj.length !== 0) {
  var dragdrop = new VolcanoDragDrop(ddObj[0].ddDict, masterController)
  dragdrop.initDrops()
  dragdrop.initDrags()
}

// Plumeplacement
if (pageName === 'Volcano_PlumePlacement01') {
  plumeplacement(masterController, avController)
}

// TerrainMap03
if (pageName === 'Volcano_TerrainMap03') {
  terrainmap(masterController, avController)
}


var nav_bar = new VolcanoNavigationBar()
nav_bar.init()
nav_bar.setupLink()