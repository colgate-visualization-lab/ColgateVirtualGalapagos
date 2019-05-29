"use strict"

import {AudioPlayer} from '../audiocontroller.js';

class VolcanoAudioPlayer extends AudioPlayer{
    constructor(master_controller){
        super(master_controller);
        this.src = document.getElementById("player_src");
    }
    // if no track assigned, looks for track based on filename
    setBGTrack(){
        var bg_track = this.src.src
        if (bg_track == ''){
            var filename = window.location.pathname;
            filename = filename.split("/").pop();
            filename = filename.substr(0, filename.length-5);
            setTrack(filename);
        }
    }
    
    setTrack(filename){
        console.log("setting audio track to: " + filename);
        var prefix;
        if (grabPageName().includes("panotour")){
            prefix = "../../audio/volcano/";
        } else {
            prefix = "../audio/volcano/";
        }
        if (this.src.src != prefix + filename + ".mp3"){
            this.src.src = prefix + filename + ".mp3";
        }
    }
    
    grabPageName(){
        var path = window.location.pathname;
        path = path.split("/").splice(-2);
        if (path[0] != "volcano"){
          return path.join('/');
        } else {
          return path[1];
        }
    }
}
export {VolcanoAudioPlayer}

