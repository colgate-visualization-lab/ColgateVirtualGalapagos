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
import { CurrentsAVController } from './currents_avcontroller.js'
import { CurrentsFieldbook } from './currents_fieldbook.js'
import { CurrentsToolbar } from './currents_toolbar.js'

class IguanaMasterController extends MasterController {
  constructor (pageList, pageName) {
    super(pageList, pageName, 'currents')
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
    if (path[0] !== 'currents') { // submodules in the this module
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
var pageList = ['panotour/Currents_Intro01', 'Currents_Intro02', 'Currents_HowCurrentsFormWhiteboard01', 'Currents_MYOCDemo01', 'Currents_EndIntro01', 'panotour/Currents_ClimateObs01', 'panotour/Currents_ClimateObs02', 'panotour/Currents_ClimateData01', 'panotour/Currents_ClimateData02', 'panotour/Currents_ClimateData03', 'Currents_ClimateData04', 'Currents_GraphWhiteboard01', 'panotour/Currents_ClimateData05', 'panotour/Currents_ClimateObs03', 'panotour/Currents_Hypothesis01', 'Currents_ClimateWhiteboard01', 'panotour/Currents_EndClimate01', 'Currents_Upwelling01', 'Currents_UpwellingWhiteboard01', 'Currents_ElNino01', 'panotour/Currents_EndElNino01', 'Currents_Migration01', 'Currents_Migration03', 'Currents_Tracking01', 'Currents_Tracking02', 'Currents_Tracking03', 'Currents_EndTurtles01', 'Currents_TempDemo01', 'Currents_EndDemo01', 'Currents_EndModule01']
// Pages and associated fieldbook pages
var fbPages = {
  'Currents_Intro02': 2,
  'Currents_HowCurrentsFormWhiteboard01': 2,
  'panotour/Currents_ClimateObs01': 3,
  'panotour/Currents_ClimateObs02': 3,
  'panotour/Currents_ClimateData01': 3,
  'panotour/Currents_ClimateData02': 4,
  'panotour/Currents_ClimateData03': 4,
  'Currents_ClimateData04': 4,
  'Currents_GraphWhiteboard01': 5,
  'panotour/Currents_ClimateData05': 5,
  'panotour/Currents_ClimateObs03': 5,
  'panotour/Currents_Hypothesis01': 5,
  'Currents_ClimateWhiteboard01': 5,
  'panotour/Currents_EndClimate01': 5,
  'Currents_Upwelling01': 6,
  'Currents_UpwellingWhiteboard01': 6,
  'Currents_ElNino01': 7,
  'panotour/Currents_EndElNino01': 7,
  'Currents_Migration01': 8,
  'Currents_Migration03': 8,
  'Currents_Tracking01': 8,
  'Currents_Tracking03': 8,
  'Currents_EndTurtles01': 8
}

// sidebar navigation
var toolbarLinks = []
for (var i = 0; i < pageList.length; i++) {
  var url = '/currents/' + pageList[i] + '.html'
  var text = pageList[i].split(/[_/]/)
  toolbarLinks.push({ text: text[text.length - 1], url: url })
}

// whiteboard videos
var videolist = ['Currents_HowCurrentsFormWhiteboard01', 'Currents_GraphWhiteboard01', 'Currents_UpwellingWhiteboard01', 'Currents_ClimateWhiteboard01']

// init controllers
var masterController = new IguanaMasterController(pageList, pageName)
masterController.init()

// overlay
overlay()

// Toolbar for side navigation
var toolbar = new CurrentsToolbar(toolbarLinks, masterController)
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

  var avController = new CurrentsAVController(player, avType, masterController)
  avController.start()
  avController.setBGTrack()
}

// Fieldbook
var currentPage = fbPages[pageName]
if (currentPage == null) {
  currentPage = 0
}

var fbController = new CurrentsFieldbook(fbPages, 9, masterController)
fbController.init()
fbController.populateDivs()
fbController.start(currentPage)
