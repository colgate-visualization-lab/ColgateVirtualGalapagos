// 1=default,2=wrong,3=right
var state = 1;
var mapEnabled = false;
var map;
init();

function init(){
  // add flag to master controller system
  addFlag("plumeplacement");
  
  // hide right/wrong images
  document.getElementById("pp_yes").style.display = "none";
  document.getElementById("pp_no").style.display = "none";
  
  // setup listener for audio player
  document.getElementById("player").onended = function() {
    trackDone();
    ppAudioDone();
  };
  
  // enable map if user already completed page previously
  if (localStorage.getItem("PlumePlacement01") == "true"){
     enableMap();
  }
  
  // need a way to improve visual feedback on when map is enabled/disabled
  // currently using alerts which are fine but not ideal
}


// trigger when user selects left option
function leftSelect(){
  if (mapEnabled){
    setState(3);
  } else {
    alert("Hold on! Finish listening to the audio first.");
  }
}

// trigger when user selects right option
function rightSelect(){
  if (mapEnabled){
    setState(2);
  } else {
    alert("Hold on! Finish listening to the audio first.");
  }
}

function enableMap(){
  mapEnabled = true;
  localStorage.setItem("PlumePlacement01", "true");
  document.getElementsByName("image-map")[0].style.display = "block;";
}

function setState(num){
  state = num;
  if (state == 1){
    document.getElementById("pp").style.display = "block";
    document.getElementById("pp_no").style.display = "none";
    document.getElementById("pp_yes").style.display = "none";
    setTrack("Volcano_PlumePlacement01");
  } else if (state == 2) {
    document.getElementById("pp").style.display = "none";
    document.getElementById("pp_no").style.display = "block";
    document.getElementById("pp_yes").style.display = "none";
    setTrack("Volcano_PlumeNo01");
    play();
  } else if (state == 3) {
    document.getElementById("pp").style.display = "none";
    document.getElementById("pp_no").style.display = "none";
    document.getElementById("pp_yes").style.display = "block";
    setTrack("Volcano_PlumeYes01");
    play();
  }
}

function ppAudioDone(){
  if (state == 1 && !mapEnabled){
    enableMap();
  } else if (state == 2){
    setState(1);    
  } else if (state == 3){
    flagDone("plumeplacement");
  }
}
