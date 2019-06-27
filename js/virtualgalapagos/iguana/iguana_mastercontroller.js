'use strict'
//
// Entry point of all pages in this module
//
// Initializes all controllers in a page in the this module and subsequent submodules
//
// Create and import any additional controllers
//

import { MasterController } from '../mastercontroller.js'
import { overlay } from '../overlay.js'
import { IguanaAVController } from './iguana_avcontroller.js'
import { IguanaDragDrop } from './iguana_dragdrop.js'
import { IguanaFieldbook } from './iguana_fieldbook.js'
import { IguanaToolbar } from './iguana_toolbar.js'

class IguanaMasterController extends MasterController {
  constructor (pageList, pageName) {
    super(pageList, pageName, 'iguana')
  }
  init () {
    super.init()
    // special cases
    // MasterController.storeItem('TerrainMap03', 'false')
    // MasterController.storeItem('PlumePlacement01', 'false')
    // MasterController.storeItem('initProgress', 'true')
  }

  static grabPageName () {
    var path = window.location.pathname
    path = path.split('/').splice(-2)
    if (path[0] !== 'iguana') { // submodules in the this module
      path = path.join('/')
    } else {
      path = path[1]
    }
    path = path.split('.')
    return path[0]
  }
}

// Mastercontroller
var pageName = IguanaMasterController.grabPageName()

// List of pages in module in order
var pageList = ['panotour/Iguana_Endemic01', 'Iguana_Carried01', 'Iguana_Carried02', 'panotour/Iguana_Pumice01', 'panotour/Iguana_Comparison01', 'panotour/Iguana_Comparison02', 'Iguana_Comparison03', 'Iguana_Comparison04', 'panotour/Iguana_PhyloTree01', 'Iguana_PhyloTree02', 'Iguana_PhyloTree05', 'Iguana_Evolution01', 'Iguana_Evolution02', 'Iguana_Evolution03', 'panotour/Iguana_Evolution04', 'Iguana_Evolution05', 'panotour/Iguana_Scales01', 'panotour/Iguana_Scales02', 'panotour/Iguana_Scales03', 'Iguana_PhyloTree06', 'panotour/Iguana_PinkIggy01']
// Pages and associated fieldbook pages
var fbPages = {
  // 'Volcano_Compare360': 7,
  // 'panotour/Volcano_Exploration01': 2,
  // 'panotour/Volcano_Exploration02': 2,
  // 'panotour/Volcano_Exploration03': 3,
  // 'panotour/Volcano_Exploration04': 4,
  // 'panotour/Volcano_Exploration05': 5,
  // 'Volcano_OtherVolcanoes01': 9,
  // 'Volcano_PlatesGame01': 10,
  // 'Volcano_Slider01': 7,
  // 'Volcano_TectonicPlates01': 10,
  // 'Volcano_TectonicPlates02': 10,
  // 'Volcano_TectonicPlateWhiteboard01': 10,
  // 'Volcano_TerrainMap02': 6,
  // 'Volcano_TerrainMap03': 7,
  // 'Volcano_TerrainMap04': 8
}

// Drag and drop pages and associated dictionaries
var ddList = [
//   {
//     name: 'Volcano_TerrainMapAges01',
//     ddDict: {
//       '7000001': ['Fernandina', 'Isabela'],
//       '7000002': ['Fernandina', 'Isabela'],
//       '1700000': ['Santiago'],
//       '2300000': ['Santa Cruz'],
//       '3300000': ['Espanola'],
//       '4000000': ['San Cristobal']
//     }
//   },
//   {
//     name: 'Volcano_PlatesGame01',
//     ddDict: {
//       'convergent1': ['img_convergent1', 'img_convergent2'],
//       'convergent2': ['img_convergent1', 'img_convergent2'],
//       'divergent1': ['img_divergent1'],
//       'transform1': ['img_transform1']
//     }
//   }
]

// sidebar navigation
var toolbarLinks = []
for (var i = 0; i < pageList.length; i++) {
  var url = '/iguana/' + pageList[i] + '.html'
  var text = pageList[i].split(/[_/]/)
  toolbarLinks.push({ text: text[text.length - 1], url: url })
}

// whiteboard videos
var videolist = ['Iguana_Pumice02', 'Iguana_PhyloTree02', 'Iguana_PhyloTree05', 'Iguana_Evolution02', 'Iguana_PhyloTree06']

// init controllers
var masterController = new IguanaMasterController(pageList, pageName)
masterController.init()

// overlay
overlay()

// Toolbar for side navigation
var toolbar = new IguanaToolbar(toolbarLinks, masterController)
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

  var avController = new IguanaAVController(player, avType, masterController)
  avController.start()
  avController.setBGTrack()
}

// Fieldbook
var currentPage = fbPages[pageName]
if (currentPage == null) {
  currentPage = 0
}

var fbController = new IguanaFieldbook(fbPages, 8, masterController)
fbController.init()
fbController.populateDivs()
fbController.start(currentPage)

// Dragdrop controller
var ddObj = ddList.filter(ddList => (ddList.name === pageName))
if (ddObj.length !== 0) {
  var dragdrop = new IguanaDragDrop(ddObj[0].ddDict, masterController)
  dragdrop.initDrops()
  dragdrop.initDrags()
}
