'use strict'

import { Toolbar } from './toolbar.js'
import { MasterController } from './mastercontroller.js'

var masterController = new MasterController([], '', '')
var mysteries = {
  mystery1: [
    { text: 'volcano', url: 'volcano/Volcano_TerrainMap01.html' },
    { text: 'iguana', url: 'iguana/panotour/Iguana_Endemic01.html' }
  ]
}
var toolbarLinks = getToolbarLinks()

var toolbar = new Toolbar(toolbarLinks, masterController)
toolbar.initToolbar()

function getToolbarLinks () {
  
}
