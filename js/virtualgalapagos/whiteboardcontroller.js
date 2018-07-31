// TEMPORARY CODE, THIS CAN ALL BE MERGED WITH AUDIOCONTROLLER 

var dev_mode = true;
var paused = false;
var player;
var src;
var playpause;

init();

function init(){
  // setup global variables
  player = document.getElementById("player");
  src = document.getElementById("player_src");
  
  //setup audio controls
  setupControls();
  
  // autoplay background audio
  player.oncanplay = function() {
    playPause();
  };
  
  // setup listener for when audio is done playing
  player.onended = function() {
    trackDone();
  };
}

function setupControls(){
  var playpause_btn = document.createElement('BUTTON');
  playpause_btn.className = 'btn btn-dark';
  // replace manual style assignment with proper CSS class
  playpause_btn.onclick = function () { 
      playPause();
  };
  var icon = document.createElement("i");
  icon.className = "material-icons";
  icon.innerHTML = "pause";
  playpause_btn.appendChild(icon);
  document.getElementById("audio_control").appendChild(playpause_btn);
  
  var rewind_btn = document.createElement('BUTTON');
  rewind_btn.className = 'btn btn-dark';
  // replace manual style assignment with proper CSS class
  rewind_btn.style = "margin-left: 5px;"
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
    // replace manual style assignment with proper CSS class
    skip_btn.style = "margin-left: 5px;"
    skip_btn.onclick = function () { 
        player.currentTime = player.duration-1;
    };
    icon = document.createElement("i");
    icon.className = "material-icons";
    icon.innerHTML = "skip_next";
    skip_btn.appendChild(icon);
    document.getElementById("audio_control").appendChild(skip_btn); 
  }
  
  // set global variables
  playpause = playpause_btn;
}

// toggle play/pause
function playPause(){
  if (paused){
    play();
  } else {
    pause();
  }
  paused = !paused;
}

function play(){
  player.play();
  playpause.getElementsByTagName("i")[0].innerHTML = "pause";
}

function pause(){
  player.pause();
  playpause.getElementsByTagName("i")[0].innerHTML = "play_arrow";
}

function rewind(time){
  var curr_time = player.currentTime;
  // avoid underflow
  player.currentTime = Math.max(curr_time - time, 0);
}

function trackDone(){
  pageDone("whiteboard");
  rewind(player.duration);
}