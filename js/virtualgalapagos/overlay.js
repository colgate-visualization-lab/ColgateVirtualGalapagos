'use strict'

document.getElementById('overlayOn').onclick = function () {
  overlayOn()
}
// todo: Volcano_TerrainMap02 does not have an off button.
document.getElementById('overlayOff').onclick = function () {
  overlayOff()
}

function overlayOn () {
  document.getElementById('overlay').style.display = 'block'
  document.getElementById('overlay_inner').style.display = 'block'
}

function overlayOff () {
  document.getElementById('overlay').style.display = 'none'
  document.getElementById('overlay_inner').style.display = 'none'
}
