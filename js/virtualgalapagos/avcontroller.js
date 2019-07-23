'use strict'
// import { MasterController } from './masterController.js'
//
// How to use this module
// HTML page must use the layout template
// must include the following "import {AVController} from 'FILEPATH/avcontroller.js';" in the module's avcontroller
// pages must have a background track assigned with id player_src
//
// player = new AVController()
// player.start();

class AVController {
  constructor (player, avType, masterController) {
    if (!new.target) {
      return new AVController()
    }
    this.avType = avType
    this.masterController = masterController
    this.dev_mode = masterController.dev_mode
    this.paused = true // autoplay audio
    this.playPause = null
    this.player = player
    this.player.load()

    var avcontroller = this // needed to setup listeners
    // autoplay background audio
    // this.player.oncanplay = function() {
    //   AVController.playPause(avcontroller);
    // };

    // setup listener for when audio is done playing
    this.player.onended = function () {
      avcontroller.trackDone()
    }
    this.masterController.addFlag('audio_video')
  }
  // add audio controls (play/pause,rewind) to page
  // depends on page following layout system
  start () {
    var playerObj = this // for use in event handlers
    var playPauseBtn = document.createElement('BUTTON')
    playPauseBtn.className = 'btn btn-dark'
    playPauseBtn.onclick = function () {
      AVController.playPause(playerObj)
    }
    var icon = document.createElement('i')
    icon.className = 'material-icons'
    icon.innerHTML = 'play_arrow'
    playPauseBtn.appendChild(icon)

    var rewindBtn = document.createElement('BUTTON')
    rewindBtn.className = 'btn btn-dark'
    rewindBtn.onclick = function () {
      AVController.rewind(10, playerObj)
    }
    icon = document.createElement('i')
    icon.className = 'material-icons'
    icon.innerHTML = 'replay_10'
    rewindBtn.appendChild(icon)
    document.getElementById('av_control').appendChild(rewindBtn)
    document.getElementById('av_control').appendChild(playPauseBtn)

    if (this.dev_mode) {
      var skipBtn = document.createElement('BUTTON')
      skipBtn.className = 'btn btn-dark'
      skipBtn.onclick = function () {
        if (playerObj.player.currentTime > 0) {
          playerObj.player.currentTime = playerObj.player.duration - 1
        }
      }
      icon = document.createElement('i')
      icon.className = 'material-icons'
      icon.innerHTML = 'skip_next'
      skipBtn.appendChild(icon)
      document.getElementById('av_control').appendChild(skipBtn)
    }

    this.playPause = playPauseBtn
  }

  // toggle play/pause
  static playPause (obj) {
    if (obj.paused) {
      obj.play()
    } else {
      obj.pause()
    }
  }

  play () {
    this.playPause.getElementsByTagName('i')[0].innerHTML = 'pause'
    this.paused = false
    this.player.play()
  }

  pause () {
    this.playPause.getElementsByTagName('i')[0].innerHTML = 'play_arrow'
    this.paused = true
    this.player.pause()
  }

  static rewind (time, playerObj) {
    var currentTime = playerObj.player.currentTime
    playerObj.player.currentTime = Math.max(currentTime - time, 0) // prevent underflow
  }

  // track finish event listener, clears master controller flag
  trackDone () {
    this.masterController.flagDone('audio_video')
    AVController.playPause(this)
    AVController.rewind(this.player.duration, this)
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
    var prefix = '../' + this.avType + '/' + this.masterController.moduleName + '/'
    if (this.avType === 'video') {
      this.player.src = prefix + filename + '.mp4'
    } else if (this.avType === 'audio') {
      this.player.src = prefix + filename + '.mp3'
    } else {
      throw new Error('Source type unsupported')
    }
  }
}

export { AVController }
