// stores the currently active drag element
var label_cache;
// stores all drag and drop elements on page
var dropArray = [];
var dragArray = [];
// stores the drag and drop pairings
var ddDict;

initDD();

function initDD(){
  initDrops();
  initDrags();
}

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

function initDrags(){
  var drags = document.getElementsByClassName("dd-drag");
  for (i = 0; i < drags.length ; i++) { 
    dragArray.push(drags[i]);
    drags[i].draggable = true;
    drags[i].ondragstart = function (){
      drag(event);
    }
    drags[i].style = "cursor: move; border-style: solid;";
  } 
}

function allowDrop(ev) {
  ev.preventDefault();

}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  label_cache = ev.target;
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  
  var dropTargets = ddDict[label_cache.id];
  if (dropTargets.includes(ev.target.id)){
    label_cache.innerHTML = label_cache.innerHTML + " - " + ev.target.id;
    disableDrag(label_cache);
    disableDrop(ev.target);
  }
}

function disableDrag(dragE){
  dragE.draggable = false;
}

function disableDrop(dropE){
  dropE.ondrop = function () { 
  };
  dropE.ondragover = function () { 
  };
  dropE.style = "cursor: default";
}

function setDD(name){
  if (name == "map_ages"){
    ddDict = {
      "7000001": ["Fernandina", "Isabela"],
      "7000002": ["Fernandina", "Isabela"],
      "800000": ["Pinta"],
      "1000000": ["Floreana"],
      "1700000": ["Santiago"],
      "2300000": ["Santa Cruz"],
      "3300000": ["Espanola"],
      "4000000": ["San Cristobal"],
    };
  }
}
