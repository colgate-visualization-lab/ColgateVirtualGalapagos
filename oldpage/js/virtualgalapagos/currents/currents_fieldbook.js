'use strict'

import { Fieldbook } from '../fieldbook.js'

class CurrentsFieldbook extends Fieldbook {
  // layout changes happen here, and in the future needs a system for handling multiple different fb layouts
  populateDivs () {
    var currentDiv = this.divArray[0]
    var innerHeader = document.createTextNode('Currents')
    var textArea = document.createElement('textarea')
    textArea.className = 'fieldbook_ta'
    textArea.rows = 1
    textArea.cols = 1

    // case for page 1
    currentDiv.appendChild(innerHeader)
    Fieldbook.addLink(currentDiv, 'General Notes', 1, this)
    Fieldbook.addLink(currentDiv, 'Current Formation', 2, this)
    Fieldbook.addLink(currentDiv, 'Climate', 3, this)
    Fieldbook.addLink(currentDiv, 'Temperature', 4, this)
    Fieldbook.addLink(currentDiv, 'Hypothesis and graphs', 5, this)
    Fieldbook.addLink(currentDiv, 'Upwelling', 6, this)
    Fieldbook.addLink(currentDiv, 'El Nino', 7, this)
    Fieldbook.addLink(currentDiv, 'Turtles and Tracking', 8, this)

    // case for page 2
    currentDiv = this.divArray[1]
    innerHeader = document.createTextNode('General Notes')
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    currentDiv.appendChild(textArea.cloneNode(true))

    // case for page 3
    currentDiv = this.divArray[2]
    innerHeader = document.createTextNode('Current Formation')
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'NOTES')
    currentDiv.appendChild(textArea.cloneNode(true))

    // case for page 4
    currentDiv = this.divArray[3]
    innerHeader = document.createTextNode('Climate')
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'NOTES')
    currentDiv.appendChild(textArea.cloneNode(true))

    // case for page 5
    currentDiv = this.divArray[4]
    innerHeader = document.createTextNode('Temperature')
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    var rowDiv = document.createElement('DIV')
    rowDiv.className = 'row'
    var columnDiv = document.createElement('DIV')
    columnDiv.className = 'col'
    Fieldbook.addSubtitle(columnDiv, 'Water temperature')
    columnDiv.appendChild(textArea.cloneNode(true))
    rowDiv.appendChild(columnDiv)
    columnDiv = document.createElement('DIV')
    columnDiv.className = 'col'
    Fieldbook.addSubtitle(columnDiv, 'Air Temperature')
    columnDiv.appendChild(textArea.cloneNode(true))
    rowDiv.appendChild(columnDiv)
    currentDiv.appendChild(rowDiv)

    // case for page 6
    currentDiv = this.divArray[5]
    innerHeader = document.createTextNode('Hypothesis and graphs')
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'Hypothesis example')
    currentDiv.appendChild(textArea.cloneNode(true))
    Fieldbook.addSubtitle(currentDiv, 'Your Hypothesis')
    currentDiv.appendChild(textArea.cloneNode(true))
    Fieldbook.addSubtitle(currentDiv, 'Final Hypothesis')
    currentDiv.appendChild(textArea.cloneNode(true))
    Fieldbook.addSubtitle(currentDiv, 'Graphs')
    currentDiv.appendChild(textArea.cloneNode(true))

    // case for page 7
    currentDiv = this.divArray[6]
    innerHeader = document.createTextNode('Upwelling')
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    currentDiv.appendChild(textArea.cloneNode(true))

    // case for page 8
    currentDiv = this.divArray[7]
    innerHeader = document.createTextNode('El Nino')
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    currentDiv.appendChild(textArea.cloneNode(true))

    // case for page 9
    currentDiv = this.divArray[8]
    innerHeader = document.createTextNode('Turtles and Tracking')
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    currentDiv.appendChild(textArea.cloneNode(true))
  }
}
export { CurrentsFieldbook }
