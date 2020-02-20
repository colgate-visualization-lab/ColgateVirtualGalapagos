'use strict'

import { AVController } from '../avcontroller.js'

class IslandLifeAVController extends AVController {
  constructor (player, avType, masterController) {
    super(player, avType, masterController)
    this.src = document.getElementById('player_src')
  }

  // overrides method in avcontroller, needed because of file structure of panotour submodule
  setTrack (filename) {
    console.log('setting track to: ' + filename)
    var prefix
    if (this.masterController.pageName.includes('panotour')) {
      prefix = '../../' + this.avType + '/' + this.masterController.moduleName + '/'
    } else {
      prefix = '../' + this.avType + '/' + this.masterController.moduleName + '/'
    }
    if (this.avType === 'video') {
      this.player.src = prefix + filename + '.mp4'
    } else if (this.avType === 'audio') {
      this.player.src = prefix + filename + '.mp3'
    } else {
      throw new Error('Source type unsupported')
    }
  }
}
export { IslandLifeAVController }
