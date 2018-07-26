// PAGES SHOULD ALWAYS HAVE BG TRACK ASSIGNED OR AN AUDIO TRACK OF SAME NAME AS PARENT PAGE

var paused = false;
var bg_track;
var player;
var src;
var playpause;

init();

function init(){
  // setup global variables
  player = document.getElementById("player");
  src = document.getElementById("player_src");
  bg_track = src.src;
  
  // grab fallback BG track if none given
  setBGTrack();
  
  //setup audio controls
  setupControls();
  
  // autoplay background audio
  playPause();
}


// doesn't work
function initAudioPlayer(){
  player = document.createElement("audio");
  player.id = "player";
  src = document.createElement("source");
  src.id = "player_src";
  src.type = "audio/mpeg";
  player.appendChild(src);
  document.getElementById("main").appendChild(src);
  bg_track = src.src;
}

// if no track assigned, looks for track based on filename
function setBGTrack(){
  if (bg_track = ' '){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    bg_track = page.substr(0, page.length-5);
    setTrack(bg_track);
  }
}

function setupControls(){
  var playpause_btn = document.createElement('BUTTON');
  playpause_btn.className = 'btn btn-dark';
  playpause_btn.appendChild(document.createTextNode('Pause'))
  // replace manual style assignment with proper CSS class
  playpause_btn.style = "width: 100px;"
  playpause_btn.onclick = function () { 
      playPause();
  };
  document.getElementById("main").appendChild(playpause_btn);
  
  var rewind_btn = document.createElement('BUTTON');
  rewind_btn.className = 'btn btn-dark';
  rewind_btn.appendChild(document.createTextNode('Rewind 10s'))
  // replace manual style assignment with proper CSS class
  rewind_btn.style = "width: 100px; margin-left: 5px;"
  rewind_btn.onclick = function () { 
      rewind(10);
  };
  document.getElementById("main").appendChild(rewind_btn);
  
  // set global variables
  playpause = playpause_btn;
}


// toggle play/pause
function playPause(){
  if (paused){
    play();
    playpause.innerHTML = "Pause";
  } else {
    pause();
    playpause.innerHTML = "Play";
  }
  paused = !paused;
}

function play(){
  player.play();
}

function pause(){
  player.pause();
}

function rewind(time){
  var curr_time = player.currentTime;
  // avoid underflow
  player.currentTime = Math.max(curr_time - time, 0);
}

function setTrack(filename){
  src.src = "../audio/volcano/" + filename + ".mp3";
  player.load();
}