"use strict"
import {MasterController} from './mastercontroller.js';
//
// How to use this module
// HTML page must use the layout template
// must include the following "import {AVController} from 'FILEPATH/avcontroller.js';" in the module's avcontroller
// pages must have a background track assigned with id player_src
// 
// player = new AVController()
// player.start();

class AVController{
  constructor(player, mastercontroller){
    if (!mastercontroller instanceof MasterController){
      throw "MasterController must be instantiated";
    }
    if (!new.target){
      return new AVController();
    }
    this.mastercontroller = mastercontroller;
  
    this.dev_mode = mastercontroller.dev_mode;
    this.paused = true; // autoplay audio
    this.playpause;
    this.player = player; 
    this.player.load();
  
    var avcontroller = this; // needed to setup listeners
      // autoplay background audio
    // this.player.oncanplay = function() {
    //   AVController.playPause(avcontroller);
    // };

    // setup listener for when audio is done playing
    this.player.onended = function() {
      avcontroller.trackDone();
    };
  }
  // add audio controls (play/pause,rewind) to page
  // depends on page following layout system
  start (){
    var playerobj = this; // for use in event handlers
    var playpause_btn = document.createElement('BUTTON');
    playpause_btn.className = 'btn btn-dark';
    playpause_btn.onclick = function (){
      AVController.playPause(playerobj);
    };
    var icon = document.createElement("i");
    icon.className = "material-icons";
    icon.innerHTML = "play_arrow";
    playpause_btn.appendChild(icon);
    document.getElementById("av_control").appendChild(playpause_btn);
    
    var rewind_btn = document.createElement('BUTTON');
    rewind_btn.className = 'btn btn-dark';
    rewind_btn.onclick = function () { 
        AVController.rewind(10, playerobj);
    };
    icon = document.createElement("i");
    icon.className = "material-icons";
    icon.innerHTML = "replay_10";
    rewind_btn.appendChild(icon);
    document.getElementById("av_control").appendChild(rewind_btn);
    
    if (this.dev_mode){
      var skip_btn = document.createElement('BUTTON');
      skip_btn.className = 'btn btn-dark';
      skip_btn.onclick = function () { 
        if (playerobj.player.currentTime > 0) {
          playerobj.player.currentTime = playerobj.player.duration-1;
        }
      };
      icon = document.createElement("i");
      icon.className = "material-icons";
      icon.innerHTML = "skip_next";
      skip_btn.appendChild(icon);
      document.getElementById("av_control").appendChild(skip_btn); 
    }
    
    this.playpause = playpause_btn;
  }

  // toggle play/pause
  static playPause (obj){
    if (obj.paused){
      obj.play();
    } else {
      obj.pause();
    }
  }

  play(){
    this.playpause.getElementsByTagName("i")[0].innerHTML = "pause";
    this.paused = false;
    this.player.play();
  }

  pause(){
    this.playpause.getElementsByTagName("i")[0].innerHTML = "play_arrow";
    this.paused = true;
    this.player.pause();
  }

  static rewind(time, playerobj){
    var curr_time = playerobj.player.currentTime;
    playerobj.player.currentTime = Math.max(curr_time - time, 0);   // prevent underflow
  }

  // track finish event listener, clears master controller flag
  trackDone(){
    this.mastercontroller.flagDone("audio");
    AVController.playPause(this);
    AVController.rewind(this.player.duration, this);
  }
}

export{AVController};