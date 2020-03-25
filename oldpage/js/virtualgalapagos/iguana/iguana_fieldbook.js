'use strict'

import { Fieldbook } from '../fieldbook.js'

class IguanaFieldbook extends Fieldbook {
  // layout changes happen here, and in the future needs a system for handling multiple different fb layouts
  populateDivs () {
    var currentDiv = this.divArray[0]
    var innerHeader = document.createTextNode('Iguana')
    var textArea = document.createElement('textarea')
    textArea.className = 'fieldbook_ta'
    textArea.rows = 1
    textArea.cols = 1

    // case for page 1
    currentDiv.appendChild(innerHeader)
    Fieldbook.addLink(currentDiv, 'General Notes', 1, this)
    Fieldbook.addLink(currentDiv, 'How they were carried', 2, this)
    Fieldbook.addLink(currentDiv, 'Pumice', 3, this)
    Fieldbook.addLink(currentDiv, 'Marine vs. Land Iguana', 4, this)
    Fieldbook.addLink(currentDiv, 'Phylogenetic Tree', 5, this)
    Fieldbook.addLink(currentDiv, 'Green vs. Marine Iguana', 6, this)
    Fieldbook.addLink(currentDiv, 'Hypothesis', 7, this)

    // case for page 2
    currentDiv = this.divArray[1]
    innerHeader = document.createTextNode('General Notes')
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    currentDiv.appendChild(textArea.cloneNode(true))

    // case for page 3
    currentDiv = this.divArray[2]
    innerHeader = document.createTextNode('How they were carried')
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    currentDiv.appendChild(textArea.cloneNode(true))

    // case for page 4
    currentDiv = this.divArray[3]
    innerHeader = document.createTextNode('Pumice')
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    currentDiv.appendChild(textArea.cloneNode(true))

    // case for page 5
    currentDiv = this.divArray[4]
    innerHeader = document.createTextNode('Marine vs. Land Iguana')
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    var rowDiv = document.createElement('DIV')
    rowDiv.className = 'row'
    var columnDiv = document.createElement('DIV')
    columnDiv.className = 'col'
    Fieldbook.addSubtitle(columnDiv, 'Marine Iguana')
    columnDiv.appendChild(textArea.cloneNode(true))
    rowDiv.appendChild(columnDiv)
    columnDiv = document.createElement('DIV')
    columnDiv.className = 'col'
    Fieldbook.addSubtitle(columnDiv, 'Land Iguana')
    columnDiv.appendChild(textArea.cloneNode(true))
    rowDiv.appendChild(columnDiv)
    currentDiv.appendChild(rowDiv)

    // case for page 6
    currentDiv = this.divArray[5]
    innerHeader = document.createTextNode('Phylogenetic Tree')
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'Drawing of Tree')
    var mainDiv = document.createElement('DIV')
    mainDiv.setAttribute('id', 'draw')
    currentDiv.appendChild(mainDiv)

    // case for page 7
    currentDiv = this.divArray[6]
    innerHeader = document.createTextNode('Green vs. Marine Iguana')
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    rowDiv = document.createElement('DIV')
    rowDiv.className = 'row'
    columnDiv = document.createElement('DIV')
    columnDiv.className = 'col'
    Fieldbook.addSubtitle(columnDiv, 'Green Iguana')
    columnDiv.appendChild(textArea.cloneNode(true))
    rowDiv.appendChild(columnDiv)
    columnDiv = document.createElement('DIV')
    columnDiv.className = 'col'
    Fieldbook.addSubtitle(columnDiv, 'Marine Iguana')
    columnDiv.appendChild(textArea.cloneNode(true))
    rowDiv.appendChild(columnDiv)
    currentDiv.appendChild(rowDiv)

    // case for page 8
    currentDiv = this.divArray[7]
    innerHeader = document.createTextNode('Hypothesis')
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'First Draft of Hypothesis')
    currentDiv.appendChild(textArea.cloneNode(true))
    Fieldbook.addSubtitle(currentDiv, 'Second Draft of Hypothesis')
    currentDiv.appendChild(textArea.cloneNode(true))
  }
}
export { IguanaFieldbook }
