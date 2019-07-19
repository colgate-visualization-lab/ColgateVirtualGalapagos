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
import { IslandLifeAVController } from './islandlife_avcontroller.js'
import { IslandLifeFieldbook } from './islandlife_fieldbook.js'
import { IslandLifeToolbar } from './islandlife_toolbar.js'



class IslandLifeMasterController extends MasterController {
  constructor (pageList, pageName) {
    super(pageList, pageName, 'islandlife')
  }
  init () {
    super.init()
  }

  static grabPageName () {
    var path = window.location.pathname
    path = path.split('/').splice(-2)
    if (path[0] !== 'islandlife') { // submodules in the this module
      path = path.join('/')
    } else {
      path = path[1]
    }
    path = path.split('.')
    return path[0]
  }
}

// Mastercontroller
var pageName = IslandLifeMasterController.grabPageName()

// List of pages in module in order
var pageList = ['panotour/IslandLifeCycle_Start01', 'IslandLifeCycle_IslandTimeline01', 
  'panotour/IslandLifeCycle_Fernandina01', 'panotour/IslandLifeCycle_Fernandina02', 
  'IslandLifeCycle_Fernandina03', 'panotour/IslandLifeCycle_Fernandina04', 'IslandLifeCycle_Fernandina05', 
  'IslandLifeCycle_Colonization01', 'panotour/IslandLifeCycle_Fernandina06', 'panotour/IslandLifeCycle_SantaCruz01', 
  'IslandLifeCycle_SantaCruz360s01', 'panotour/IslandLifeCycle_Espanola01', 'panotour/IslandLifeCycle_Espanola03',
  'panotour/IslandLifeCycle_ContractionWhiteboard01', 'IslandLifeCycle_Espanola02',
  'IslandLifeCycle_SeamountsWhiteboard01', 'IslandLifeCycle_SeamountsIdentification01', 'IslandLifeCycle_Seamounts04', 
  'IslandLifeCycle_Seamounts02']
// Pages and associated fieldbook pages

// sidebar navigation
var toolbarLinks = []
for (var i = 0; i < pageList.length; i++) {
  var url = '/islandlife/' + pageList[i] + '.html'
  var text = pageList[i].split(/[_/]/)
  toolbarLinks.push({ text: text[text.length - 1], url: url })
}


// init controllers
var masterController = new IslandLifeMasterController(pageList, pageName)
masterController.init()

// overlay
overlay()

// Toolbar for side navigation
var toolbar = new IslandLifeToolbar(toolbarLinks, masterController)
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

  var avController = new IslandLifeAVController(player, avType, masterController)
  avController.start()
  avController.setBGTrack()
}

// Fieldbook
var currentPage = fbPages[pageName]
if (currentPage == null) {
  currentPage = 0
}

var fbController = new IslandLifeFieldbook(fbPages, 8, masterController)
fbController.init()
fbController.populateDivs()
fbController.start(currentPage)
