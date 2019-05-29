"use strict"
import {MasterController} from './mastercontroller.js';
//
// How to use this module
// HTML page must use the layout template
// must include the following "import {AudioPlayer} from 'FILEPATH/audiocontroller.js';" in the module's audiocontroller
// pages must have a background track assigned with id player_src
// 
// player = new AudioPlayer()
// player.start();

class AudioPlayer{
  constructor(mastercontroller){
    if (!mastercontroller instanceof MasterController){
      throw "MasterController must be instantiated";
    }
    if (!new.target){
      return new AudioPlayer();
    }
    this.mastercontroller = mastercontroller;
  
    this.paused = true; // autoplay audio
    this.playpause;
    var player = document.getElementById("player");
    player.load();
  
      // autoplay background audio
    player.oncanplay = function() {
      // playPause();
    };
      
      // setup listener for when audio is done playing
    player.onended = function() {
      trackDone();
    };
  }
  
  // add audio controls (play/pause,rewind) to page
  // depends on page following layout system
  start (){
    var playpause_btn = document.createElement('BUTTON');
    playpause_btn.className = 'btn btn-dark';
    playpause_btn.onclick = function () { 
        playPause();
    };
    var icon = document.createElement("i");
    icon.className = "material-icons";
    icon.innerHTML = "play_arrow";
    playpause_btn.appendChild(icon);
    document.getElementById("audio_control").appendChild(playpause_btn);
    
    var rewind_btn = document.createElement('BUTTON');
    rewind_btn.className = 'btn btn-dark';
    rewind_btn.onclick = function () { 
        rewind(10);
    };
    icon = document.createElement("i");
    icon.className = "material-icons";
    icon.innerHTML = "replay_10";
    rewind_btn.appendChild(icon);
    document.getElementById("audio_control").appendChild(rewind_btn);
    
    if (this.dev_mode){
      var skip_btn = document.createElement('BUTTON');
      skip_btn.className = 'btn btn-dark';
      skip_btn.onclick = function () { 
        if (player.currentTime > 0) {
          player.currentTime = player.duration-1;
        }
      };
      icon = document.createElement("i");
      icon.className = "material-icons";
      icon.innerHTML = "skip_next";
      skip_btn.appendChild(icon);
      document.getElementById("audio_control").appendChild(skip_btn); 
    }
    
    // set global variables
    this.playpause = playpause_btn;
  }

  // toggle play/pause
  playPause (){
    if (this.paused){
      play();
    } else {
      pause();
    }
  }

  play(){
    player.play();
    this.playpause.getElementsByTagName("i")[0].innerHTML = "pause";
    this.paused = false;
  }

  pause(){
    player.pause();
    this.playpause.getElementsByTagName("i")[0].innerHTML = "play_arrow";
    this.paused = true;
  }

  static rewind(time){
    var curr_time = player.currentTime;
    player.currentTime = Math.max(curr_time - time, 0);   // prevent underflow
  }

  // track finish event listener, clears master controller flag
  trackDone(){
    this.mastercontroller.flagDone("audio");
    playPause();
    rewind(player.duration);
  }
}

export{AudioPlayer};