'use strict'

import { AVController } from '../avcontroller.js'

class VolcanoAVController extends AVController {
  constructor (player, avType, masterController) {
    super(player, avType, masterController)
    this.src = document.getElementById('player_src')
  }
  // if no track assigned, looks for track based on filename
  setBGTrack () {
    var bgTrack = this.src.src
    if (bgTrack === '') {
      var filename = window.location.pathname
      filename = filename.split('/').pop()
      filename = filename.substr(0, filename.length - 5)
      this.setTrack(filename)
    }
  }

  setTrack (filename) {
    console.log('setting track to: ' + filename)
    var prefix
    if (VolcanoAVController.grabPageName().includes('panotour')) {
      prefix = '../../' + this.avType + '/volcano/'
    } else {
      prefix = '../' + this.avType + '/volcano/'
    }
    if (this.avType === 'video') {
      this.player.src = prefix + filename + '.mp4'
    } else if (this.avType === 'audio') {
      this.player.src = prefix + filename + '.mp3'
    } else {
      throw new Error('Source type unsupported')
    }
  }

  static grabPageName () {
    var path = window.location.pathname
    path = path.split('/').splice(-2)
    if (path[0] !== 'volcano') {
      return path.join('/')
    } else {
      return path[1]
    }
  }
}
export { VolcanoAVController }
