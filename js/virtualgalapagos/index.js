'use strict'

import { Toolbar } from './toolbar.js'
import { MasterController } from './mastercontroller.js'

function init () {
  var masterController = new MasterController([], '', '')
  var toolbarLinks = []
  var modules
  var moduleMappings = {
    'volcano': 'volcano/Volcano_TerrainMap01.html',
    'iguana': 'iguana/panotour/Iguana_Endemic01.html'
  }
  getModules('mystery1')
  getToolbarLinks(modules)
  var toolbar = new Toolbar(toolbarLinks, masterController)
  toolbar.initToolbar()
  function getToolbarLinks (modules) {
    modules.forEach(element => {
      toolbarLinks.push({ text: element, url: moduleMappings[element] })
    })
  }
  function getModules (mystery) {
    switch (mystery) {
      case 'mystery1':
        modules = ['volcano', 'iguana']
        break
      case 'mystery2':
        modules = ['volcano']
        break
      default:
        modules = []
    }
  }

  document.getElementById('mystery1').onclick() = function () {
  getModules('mystery1')
  }

document.getElementById('mystery2').onclick() = function () {
  getModules('mystery2')
}
}
$(init)
