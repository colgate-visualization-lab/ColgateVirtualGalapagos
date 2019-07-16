'use strict'

function terrainMapToggle () {
  var tog = false
  var toggleBtn = document.getElementById('toggle_btn')
  toggleBtn.onclick = function () {
    ToggleDates()
  }
  function ToggleDates () {
    if (tog) {
      document.getElementById('gemap').src = '../images/volcano/terrain_map.png'
      toggleBtn.firstChild.textContent = 'check_box_outline_blank'
    } else {
      document.getElementById('gemap').src = '../images/volcano/terrain_map_dates.png'
      toggleBtn.firstChild.textContent = 'check_box'
    }
    tog = !tog
  }
}

export { terrainMapToggle }
