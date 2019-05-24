"use strict"

import {AudioPlayer} from '../audiocontroller.js';

var src = document.getElementById("player_src");
setBGTrack(src);

var player = new AudioPlayer();
player.start();

// if no track assigned, looks for track based on filename
function setBGTrack(src){
    var bg_track = src.src
    if (bg_track == ''){
        var filename = window.location.pathname;
        filename = filename.split("/").pop();
        filename = filename.substr(0, filename.length-5);
        setTrack(filename);
    }
}

function setTrack(filename){
    console.log("setting audio track to: " + filename);
    var prefix;
    if (grabPageName().includes("panotour")){
        prefix = "../../audio/volcano/";
    } else {
        prefix = "../audio/volcano/";
    }
    if (src.src != prefix + filename + ".mp3"){
        src.src = prefix + filename + ".mp3";
    }
}

function grabPageName(){
    var path = window.location.pathname;
    path = path.split("/").splice(-2);
    if (path[0] != "volcano"){
      return path.join('/');
    } else {
      return path[1];
    }
}