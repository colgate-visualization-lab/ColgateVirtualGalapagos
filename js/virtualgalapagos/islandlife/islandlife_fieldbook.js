'use strict'

import { Fieldbook } from '../fieldbook.js'

class IslandLifeFieldbook extends Fieldbook {
  // layout changes happen here, and in the future needs a system for handling multiple different fb layouts
  populateDivs () {
    var currentDiv = this.divArray[0]
    var innerHeader = document.createTextNode('Island Life Cycle Fieldbook')
    var textArea = document.createElement('textarea')
    textArea.className = 'fieldbook_ta'
    textArea.rows = 1
    textArea.cols = 1

    var titles = ['Fernandina', 'Santa Cruz', 'Elevation Data', 'Espanola Photos', 'Island Life Cycle']
    var subtitles = ['Notes on Fernandina elevation', 'Notes on environment - plants and animals', 'Notes on correlations', 'Notes on photos compared to Santa Cruz']
    
    // case for page 1
    currentDiv.appendChild(innerHeader)
    for (var i=0; i < 5; i++){
      Fieldbook.addLink(currentDiv, titles[i], i+1, this)
    }

    for (var i=0; i < 4; i++){
      currentDiv = this.divArray[i+1]
      innerHeader = document.createTextNode(titles[i])
      currentDiv.appendChild(innerHeader)
      Fieldbook.addSubtitle(currentDiv, subtitles[i])
      currentDiv.appendChild(textArea.cloneNode(true))
    }

    // case for page 6
    currentDiv = this.divArray[5]
    innerHeader = document.createTextNode(titles[4])
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'Drawing of Island Life Cycle')
    var mainDiv = document.createElement('DIV')
    mainDiv.setAttribute('id', 'draw')
    currentDiv.appendChild(mainDiv)
  }
}
export { IslandLifeFieldbook }
