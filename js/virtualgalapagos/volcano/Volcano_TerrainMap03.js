'use strict'

import { MasterController } from '../mastercontroller.js'

// needs elegant way to check button status when bg audio finishes playing
function terrainmap (mastercontroller, avcontroller) {
  var ferdClick = false
  var scClick = false
  var optionalOn = false
  var controller = mastercontroller
  var player = avcontroller
  var toggleBtn = document.getElementById('toggle_btn')

  init()

  function init () {
    // add flag to master controller system
    controller.addFlag('island_clicks')

    // setup listeners
    document.getElementById('player').onended = function () {
      player.trackDone()
      enableOptional()
    }
    toggleBtn.onclick = function () {
      toggleNarration()
    }

    document.getElementById('on_fernandina').onclick = function () {
      on('fernandina')
    }

    document.getElementById('on_santacruz').onclick = function () {
      on('santacruz')
    }

    document.getElementById('off_fernandina').onclick = function () {
      off('fernandina')
    }

    document.getElementById('off_santacruz').onclick = function () {
      off('santacruz')
    }
  }

  // enable overlay and audio if optional narration is on
  function on (name) {
    if (name === 'santacruz') {
      scClick = true
      if (optionalOn) {
        player.setTrack('Volcano_SantaCruz01')
        player.play()
      }
    } else if (name === 'fernandina') {
      ferdClick = true
      if (optionalOn) {
        player.setTrack('Volcano_Fernandina01')
        player.play()
      }
    }
    document.getElementById('overlay').style.display = 'block'
    document.getElementById(name + '_inner').style.display = 'block'
  }

  function off (name) {
    document.getElementById('overlay').style.display = 'none'
    document.getElementById(name + '_inner').style.display = 'none'
    if (scClick && ferdClick) {
      controller.flagDone('island_clicks')
      enableOptional()
    }
  }

  function enableOptional () {
    if (controller.done_flags['island_clicks'] && controller.done_flags['audio_video']) {
      MasterController.storeItem('TerrainMap03', 'true')
    }
  }
  function toggleNarration () {
    if (optionalOn) {
      toggleBtn.firstChild.textContent = 'check_box_outline_blank'
    } else {
      toggleBtn.firstChild.textContent = 'check_box'
    }
    optionalOn = !optionalOn
  }
}

export { terrainmap }
