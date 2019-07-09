'use strict'

import { MasterController } from '../mastercontroller.js'

function evolution (mastercontroller, avcontroller) {
  var mapEnabled = false
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
    console.log(area)
    // if (mapEnabled) {
    //   document.getElementById('modal')
    //   player.setTrack(area)
    // } else {
    //   alert('Hold on! Finish listening to the audio first.')
    // }
  }

  function enableMap () {
    mapEnabled = true
    MasterController.storeItem('PlumePlacement01', 'true')
    document.getElementsByName('image-map')[0].style.display = 'block;'
  }

  function ppAudioDone () {
    if (state === 1 && !mapEnabled) {
      enableMap()
    } else if (state === 2) {
      setState(1)
    } else if (state === 3) {
      controller.flagDone('plumeplacement')
    }
  }
}
export { evolution }
