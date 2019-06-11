'use strict'

import { Fieldbook } from '../fieldbook.js'

class VolcanoFieldbook extends Fieldbook {
  // layout changes happen here, and in the future needs a system for handling multiple different fb layouts
  populateDivs () {
    var currentDiv = this.divArray[0]
    var innerHeader = document.createTextNode('Table of Contents')
    // innerHeader.id = 'inner_div_header' + i;
    currentDiv.appendChild(innerHeader)
    var textArea = document.createElement('textarea')
    textArea.className = 'fieldbook_ta'
    textArea.rows = 1
    textArea.cols = 1
    Fieldbook.addSubtitle(currentDiv, 'General')
    Fieldbook.addSubtitle(currentDiv, 'Volcano')
    Fieldbook.addSubtitle(currentDiv, 'Iguana')
    Fieldbook.addSubtitle(currentDiv, 'Island Life Cycle')
    Fieldbook.addSubtitle(currentDiv, 'Eruption')
    Fieldbook.addSubtitle(currentDiv, 'Wildlife')
    Fieldbook.addSubtitle(currentDiv, 'Darwin and Finches')
    Fieldbook.addSubtitle(currentDiv, 'Ocean Currents')
    Fieldbook.addSubtitle(currentDiv, 'CDF and CDRS')
    Fieldbook.addSubtitle(currentDiv, 'Dynamic Island')
    Fieldbook.addSubtitle(currentDiv, 'Pink Iguana?')

    // case for page 2
    currentDiv = this.divArray[1]
    innerHeader = document.createTextNode('Volcano')
    // innerHeader.id = 'inner_div_header' + i;
    currentDiv.appendChild(innerHeader)
    Fieldbook.addLink(currentDiv, 'Sierra Negra Caldera', 2, this)
    Fieldbook.addLink(currentDiv, 'Coastal Isabela', 3, this)
    Fieldbook.addLink(currentDiv, 'Santa Cruz', 4, this)
    Fieldbook.addLink(currentDiv, 'Plazas', 5, this)
    Fieldbook.addLink(currentDiv, 'Galapagos Map', 6, this)
    Fieldbook.addLink(currentDiv, 'Santa Cruz vs. Fernandina', 7, this)
    Fieldbook.addLink(currentDiv, 'Hypothesis', 8, this)
    Fieldbook.addLink(currentDiv, 'Volcano Comparisons', 9, this)
    Fieldbook.addLink(currentDiv, 'Tectonic Plates', 10, this)

    // case for page 3
    currentDiv = this.divArray[2]
    innerHeader = document.createTextNode('Sierra Negra Caldera')
    // innerHeader.id = 'inner_div_header' + i;
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    currentDiv.appendChild(textArea.cloneNode(true))

    // case for page 4
    currentDiv = this.divArray[3]
    innerHeader = document.createTextNode('Coastal Isabela')
    // innerHeader.id = 'inner_div_header' + i;
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    currentDiv.appendChild(textArea.cloneNode(true))

    // case for page 5
    currentDiv = this.divArray[4]
    innerHeader = document.createTextNode('Santa Cruz')
    // innerHeader.id = 'inner_div_header' + i;
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    currentDiv.appendChild(textArea.cloneNode(true))

    // case for page 6
    currentDiv = this.divArray[5]
    innerHeader = document.createTextNode('Plazas')
    // innerHeader.id = 'inner_div_header' + i;
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    currentDiv.appendChild(textArea.cloneNode(true))

    // case for page 7
    currentDiv = this.divArray[6]
    innerHeader = document.createTextNode('Galapagos Map')
    // innerHeader.id = 'inner_div_header' + i;
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    currentDiv.appendChild(textArea.cloneNode(true))

    // case for page 8
    currentDiv = this.divArray[7]
    innerHeader = document.createTextNode('Santa Cruz vs. Fernandina')
    // innerHeader.id = 'inner_div_header' + i;
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    var rowDiv = document.createElement('DIV')
    rowDiv.className = 'row'
    var columnDiv = document.createElement('DIV')
    columnDiv.className = 'col'
    Fieldbook.addSubtitle(columnDiv, 'Fernandina')
    columnDiv.appendChild(textArea.cloneNode(true))
    rowDiv.appendChild(columnDiv)
    columnDiv = document.createElement('DIV')
    columnDiv.className = 'col'
    Fieldbook.addSubtitle(columnDiv, 'Santa Cruz')
    columnDiv.appendChild(textArea.cloneNode(true))
    rowDiv.appendChild(columnDiv)
    currentDiv.appendChild(rowDiv)

    // case for page 9
    currentDiv = this.divArray[8]
    innerHeader = document.createTextNode('Hypothesis')
    // innerHeader.id = 'inner_div_header' + i;
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'First Draft of Hypothesis')
    currentDiv.appendChild(textArea.cloneNode(true))
    Fieldbook.addSubtitle(currentDiv, 'Second Draft of Hypothesis')
    currentDiv.appendChild(textArea.cloneNode(true))

    // case for page 10
    currentDiv = this.divArray[9]
    innerHeader = document.createTextNode('Volcano Comparisons')
    // innerHeader.id = 'inner_div_header' + i;
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'OBSERVATIONS')
    rowDiv = document.createElement('DIV')
    rowDiv.className = 'row'
    columnDiv = document.createElement('DIV')
    columnDiv.className = 'col'
    Fieldbook.addSubtitle(columnDiv, 'Galapagos')
    columnDiv.appendChild(textArea.cloneNode(true))
    rowDiv.appendChild(columnDiv)
    columnDiv = document.createElement('DIV')
    columnDiv.className = 'col'
    Fieldbook.addSubtitle(columnDiv, 'Hawaii')
    columnDiv.appendChild(textArea.cloneNode(true))
    rowDiv.appendChild(columnDiv)
    currentDiv.appendChild(rowDiv)
    rowDiv = document.createElement('DIV')
    rowDiv.className = 'row'
    columnDiv = document.createElement('DIV')
    columnDiv.className = 'col'
    Fieldbook.addSubtitle(columnDiv, 'Japan')
    columnDiv.appendChild(textArea.cloneNode(true))
    rowDiv.appendChild(columnDiv)
    columnDiv = document.createElement('DIV')
    columnDiv.className = 'col'
    Fieldbook.addSubtitle(columnDiv, 'Central America')
    columnDiv.appendChild(textArea.cloneNode(true))
    rowDiv.appendChild(columnDiv)
    currentDiv.appendChild(rowDiv)

    // case for page 11
    currentDiv = this.divArray[10]
    innerHeader = document.createTextNode('Tectonic Plates')
    // innerHeader.id = 'inner_div_header' + i;
    currentDiv.appendChild(innerHeader)
    Fieldbook.addSubtitle(currentDiv, 'Observations')
    currentDiv.appendChild(textArea.cloneNode(true))
  }
}
export { VolcanoFieldbook }
