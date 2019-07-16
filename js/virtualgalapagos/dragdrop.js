'use strict'

// Using this module
//
// Initialize the object with the correct mappings of drag and drop elements of a page and an instance of MasterController
// Call initDrops and initDrags methods.
//
// Example
//
// dragdrop = new DragDrop(ddDict, mastercontroller);
// dragdrop.initDrags();
// dragdrop.initDrops();
//
import { MasterController } from './mastercontroller.js'

class DragDrop {
  constructor (ddDict, mastercontroller) {
    if (!(mastercontroller instanceof MasterController)) {
      throw new Error('MasterController must be instantiated')
    }
    if (!new.target) {
      return new DragDrop(ddDict)
    }
    this.mastercontroller = mastercontroller
    this.ddDict = ddDict // all drag and drop pairings

    this.activeElement = null

    this.dropArray = []
    this.dragArray = []
    this.dragCount = 0
  }

  initDrops () {
    var pageObj = this
    var drops = document.getElementsByClassName('dd-drop')
    for (var i = 0; i < drops.length; i++) {
      this.dropArray.push(drops[i])
      drops[i].ondrop = function () {
        DragDrop.drop(event, pageObj)
      }
      drops[i].ondragover = function () {
        DragDrop.allowDrop(event)
      }
      drops[i].style = 'cursor: pointer'
    }
  }

  // find all drag elements on page and add to drag array
  initDrags () {
    var pageObj = this
    var drags = document.getElementsByClassName('dd-drag')
    for (var i = 0; i < drags.length; i++) {
      this.dragArray.push(drags[i])
      drags[i].draggable = true
      drags[i].ondragstart = function () {
        DragDrop.drag(event, pageObj)
      }
      drags[i].style = 'cursor: move; border:2px solid #343a40; border-radius: 10px;text-align: center;'
    }
    this.dragCount = this.dragArray.length
  }

  // required to drag/drop functionality
  static allowDrop (ev) {
    ev.preventDefault()
  }

  // drag event required for drag/drop functionality
  static drag (ev, pageObj) {
    ev.dataTransfer.setData('text', ev.target.id)
    pageObj.activeElement = ev.target
  }

  // event for handling drops
  // checks drag drop dictionary to identify matches
  static drop (ev, pageObj) {
    ev.preventDefault()
    var dropTargets = pageObj.ddDict[pageObj.activeElement.id]
    if (dropTargets.includes(ev.target.id)) {
      pageObj.dropMatch(pageObj.activeElement, ev.target)
    } else {
      alert("That's not a match! Try again.")
    }
  }

  // called when a succesful drag/drop match happens
  dropMatch (drag, drop) {
    alert('You got it!')
    drag.innerHTML = drag.innerHTML.strike()
    this.disableDrag(drag)
    this.disableDrop(drop)
  }

  // disables elements after they've been matched
  disableDrag (dragE) {
    dragE.draggable = false
    // check if user is done with DD module
    this.dragCount--
    if (this.dragCount <= 0) {
      this.mastercontroller.flagDone('dragdrop')
    }
  }

  disableDrop (dropE) {
    dropE.ondrop = function () {
    }
    dropE.ondragover = function () {
    }
    dropE.style = 'cursor: default'
  }
}
export { DragDrop }
