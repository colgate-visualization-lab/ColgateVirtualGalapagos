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


class DragDrop{
  constructor(ddDict) {
    if (!new.target){
      return new DragDrop(ddDict);
    }
    this.ddDict = ddDict; // all drag and drop pairings
    
    this.active_element;
    
    this.dropArray = [];
    this.dragArray = [];
    this.drag_count;
  }

  initDrops (){
    var drops = document.getElementsByClassName("dd-drop");
    for (var i = 0; i < drops.length ; i++) { 
      this.dropArray.push(drops[i]);
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
  initDrags (){
    var drags = document.getElementsByClassName("dd-drag");
    for (var i = 0; i < drags.length ; i++) { 
      this.dragArray.push(drags[i]);
      drags[i].draggable = true;
      drags[i].ondragstart = function (){
        drag(event);
      }
      drags[i].style = "cursor: move; border:2px solid #343a40; border-radius: 10px;text-align: center;";
    } 
    this.drag_count = this.dragArray.length;
  }

  // required to drag/drop functionality
  allowDrop(ev) {
    ev.preventDefault();
  }

  // drag event required for drag/drop functionality
  drag (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    this.active_element = ev.target;
  }

  // event for handling drops
  // checks drag drop dictionary to identify matches
  drop(ev) {
    ev.preventDefault();
    var dropTargets = this.ddDict[this.active_element.id];
    if (dropTargets.includes(ev.target.id)){
      dropMatch(this.active_element, ev.target);
    } else {
      alert("That's not a match! Try again.");
    }
  }

  // called when a succesful drag/drop match happens
  dropMatch(drag, drop){
    alert("You got it!");
    drag.innerHTML = drag.innerHTML.strike();
    disableDrag(drag);
    disableDrop(drop);
  }

  // disables elements after they've been matched
  disableDrag(dragE){
    dragE.draggable = false;
    // check if user is done with DD module
    this.drag_count--;
    if (this.drag_count <= 0){
      flagDone("dragdrop");
    }
  }

  disableDrop(dropE){
    dropE.ondrop = function () { 
    };
    dropE.ondragover = function () { 
    };
    dropE.style = "cursor: default";
  }

}