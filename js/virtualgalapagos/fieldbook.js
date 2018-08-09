var divArray = [];
var pageNumber = -1
var numPages = 11;
var innerDiv;
var overlayDiv;
var fb_on = false;

initFieldbook();

function initFieldbook() {
	// create and display fieldbook button
	initFieldbookButton();
	
	// create overlay div
	overlayDiv = document.createElement('div');
	overlayDiv.id = 'fb_overlay';
	document.body.append(overlayDiv);
	
	// create each div for this module's fieldbook
	createDivs();
	
	// populate each div with the apporpriate elements
	populateDivs();
	
	// add the navbar to each of the inner divs
	createNavBars();
	
	// add each of the divs to the page body
	addDivs();
	
	// update page contents
	updatePages();
	
	// set active page
	setPage(1);
}

// toggle Fieldbook on and off
function toggleFB(){
	if (fb_on){
		saveAndClose();
	} else {
		fieldbookOn();
	}
	fb_on = !fb_on;
}

// sets up and displays persistent fieldbook button
function initFieldbookButton(){
  document.getElementById("fb_button").onclick = function () { 
    	toggleFB(); 
    };
}

function setPage(number){
	// validate page number
	if (number > (numPages-1) || number < 0 || number == pageNumber){
		return;
	}
	//hide and store active page
	if (pageNumber!=-1){
		savePage();
		divArray[pageNumber].style.display = 'none';
	}
	// setup new active page
	divArray[number].style.display = 'block';
	pageNumber = number;
}

function saveAndClose(){
	savePage();
	fieldbookOff();
}

function discardAndClose(){
	fieldbookOff();
}

function fieldbookOn() {
	updatePages();
	overlayDiv.style.display = "block";
}

function fieldbookOff(){
	overlayDiv.style.display = "none";
}

// Saves any textarea content from currently activate page into web storage
function savePage() {
	var textareaArray = divArray[pageNumber].getElementsByTagName('textarea');
	for (i = 0; i < textareaArray.length; i++){
		localStorage.setItem('inner'+pageNumber+'textarea'+i, textareaArray[i].value);
	}
}


function clearFieldbook(){
  localStorage.clear();
}

function createDivs(){
	for (i = 0; i < numPages; i++) { 
    	var inner_div = document.createElement('div');
		inner_div.id = 'fb_overlay_inner';
		divArray.push(inner_div);
	} 
}

function createNavBars(){
	for (i = 0; i < divArray.length; i++){
		var inner_div = divArray[i];
		var save_btn = document.createElement('BUTTON');
		save_btn.className = 'btn btn-light btn-sm';
        var icon = document.createElement("i");
        icon.className = "material-icons";
        icon.innerHTML = "close";
        save_btn.appendChild(icon);
		save_btn.onclick = function () { 
			toggleFB();
		};
//		var discard_btn = document.createElement('BUTTON');
//		discard_btn.className = 'btn btn-secondary';
//		discard_btn.appendChild(document.createTextNode('Discard'))
//		discard_btn.onclick = function () { 
//			discardAndClose();
//		};
		var back_btn = document.createElement('BUTTON');
		back_btn.className = 'btn btn-light btn-sm';
		icon = document.createElement("i");
        icon.className = "material-icons";
        icon.innerHTML = "arrow_back";
        back_btn.appendChild(icon);
		back_btn.onclick = function () { 
			setPage(pageNumber-1); 
		};
		var next_btn = document.createElement('BUTTON');
		next_btn.className = 'btn btn-light btn-sm';
		icon = document.createElement("i");
        icon.className = "material-icons";
        icon.innerHTML = "arrow_forward";
        next_btn.appendChild(icon);
		next_btn.onclick = function () { 
			setPage(pageNumber+1); 
		};
		var home_btn = document.createElement('BUTTON');
		home_btn.className = 'btn btn-light btn-sm';
		icon = document.createElement("i");
        icon.className = "material-icons";
        icon.innerHTML = "home";
        home_btn.appendChild(icon);
		home_btn.onclick = function () { 
			setPage(1); 
		};
        var clear_btn = document.createElement('BUTTON');
		clear_btn.className = 'btn btn-light btn-sm';
		clear_btn.appendChild(document.createTextNode('Clear'))
		clear_btn.onclick = function () { 
			clearFieldbook();
		};
		inner_div.appendChild(clear_btn);
		inner_div.appendChild(home_btn);
		inner_div.appendChild(back_btn);
//		inner_div.appendChild(discard_btn);
		inner_div.appendChild(next_btn);
		inner_div.appendChild(save_btn);
	}
}

function addSubtitle(parent, textcontent){
	var subtitle = document.createElement('p');
	subtitle.appendChild(document.createTextNode(textcontent));
	subtitle.className = 'fieldbook_textcontent';
	parent.appendChild(subtitle);
}

function addLink(parent, textcontent, pagenum){
	var link = document.createElement('p');
	link.appendChild(document.createTextNode(textcontent));
	link.className = 'fieldbook_link';
	link.onclick = function () { 
    	setPage(pagenum); 
    };
	link.onmouseover = function () {
		link.style = "color: #808A80;";
	}
	link.onmouseout = function() {
		link.style = "color: white;";
	}
	parent.appendChild(link);
}


function populateDivs() {
	// case for page 1
	var curr_div = divArray[0];
	var inner_header = document.createTextNode('Table of Contents');
	inner_header.id = 'inner_div_header' + i;
	curr_div.appendChild(inner_header);
	var textArea = document.createElement('textarea');
	textArea.className = 'fieldbook_ta';
	textArea.rows = 1;
	textArea.cols = 1;
	addSubtitle(curr_div,'General');
	addSubtitle(curr_div,'Volcano');
	addSubtitle(curr_div,'Iguana');
	addSubtitle(curr_div,'Island Life Cycle');
	addSubtitle(curr_div,'Eruption');
	addSubtitle(curr_div,'Wildlife');
	addSubtitle(curr_div,'Darwin and Finches');
	addSubtitle(curr_div,'Ocean Currents');
	addSubtitle(curr_div,'CDF and CDRS');
	addSubtitle(curr_div,'Dynamic Island');
	addSubtitle(curr_div,'Pink Iguana?');
	
	
	// case for page 2
	curr_div = divArray[1]
	var inner_header = document.createTextNode('Volcano');
	inner_header.id = 'inner_div_header' + i;
	curr_div.appendChild(inner_header);
	addLink(curr_div, 'Sierra Negra Caldera',2);
	addLink(curr_div, 'Coastal Isabela',3);
	addLink(curr_div, 'Santa Cruz',4);
	addLink(curr_div, 'Plazas',5);
	addLink(curr_div, 'Galapagos Map',6);
	addLink(curr_div, 'Santa Cruz vs. Fernandina',7);
	addLink(curr_div, 'Hypothesis',8);
	addLink(curr_div, 'Volcano Comparisons',9);
	addLink(curr_div, 'Tectonic Plates',10);
	
	
	// case for page 3
	curr_div = divArray[2];
	var inner_header = document.createTextNode('Sierra Negra Caldera');
	inner_header.id = 'inner_div_header' + i;
	curr_div.appendChild(inner_header);
	addSubtitle(curr_div, 'OBSERVATIONS');
	curr_div.appendChild(textArea.cloneNode(true));
	
	// case for page 4
	curr_div = divArray[3];
	var inner_header = document.createTextNode('Coastal Isabela');
	inner_header.id = 'inner_div_header' + i;
	curr_div.appendChild(inner_header);
	addSubtitle(curr_div, 'OBSERVATIONS');
	curr_div.appendChild(textArea.cloneNode(true));
	
	// case for page 5
	curr_div = divArray[4];
	var inner_header = document.createTextNode('Santa Cruz');
	inner_header.id = 'inner_div_header' + i;
	curr_div.appendChild(inner_header);
	addSubtitle(curr_div, 'OBSERVATIONS');
	curr_div.appendChild(textArea.cloneNode(true));
	
	// case for page 6
	curr_div = divArray[5];
	var inner_header = document.createTextNode('Plazas');
	inner_header.id = 'inner_div_header' + i;
	curr_div.appendChild(inner_header);
	addSubtitle(curr_div, 'OBSERVATIONS');
	curr_div.appendChild(textArea.cloneNode(true));
	
	// case for page 7
	curr_div = divArray[6];
	var inner_header = document.createTextNode('Galapagos Map');
	inner_header.id = 'inner_div_header' + i;
	curr_div.appendChild(inner_header);
	addSubtitle(curr_div, 'OBSERVATIONS');
	curr_div.appendChild(textArea.cloneNode(true));
	
	// case for page 8
	curr_div = divArray[7];
	var inner_header = document.createTextNode('Santa Cruz vs. Fernandina');
	inner_header.id = 'inner_div_header' + i;
	curr_div.appendChild(inner_header);
	addSubtitle(curr_div, 'OBSERVATIONS');
	var row_div = document.createElement('DIV');
	row_div.className ='row';
	var col_div = document.createElement('DIV');
	col_div.className = 'col';
	addSubtitle(col_div, 'Santa Cruz');
	col_div.appendChild(textArea.cloneNode(true));
	row_div.appendChild(col_div);
	col_div = document.createElement('DIV');
	col_div.className = 'col';
	addSubtitle(col_div, 'Fernandina');
	col_div.appendChild(textArea.cloneNode(true));
	row_div.appendChild(col_div);
	curr_div.appendChild(row_div);
	
	// case for page 9
	curr_div = divArray[8];
	var inner_header = document.createTextNode('Hypothesis');
	inner_header.id = 'inner_div_header' + i;
	curr_div.appendChild(inner_header);
	addSubtitle(curr_div, 'First Draft of Hypothesis');
	curr_div.appendChild(textArea.cloneNode(true));
	addSubtitle(curr_div, 'Second Draft of Hypothesis');
	curr_div.appendChild(textArea.cloneNode(true));
	
	// case for page 10
	curr_div = divArray[9];
	var inner_header = document.createTextNode('Volcano Comparisons');
	inner_header.id = 'inner_div_header' + i;
	curr_div.appendChild(inner_header);
	addSubtitle(curr_div, 'OBSERVATIONS');
	var row_div = document.createElement('DIV');
	row_div.className ='row';
	var col_div = document.createElement('DIV');
	col_div.className = 'col';
	addSubtitle(col_div, 'Galapagos');
	col_div.appendChild(textArea.cloneNode(true));
	row_div.appendChild(col_div);
	col_div = document.createElement('DIV');
	col_div.className = 'col';
	addSubtitle(col_div, 'Hawaii');
	col_div.appendChild(textArea.cloneNode(true));
	row_div.appendChild(col_div);
	curr_div.appendChild(row_div);
	var row_div = document.createElement('DIV');
	row_div.className ='row';
	var col_div = document.createElement('DIV');
	col_div.className = 'col';
	addSubtitle(col_div, 'Japan');
	col_div.appendChild(textArea.cloneNode(true));
	row_div.appendChild(col_div);
	col_div = document.createElement('DIV');
	col_div.className = 'col';
	addSubtitle(col_div, 'Central America');
	col_div.appendChild(textArea.cloneNode(true));
	row_div.appendChild(col_div);
	curr_div.appendChild(row_div);
	
	// case for page 11
	curr_div = divArray[10];
	var inner_header = document.createTextNode('Tectonic Plates');
	inner_header.id = 'inner_div_header' + i;
	curr_div.appendChild(inner_header);
	addSubtitle(curr_div, 'Observations');
	curr_div.appendChild(textArea.cloneNode(true));	
	
}

function addDivs(){
	for (i = 0; i < divArray.length; i++){
		overlayDiv.appendChild(divArray[i]);
		divArray[i].style.display = "none";
	}
}

function updatePages(){
	for (i = 0; i < divArray.length; i++){
		var textareaArray = divArray[i].getElementsByTagName('textarea');
		for (k = 0; k < textareaArray.length; k++){
			textareaArray[k].value = localStorage.getItem('inner'+i+'textarea'+k);
		}
	}
}

