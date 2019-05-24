"use strict"

// Using this module
// 
// Initialize the object with the correct mappings of drag and drop elements of a page and call initDrops and initDrags methods.
// Example
// 
// dragdrop = new DragDrop(ddDict);
// dragdrop.initDrags();
// dragdrop.initDrops();
// 

// TODO: check adding 'dragdrop' flag

function DragDrop(ddDict) {
  if (!new.target){
    return new DragDrop(ddDict);
  }
  this.ddDict = ddDict; // all drag and drop pairings
  
  this.active_element;
  
  this.dropArray = [];
  this.dragArray = [];
  this.drag_count;

  this.initDrops = function (){
    var page_obj = this;
    var drops = document.getElementsByClassName("dd-drop");
    for (var i = 0; i < drops.length ; i++) { 
      this.dropArray.push(drops[i]);
      drops[i].ondrop = function () { 
        drop(event, page_obj);
      };
      drops[i].ondragover = function () { 
        allowDrop(event);
      };
      drops[i].style = "cursor: pointer";
    } 
  }

  // find all drag elements on page and add to drag array
  this.initDrags = function (){
    var page_obj = this;
    var drags = document.getElementsByClassName("dd-drag");
    for (var i = 0; i < drags.length ; i++) { 
      this.dragArray.push(drags[i]);
      drags[i].draggable = true;
      drags[i].ondragstart = function (){
        drag(event, page_obj);
      }
      drags[i].style = "cursor: move; border:2px solid #343a40; border-radius: 10px;text-align: center;";
    } 
    this.drag_count = this.dragArray.length;
  }

  // required to drag/drop functionality
  function allowDrop(ev) {
    ev.preventDefault();
  }

  // drag event required for drag/drop functionality
  function drag (ev, page_obj) {
    ev.dataTransfer.setData("text", ev.target.id);
    page_obj.active_element = ev.target;
  }

  // event for handling drops
  // checks drag drop dictionary to identify matches
  function drop(ev, page_obj) {
    ev.preventDefault();
    var dropTargets = page_obj.ddDict[page_obj.active_element.id];
    if (dropTargets.includes(ev.target.id)){
      dropMatch(page_obj.active_element, ev.target, page_obj);
    } else {
      alert("That's not a match! Try again.");
    }
  }

  // called when a succesful drag/drop match happens
  function dropMatch(drag, drop, page_obj){
    alert("You got it!");
    drag.innerHTML = drag.innerHTML.strike();
    disableDrag(drag, page_obj);
    disableDrop(drop);
  }

  // disables elements after they've been matched
  function disableDrag(dragE, page_obj){
    dragE.draggable = false;
    // check if user is done with DD module
    page_obj.drag_count--;
    if (page_obj.drag_count <= 0){
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

}