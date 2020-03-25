'use strict'

function init (controller) {
  hideBtn()
  completeSections(controller)
  function completeSections (controller) {
    if (controller.getItem('currents_sections')) {
      var doneBtn = document.getElementById('doneBtn')
      doneBtn.style.display = 'flex'
    }
  }
  function hideBtn () {
    var nextBtn = document.getElementById('nextBtn')
    nextBtn.style.display = 'none'
  }
}

export { init as endSectionInit }
