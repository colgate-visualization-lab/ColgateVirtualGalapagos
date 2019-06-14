'use strict'
function init () {
  var overlayOn = document.getElementById('overlayOn')
  var overlayOff = document.getElementById('overlayOff')
  var overlay = document.getElementById('overlay')
  var overlayInner = document.getElementById('overlay_inner')

  if (overlayOn) {
    overlayOn.onclick = function () {
      switchOn()
    }
  }
  if (overlayOff) {
    overlayOff.onclick = function () {
      switchOff()
    }
  }
  // When the user clicks anywhere outside of the overlay, close it
  window.onclick = function (event) {
    if (event.target === overlay) {
      switchOff()
    }
  }

  function switchOn () {
    overlay.style.display = 'block'
    overlayInner.style.display = 'block'
  }

  function switchOff () {
    overlay.style.display = 'none'
    overlayInner.style.display = 'none'
  }
}

init()
