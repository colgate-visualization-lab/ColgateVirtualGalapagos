"use strict"

// needs elegant way to check button status when bg audio finishes playing
function terrainmap(mastercontroller, audiocontroller) {
  var ferd_click = false;
  var sc_click = false;
  var opt_on = false;
  var controller = mastercontroller;
  var player = audiocontroller;

  init();


  function init(){
    // add flag to master controller system
    controller.addFlag("island_clicks");
    
    // setup listeners
    document.getElementById("player").onended = function() {
      player.trackDone();
      enableOptional();
    };

    document.getElementById("opt_audio").onclick = function(){
      narrationOn();
    };

    document.getElementById("on_fernandina").onclick = function(){
      on("fernandina");
    };

    document.getElementById("on_santacruz").onclick = function(){
      on("santacruz");
    };

    document.getElementById("off_santacruz").onclick = function(){
      off("santacruz");
    };

    document.getElementById("off_santacruz").onclick = function(){
      off("santacruz");
    };
    
    // enable optional button if user has already completed page
    if (localStorage.getItem("TerrainMap03") == "true") {
      document.getElementById("opt_audio").disabled = false;
    }
  }

  // enable overlay and audio if optional narration is on
  function on(name) {
    if (name=="on_santacruz"){
      if (opt_on){
        player.setTrack("Volcano_SantaCruz01_01");
        player.play();
      }
      sc_click = true;
    } else if (name=="on_fernandina"){
      ferd_click = true;
      if (opt_on){
        player.setTrack("Volcano_Fernandina01_opt");
        player.play();
      }
    }  
    document.getElementById("overlay").style.display = "block";
    document.getElementById(name + "_inner").style.display = "block";
  }

  function off(name) {
    var name = name.split("_")[1];
    document.getElementById("overlay").style.display = "none";
    document.getElementById(name + "_inner").style.display = "none";
    if (sc_click && ferd_click){
      controller.flagDone("island_clicks");
      enableOptional();
    }
  }

  function enableOptional(){
    if (controller.done_flags["island_clicks"] && controller.done_flags["audio"]){
      document.getElementById("opt_audio").disabled = false;
      localStorage.setItem("TerrainMap03", "true");
    }
  }

  function narrationOn(){
    opt_on = true;
    player.setTrack("Volcano_TerrainMap03_opt");
    player.play();
  }
}