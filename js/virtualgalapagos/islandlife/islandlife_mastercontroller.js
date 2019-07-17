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
import { IslandLifeToolbar } from './islandlife_toolbar.js'

class IguanaMasterController extends MasterController {
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
var pageName = IguanaMasterController.grabPageName()

// List of pages in module in order
var pageList = ['panotour/IslandLifeCycle_Start01', 'IslandLifeCycle_IslandTimeline01', 
  'panotour/IslandLifeCycle_Fernandina01', 'panotour/IslandLifeCycle_Fernandina02', 
  'IslandLifeCycle_Fernandina03', 'panotour/IslandLifeCycle_Fernandina04', 'IslandLifeCycle_Fernandina05', 
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
var masterController = new IguanaMasterController(pageList, pageName)
masterController.init()

// overlay
overlay()

// Toolbar for side navigation
var toolbar = new IguanaToolbar(toolbarLinks, masterController)
toolbar.initToolbar()

<<<<<<< HEAD
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
=======
>>>>>>> a0673d39dc331429655995817ccd9f9e83c187fc
