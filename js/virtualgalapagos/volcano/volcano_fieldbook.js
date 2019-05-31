"use strict"

import {Fieldbook} from "../fieldbook.js"

class VolcanoFieldbook extends Fieldbook{
    constructor(fbPageList, numPages, mastercontroller){
        super(fbPageList,numPages, mastercontroller);
    }

    // layout changes happen here, and in the future needs a system for handling multiple different fb layouts
    populateDivs() {
        var curr_div = this.divArray[0];
        var inner_header = document.createTextNode('Table of Contents');
        // inner_header.id = 'inner_div_header' + i;
        curr_div.appendChild(inner_header);
        var textArea = document.createElement('textarea');
        textArea.className = 'fieldbook_ta';
        textArea.rows = 1;
        textArea.cols = 1;
        Fieldbook.addSubtitle(curr_div,'General');
        Fieldbook.addSubtitle(curr_div,'Volcano');
        Fieldbook.addSubtitle(curr_div,'Iguana');
        Fieldbook.addSubtitle(curr_div,'Island Life Cycle');
        Fieldbook.addSubtitle(curr_div,'Eruption');
        Fieldbook.addSubtitle(curr_div,'Wildlife');
        Fieldbook.addSubtitle(curr_div,'Darwin and Finches');
        Fieldbook.addSubtitle(curr_div,'Ocean Currents');
        Fieldbook.addSubtitle(curr_div,'CDF and CDRS');
        Fieldbook.addSubtitle(curr_div,'Dynamic Island');
        Fieldbook.addSubtitle(curr_div,'Pink Iguana?');
        
        
        // case for page 2
        curr_div = this.divArray[1]
        var inner_header = document.createTextNode('Volcano');
        // inner_header.id = 'inner_div_header' + i;
        curr_div.appendChild(inner_header);
        Fieldbook.addLink(curr_div, 'Sierra Negra Caldera',2, this);
        Fieldbook.addLink(curr_div, 'Coastal Isabela',3, this);
        Fieldbook.addLink(curr_div, 'Santa Cruz',4, this);
        Fieldbook.addLink(curr_div, 'Plazas',5, this);
        Fieldbook.addLink(curr_div, 'Galapagos Map',6, this);
        Fieldbook.addLink(curr_div, 'Santa Cruz vs. Fernandina',7, this);
        Fieldbook.addLink(curr_div, 'Hypothesis',8, this);
        Fieldbook.addLink(curr_div, 'Volcano Comparisons',9, this);
        Fieldbook.addLink(curr_div, 'Tectonic Plates',10, this);
        
        
        // case for page 3
        curr_div = this.divArray[2];
        var inner_header = document.createTextNode('Sierra Negra Caldera');
        // inner_header.id = 'inner_div_header' + i;
        curr_div.appendChild(inner_header);
        Fieldbook.addSubtitle(curr_div, 'OBSERVATIONS');
        curr_div.appendChild(textArea.cloneNode(true));
        
        // case for page 4
        curr_div = this.divArray[3];
        var inner_header = document.createTextNode('Coastal Isabela');
        // inner_header.id = 'inner_div_header' + i;
        curr_div.appendChild(inner_header);
        Fieldbook.addSubtitle(curr_div, 'OBSERVATIONS');
        curr_div.appendChild(textArea.cloneNode(true));
        
        // case for page 5
        curr_div = this.divArray[4];
        var inner_header = document.createTextNode('Santa Cruz');
        // inner_header.id = 'inner_div_header' + i;
        curr_div.appendChild(inner_header);
        Fieldbook.addSubtitle(curr_div, 'OBSERVATIONS');
        curr_div.appendChild(textArea.cloneNode(true));
        
        // case for page 6
        curr_div = this.divArray[5];
        var inner_header = document.createTextNode('Plazas');
        // inner_header.id = 'inner_div_header' + i;
        curr_div.appendChild(inner_header);
        Fieldbook.addSubtitle(curr_div, 'OBSERVATIONS');
        curr_div.appendChild(textArea.cloneNode(true));
        
        // case for page 7
        curr_div = this.divArray[6];
        var inner_header = document.createTextNode('Galapagos Map');
        // inner_header.id = 'inner_div_header' + i;
        curr_div.appendChild(inner_header);
        Fieldbook.addSubtitle(curr_div, 'OBSERVATIONS');
        curr_div.appendChild(textArea.cloneNode(true));
        
        // case for page 8
        curr_div = this.divArray[7];
        var inner_header = document.createTextNode('Santa Cruz vs. Fernandina');
        // inner_header.id = 'inner_div_header' + i;
        curr_div.appendChild(inner_header);
        Fieldbook.addSubtitle(curr_div, 'OBSERVATIONS');
        var row_div = document.createElement('DIV');
        row_div.className ='row';
        var col_div = document.createElement('DIV');
        col_div.className = 'col';
        Fieldbook.addSubtitle(col_div, 'Fernandina');
        col_div.appendChild(textArea.cloneNode(true));
        row_div.appendChild(col_div);
        col_div = document.createElement('DIV');
        col_div.className = 'col';
        Fieldbook.addSubtitle(col_div, 'Santa Cruz');
        col_div.appendChild(textArea.cloneNode(true));
        row_div.appendChild(col_div);
        curr_div.appendChild(row_div);
        
        // case for page 9
        curr_div = this.divArray[8];
        var inner_header = document.createTextNode('Hypothesis');
        // inner_header.id = 'inner_div_header' + i;
        curr_div.appendChild(inner_header);
        Fieldbook.addSubtitle(curr_div, 'First Draft of Hypothesis');
        curr_div.appendChild(textArea.cloneNode(true));
        Fieldbook.addSubtitle(curr_div, 'Second Draft of Hypothesis');
        curr_div.appendChild(textArea.cloneNode(true));
        
        // case for page 10
        curr_div = this.divArray[9];
        var inner_header = document.createTextNode('Volcano Comparisons');
        // inner_header.id = 'inner_div_header' + i;
        curr_div.appendChild(inner_header);
        Fieldbook.addSubtitle(curr_div, 'OBSERVATIONS');
        var row_div = document.createElement('DIV');
        row_div.className ='row';
        var col_div = document.createElement('DIV');
        col_div.className = 'col';
        Fieldbook.addSubtitle(col_div, 'Galapagos');
        col_div.appendChild(textArea.cloneNode(true));
        row_div.appendChild(col_div);
        col_div = document.createElement('DIV');
        col_div.className = 'col';
        Fieldbook.addSubtitle(col_div, 'Hawaii');
        col_div.appendChild(textArea.cloneNode(true));
        row_div.appendChild(col_div);
        curr_div.appendChild(row_div);
        var row_div = document.createElement('DIV');
        row_div.className ='row';
        var col_div = document.createElement('DIV');
        col_div.className = 'col';
        Fieldbook.addSubtitle(col_div, 'Japan');
        col_div.appendChild(textArea.cloneNode(true));
        row_div.appendChild(col_div);
        col_div = document.createElement('DIV');
        col_div.className = 'col';
        Fieldbook.addSubtitle(col_div, 'Central America');
        col_div.appendChild(textArea.cloneNode(true));
        row_div.appendChild(col_div);
        curr_div.appendChild(row_div);
        
        // case for page 11
        curr_div = this.divArray[10];
        var inner_header = document.createTextNode('Tectonic Plates');
        // inner_header.id = 'inner_div_header' + i;
        curr_div.appendChild(inner_header);
        Fieldbook.addSubtitle(curr_div, 'Observations');
        curr_div.appendChild(textArea.cloneNode(true));	 
    }
}
export {VolcanoFieldbook}