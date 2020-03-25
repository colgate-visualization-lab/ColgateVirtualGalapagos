'use strict'

import { MasterController } from '../mastercontroller.js'

function evolution (mastercontroller, avcontroller) {
  // TODO : Make sure user is done clicking through all areas before enabling map
  var mapEnabled = true
  var controller = mastercontroller
  var player = avcontroller
  init()

  function init () {
    // add flag to master controller system
    controller.addFlag('evolution')

    // setup listener for audio player
    document.getElementById('player').onended = function () {
      player.trackDone()
      // ppAudioDone()
    }

    // enable map if user already completed page previously
    if (MasterController.getItem('Evolution03') === 'true') {
      enableMap()
    }
    // event listeners
    document.getElementById('face').onclick = function () {
      adaptation('face')
    }
    document.getElementById('head').onclick = function () {
      adaptation('head')
    }
    document.getElementById('spikes').onclick = function () {
      adaptation('spikes')
    }
    document.getElementById('tail').onclick = function () {
      adaptation('tail')
    }
    document.getElementById('stomach').onclick = function () {
      adaptation('stomach')
    }
  }

  function adaptation (area) {
    if (mapEnabled) {
      document.getElementById('modalImage').src = '../images/iguana/' + area + '.png'
      document.getElementById('modalHeader').innerText = 'Adaptation of marine iguana: ' + area
      player.setTrack(area)
    } else {
      alert('Hold on! Finish listening to the audio first.')
    }
  }

  function enableMap () {
    mapEnabled = true
    MasterController.storeItem('Evolution03', 'true')
  }
}
export { evolution }
