"use strict"
//
// How to use this module
// 
// must include the following "import {AudioPlayer} from '../audiocontroller.js';" in the module's audiocontroller
// pages must have a background track assigned with id player_src
// 
// player = new AudioPlayer()
// player.start();

function AudioPlayer(){
  if (!new.target){
    return new AudioPlayer();
  }
  
  this.dev_mode = true; // add skip button

  this.paused = true; // autoplay audio
  this.playpause;
  var player = document.getElementById("player");
  player.load();
  var page_obj = this;

    // autoplay background audio
  player.oncanplay = function() {
    // playPause();
  };
    
    // setup listener for when audio is done playing
  player.onended = function() {
    trackDone();
  };

  // add audio controls (play/pause,rewind) to page
  // depends on page following layout system
  this.start = function (){
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
    
    if (dev_mode){
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
  function playPause (){
    if (page_obj.paused){
      play();
    } else {
      pause();
    }
  }

  function play(){
    player.play();
    page_obj.playpause.getElementsByTagName("i")[0].innerHTML = "pause";
    page_obj.paused = false;
  }

  function pause(){
    player.pause();
    page_obj.playpause.getElementsByTagName("i")[0].innerHTML = "play_arrow";
    page_obj.paused = true;
  }

  function rewind(time){
    var curr_time = player.currentTime;
    player.currentTime = Math.max(curr_time - time, 0);   // prevent underflow
  }

  // track finish event listener, clears master controller flag
  function trackDone(){
    flagDone("audio");
    playPause();
    rewind(player.duration);
  }
}

export{AudioPlayer};