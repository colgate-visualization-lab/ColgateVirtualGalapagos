'use strict'

function overlay () {
  var overlayOn = document.getElementById('overlayOn')
  var overlayOff = document.getElementById('overlayOff')
  var overlay = document.getElementById('overlay')
  var overlayInner = document.getElementById('overlay_inner')
  var pageName = window.location.pathname
  pageName = pageName.split('/').splice(-2)
  pageName = pageName[1].split('.')
  if (pageName[0] === 'Currents_Hypothesis01') {
    var panoOverlay = true
  }
  if (panoOverlay) {
    overlayInner.style.padding = '10px'
    overlay.style.zIndex = '6'
    overlay.style.top = '25%'
    overlay.style.marginLeft = '5%'
    overlay.style.fontSize = '15px'
    overlay.style.background = 'antiquewhite'
  }

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

  function switchOn () {
    overlay.style.display = 'block'
    // overlayInner.style.display = 'block'
    if (panoOverlay) {
      overlay.style.position = 'absolute'
    }
  }

  function switchOff () {
    overlay.style.display = 'none'
    // overlayInner.style.display = 'none'
    if (panoOverlay) {
      overlay.style.position = 'none'
    }
  }
}
export { overlay }
