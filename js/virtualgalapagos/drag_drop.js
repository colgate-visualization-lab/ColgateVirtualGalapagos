"use strict"

// stores the currently active drag element
var label_cache;
// stores all drag and drop elements on page
var dropArray = [];
var dragArray = [];
// stores the drag and drop pairings
var ddDict;
var ddType;
var drag_count;

initDD();

function initDD(){
  initDrops();
  initDrags();
  addFlag("dragdrop");
}

// find all drop elements on page and add to drop array
function initDrops(){
  var drops = document.getElementsByClassName("dd-drop");
  for (i = 0; i < drops.length ; i++) { 
    dropArray.push(drops[i]);
    drops[i].ondrop = function () { 
      drop(event);
    };
    drops[i].ondragover = function () { 
      allowDrop(event);
    };
    drops[i].style = "cursor: pointer";
  } 
}

// find all drag elements on page and add to drag array
function initDrags(){
  var drags = document.getElementsByClassName("dd-drag");
  for (i = 0; i < drags.length ; i++) { 
    dragArray.push(drags[i]);
    drags[i].draggable = true;
    drags[i].ondragstart = function (){
      drag(event);
    }
    drags[i].style = "cursor: move; border:2px solid #343a40; border-radius: 10px;text-align: center;";
  } 
  // NEEDS REFACTOR
  drag_count = dragArray.length;
}

// required to drag/drop functionality
function allowDrop(ev) {
  ev.preventDefault();

}

// drag event required for drag/drop functionality
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  label_cache = ev.target;
}

// event for handling drops
// checks drag drop dictionary to identify matches
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var dropTargets = ddDict[label_cache.id];
  if (dropTargets.includes(ev.target.id)){
    dropMatch(label_cache, ev.target);
  } else {
    alert("That's not a match! Try again.");
  }
}

// called when a succesful drag/drop match happens
function dropMatch(drag, drop){
  alert("You got it!");
  drag.innerHTML = drag.innerHTML.strike();
  disableDrag(drag);
  disableDrop(drop);
}

// disables elements after they've been matched
function disableDrag(dragE){
  dragE.draggable = false;
  // check if user is done with DD module
  // could use refactor
  drag_count--;
  if (drag_count <= 0){
    flagDone("dragdrop");
  }
}

function disableDrop(dropE){
  dropE.ondrop = function () { 
  };
  dropE.ondragover = function () { 
  };
  dropE.style = "cursor: default";
}

// hardcoded implementation of drag drop matches for each page
function setDD(name){
  ddType = name;
  if (ddType == "map_ages"){
    ddDict = {
      "7000001": ["Fernandina", "Isabela"],
      "7000002": ["Fernandina", "Isabela"],
      "1700000": ["Santa Fe"],
      "2300000": ["Santa Cruz"],
      "3300000": ["Espanola"],
      "4000000": ["San Cristobal"],
    };
  } else if (ddType == "plates_game"){
    ddDict = {
      "convergent1": ["img_convergent1", "img_convergent2"],
      "convergent2": ["img_convergent1", "img_convergent2"],
      "divergent1": ["img_divergent1"],
      "transform1": ["img_transform1"],
    };
  }
}
