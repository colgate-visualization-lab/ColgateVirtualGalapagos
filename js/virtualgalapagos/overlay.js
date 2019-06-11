'use strict'

function on (name) {
  document.getElementById('overlay').style.display = 'block'
  document.getElementById(name + '_inner').style.display = 'block'
}

function off (name) {
  document.getElementById('overlay').style.display = 'none'
  document.getElementById(name + '_inner').style.display = 'none'
}
